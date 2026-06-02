export const runtime = 'edge'

import { getTrackingPayload } from '@/public/utils/tracker'
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

    // Clone request before running read operations to handle any potential payload locks safely
    const trackingData = getTrackingPayload(req.clone())

    body = await req.json()

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

    // ============================================
    // 📧 SEND EMAIL (ADMIN) - Enhanced with Complete Telemetry
    // ============================================
    let emailStatus = 'failed'

    try {
      const emailResponse = await sendEmail({
        from: 'SofaRevive <hello@sofarevive.com>',
        to: ['sofarevive72@gmail.com'],
        subject: `New Lead: ${fullName} 🚀`,
        html: `
          <h2>New Booking Detail</h2>
          <p><b>Name:</b> ${fullName}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Email:</b> ${email || 'N/A'}</p>
          <p><b>Service:</b> ${serviceType}</p>
          <p><b>Condition:</b> ${condition}</p>
          
          <hr />
          <h3>🕵️‍♂️ Advanced Device & IP Fingerprinting</h3>
          <p><b>IP Address:</b> ${trackingData.ip}</p>
          <p><b>Browser:</b> ${trackingData.browser}</p>
          <p><b>Operating System:</b> ${trackingData.os}</p>
          <p><b>Device Category:</b> ${trackingData.deviceType}</p>
          <p><b>Language Profile:</b> ${trackingData.language}</p>

          <hr />
          <h3>📊 Marketing Campaign Tracking</h3>
          <p><b>Source:</b> ${source || 'direct'}</p>
          <p><b>Keyword (Term):</b> ${utm_term || 'N/A'}</p>
          <p><b>Referrer URL:</b> ${referrer || 'Direct Traffic'}</p>
          <p><b>Campaign name:</b> ${utm_campaign || 'N/A'}</p>
          <p><b>Landing Target:</b> ${landing_page || 'N/A'}</p>
          <p><b>Google Click ID (GCLID):</b> ${gclid || 'N/A'}</p>
        `,
      })

      if (emailResponse?.id) emailStatus = 'sent'
    } catch (err) {
      console.error('Email send failed:', err)
    }

    // ============================================
    // 💾 SAVE TO DB - Make sure these matching columns exist in your table
    // ============================================

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

    if (db) {
      await db
        .prepare(
          `
          INSERT INTO quotes 
          (
            fullName, email, phone, serviceType, condition, emailStatus, whatsappStatus, status, 
            source, utm_medium, utm_campaign, utm_term, referrer, landing_page, gclid,
            ipAddress, browser, os, deviceType, city, country, isp
          )
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,
        )
        .bind(
          fullName,
          email || '',
          phone,
          serviceType || '',
          condition || '',
          emailStatus,
          'initiated',
          'new',
          source || 'website',
          utm_medium || '',
          utm_campaign || '',
          utm_term || '',
          referrer || '',
          landing_page || '',
          gclid || '',
          trackingData.ip,
          trackingData.browser,
          trackingData.os,
          trackingData.deviceType,
          trackingData.city,
          trackingData.country,
          trackingData.isp,
        )
        .run()
    }

    const whatsappMessage = encodeURIComponent(
      `Hi ${fullName}, your booking is confirmed.`,
    )
    const whatsappUrl = `https://wa.me/91${phone}?text=${whatsappMessage}`

    return new Response(
      JSON.stringify({ success: true, whatsappUrl, emailStatus }),
      { status: 200 },
    )
  } catch (error: any) {
    console.error('API Error:', error)
    return new Response(JSON.stringify({ error: error?.message }), {
      status: 500,
    })
  }
}
