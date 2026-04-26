import PolicyLayout from '@/components/layout/legal/PolicyLayout'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Privacy Policy | SofaRevive Bangalore',

  description:
    'Learn how SofaRevive collects, uses, and protects your personal information when you use our sofa repair and upholstery services in Bangalore.',

  alternates: {
    canonical: 'https://www.sofarevive.com/privacy-policy',
  },
}

const privacySchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',

  name: 'Privacy Policy - SofaRevive',

  description:
    'Privacy policy explaining how SofaRevive handles customer data and information in Bangalore.',

  url: 'https://www.sofarevive.com/privacy-policy',
}

export default function PrivacyPolicy() {
  return (
    <>
      <Script
        id="privacy-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(privacySchema),
        }}
      />

      <PolicyLayout title="Privacy Policy" lastUpdated="March 21, 2026">
        <h2>1. Information We Collect</h2>
        <p>
          When you request a <strong>sofa repair quote</strong> or a home
          consultation, we collect your name, email, WhatsApp number, and
          location in Bangalore. This information is used only to coordinate
          your service request and pickup.
        </p>

        <h2>2. Visual Data & Furniture Photos</h2>
        <p>
          Photos shared via WhatsApp or our website are used only to assess
          upholstery and repair requirements.
        </p>

        <h2>3. Communication</h2>
        <p>
          By requesting a quote, you agree to receive updates via WhatsApp or
          phone regarding your service.
        </p>

        <h2>4. Data Security</h2>
        <p>
          We do not sell or share your personal data. All information is stored
          securely and protected from unauthorized access.
        </p>

        <h2>5. Your Rights</h2>
        <p>
          You may request deletion of your personal data after service
          completion.
        </p>

        <h2>6. Contact</h2>
        <p>
          For any concerns, email us at <strong>legal@sofarevive.com</strong>.
        </p>
      </PolicyLayout>
    </>
  )
}
