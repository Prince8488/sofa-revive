export const runtime = 'edge'

import { getRequestContext } from '@cloudflare/next-on-pages'

const sendEmail = async (payload: any) => {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  return res.json()
}

export async function POST(req: Request) {
  let body: any

  try {
    console.log('🔥 API HIT')

    body = await req.json()

    const { fullName, email, phone, serviceType, condition, source } = body

    // =========================
    // ✅ VALIDATION
    // =========================
    if (!fullName || !phone) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400 },
      )
    }

    const isValidPhone = /^[6-9]\d{9}$/.test(phone)
    if (!isValidPhone) {
      return new Response(JSON.stringify({ error: 'Invalid phone number' }), {
        status: 400,
      })
    }

    const isValidEmail = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    const { env } = getRequestContext()
    const db = env?.DB
    if (!db) console.warn('⚠️ DB not available (local dev)')

    // =========================
    // 📧 SEND EMAIL (ADMIN)
    // =========================
    let emailStatus = 'failed'

    try {
      const emailResponse = await sendEmail({
        from: 'SofaRevive <hello@sofarevive.com>',
        to: ['sofarevive72@gmail.com'],
        subject: 'New Lead 🚀',
        html: `
          <h2>New Booking</h2>
          <p><b>Name:</b> ${fullName}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Email:</b> ${email || 'N/A'}</p>
          <p><b>Service:</b> ${serviceType}</p>
          <p><b>Condition:</b> ${condition}</p>
        `,
      })

      if (emailResponse?.id) {
        emailStatus = 'sent'
      } else {
        emailStatus = 'failed'
        console.error('Email error:', emailResponse)
      }
    } catch (err) {
      console.error('Email send failed:', err)
    }

    // =========================
    // 📧 AUTO REPLY TO CUSTOMER
    // =========================
    if (email && isValidEmail) {
      const whatsappLink = `https://wa.me/6366921602`
      try {
        await sendEmail({
          from: 'SofaRevive <hello@sofarevive.com>',
          to: [email],
          subject: 'Thank You for Choosing Us',
          html: `  <div style="font-family: Arial; max-width:600px; margin:auto; padding:20px;">

  <p>Dear <strong>Valued Customer</strong>,</p>

  <p>
    We hope this message finds you well.
  </p>

  <p>
    Thank you for choosing <b>SofaRevive</b>. We truly appreciate your trust and support.
  </p>

  <p>
    Your request for <b>${serviceType}</b> has been successfully received.
  </p>

  <div style="background:#f8f9fa; padding:15px; border-radius:8px; margin:15px 0;">
    <p><strong>Service:</strong> ${serviceType}</p>
    <p><strong>Condition:</strong> ${condition}</p>
    <p><strong>Phone:</strong> ${phone}</p>
  </div>

  <p>
    Our team is committed to delivering the highest quality experience and will contact you shortly.
  </p>

  <p>
    If you have any questions or need immediate assistance, feel free to reach out.
  </p>

  <a href="tel:+916366921602" style="
    display:inline-block;
    margin-top:10px;
    padding:10px 15px;
    background:black;
    color:white;
    text-decoration:none;
    border-radius:5px;
  ">
    📞 Call Us
  </a>


<p>Need quick help?</p>

<a href="${whatsappLink}" style="
  display:inline-block;
  padding:12px 20px;
  background:#25D366;
  color:white;
  text-decoration:none;
  border-radius:5px;
">
  💬 Chat on WhatsApp
</a>


  <hr style="margin:20px 0;" />

  <p>
    We look forward to continuing to serve you.
  </p>

  <p>
    Warm regards,<br/>
    <b>SofaRevive Team</b><br/>
    📞 +916366921602<br/>
    🌐 www.sofarevive.com
  </p>

</div>`,
        })
      } catch (err) {
        console.error('Customer email failed:', err)
      }
    }

    // =========================
    // 📲 WHATSAPP LINK
    // =========================
    const whatsappMessage = encodeURIComponent(
      `Hi ${fullName}, your booking for ${serviceType} is confirmed. Our team will contact you shortly.`,
    )

    const whatsappUrl = `https://wa.me/91${phone}?text=${whatsappMessage}`

    const whatsappStatus = 'initiated'

    // =========================
    // 💾 SAVE TO DB
    // =========================
    if (db) {
      await db
        .prepare(
          `
          INSERT INTO quotes 
          (fullName, email, phone, serviceType, condition, emailStatus, whatsappStatus, status, source, isValidLead)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,
        )
        .bind(
          fullName,
          email || '',
          phone,
          serviceType || '',
          condition || '',
          emailStatus,
          whatsappStatus,
          'new',
          source || 'website',
          isValidPhone ? 1 : 0,
        )
        .run()
    }

    // =========================
    // ✅ RESPONSE
    // =========================

    return new Response(
      JSON.stringify({
        success: true,
        whatsappUrl,
        emailStatus,
      }),
      { status: 200 },
    )
  } catch (error: any) {
    console.error('API Error:', error)

    return new Response(
      JSON.stringify({
        error: error?.message || 'Something went wrong',
      }),
      { status: 500 },
    )
  }
}
