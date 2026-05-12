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

    // Destructure all new tracking fields from body
    const {
      fullName,
      email,
      phone,
      serviceType,
      condition,
      source,
      utm_medium,
      utm_campaign,
      utm_term,
      referrer,
      landing_page,
      gclid,
    } = body

    const { env } = getRequestContext()
    const db = env?.DB
    if (!db) console.warn('⚠️ DB not available (local dev)')

    // =========================
    // 📧 SEND EMAIL (ADMIN) - Updated with Tracking Info
    // =========================
    let emailStatus = 'failed'

    try {
      const emailResponse = await sendEmail({
        from: 'SofaRevive <hello@sofarevive.com>',
        to: ['sofarevive72@gmail.com'],
        subject: `New Lead: ${fullName} 🚀`,
        html: `
          <h2>New Booking</h2>
          <p><b>Name:</b> ${fullName}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Email:</b> ${email || 'N/A'}</p>
          <p><b>Service:</b> ${serviceType}</p>
          <p><b>Condition:</b> ${condition}</p>
          <hr />
          <h3>Tracking Info</h3>
          <p><b>Source:</b> ${source || 'direct'}</p>
          <p><b>Keyword (Term):</b> ${utm_term || 'N/A'}</p>
          <p><b>Referrer:</b> ${referrer || 'Direct Traffic'}</p>
          <p><b>Campaign:</b> ${utm_campaign || 'N/A'}</p>
          <p><b>Landing Page:</b> ${landing_page || 'N/A'}</p>
          <p><b>Google Click ID:</b> ${gclid || 'N/A'}</p>
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
    // 📧 AUTO REPLY TO CUSTOMER (Unchanged Pattern)
    // =========================
    if (email) {
      const whatsappLink = `https://wa.me/6366921602`
      try {
        await sendEmail({
          from: 'SofaRevive <hello@sofarevive.com>',
          to: [email],
          subject: 'Thank You for Choosing Us',
          html: `  <div style="font-family: Arial; max-width:600px; margin:auto; padding:20px;">
  <p>Dear <strong>Valued Customer</strong>,</p>
  <p>Thank you for choosing <b>SofaRevive</b>. We truly appreciate your trust and support.</p>
  <p>Your request for <b>${serviceType}</b> has been successfully received.</p>
  <div style="background:#f8f9fa; padding:15px; border-radius:8px; margin:15px 0;">
    <p><strong>Service:</strong> ${serviceType}</p>
    <p><strong>Condition:</strong> ${condition}</p>
    <p><strong>Phone:</strong> ${phone}</p>
  </div>
  <p>Our team is committed to delivering the highest quality experience and will contact you shortly.</p>
  <a href="tel:+916366921602" style="display:inline-block; margin-top:10px; padding:10px 15px; background:black; color:white; text-decoration:none; border-radius:5px;">📞 Call Us</a>
  <p>Need quick help?</p>
  <a href="${whatsappLink}" style="display:inline-block; padding:12px 20px; background:#25D366; color:white; text-decoration:none; border-radius:5px;">💬 Chat on WhatsApp</a>
  <hr style="margin:20px 0;" />
  <p>Warm regards,<br/><b>SofaRevive Team</b><br/>📞 +916366921602<br/>🌐 www.sofarevive.com</p>
</div>`,
        })
      } catch (err) {
        console.error('Customer email failed:', err)
      }
    }

    // =========================
    // 📲 WHATSAPP LINK (Unchanged Pattern)
    // =========================
    const whatsappMessage = encodeURIComponent(
      `Hi ${fullName}, your booking for ${serviceType} is confirmed. Our team will contact you shortly.`,
    )
    const whatsappUrl = `https://wa.me/91${phone}?text=${whatsappMessage}`
    const whatsappStatus = 'initiated'

    // =========================
    // 💾 SAVE TO DB - Updated with 6 New Tracking Columns
    // =========================
    if (db) {
      await db
        .prepare(
          `
          INSERT INTO quotes 
          (fullName, email, phone, serviceType, condition, emailStatus, whatsappStatus, status, source, utm_medium, utm_campaign, utm_term, referrer, landing_page, gclid)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
          utm_medium || '',
          utm_campaign || '',
          utm_term || '',
          referrer || '',
          landing_page || '',
          gclid || '',
        )
        .run()
    }

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
