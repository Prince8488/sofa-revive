export const runtime = 'edge'

// ✅ EDGE SAFE EMAIL FUNCTION
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

export async function POST(req: Request, context: any) {
  let body: any

  try {
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

    const db = context?.env?.DB
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
      try {
        await sendEmail({
          from: 'SofaRevive <hello@sofarevive.com>',
          to: [email],
          subject: 'Booking Confirmation',
          html: `
            <h2>Hi ${fullName},</h2>
            <p>Your request for <b>${serviceType}</b> has been received.</p>
            <p>We will contact you shortly.</p>
            <br/>
            <p>📞 SofaRevive Team</p>
          `,
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
          (fullName, email, phone, serviceType, condition, emailStatus, whatsappStatus, status, source)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
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
