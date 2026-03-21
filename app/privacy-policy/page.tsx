import PolicyLayout from "@/components/layout/legal/PolicyLayout";

export default function PrivacyPolicy() {
  return (
    <PolicyLayout title="Privacy Policy" lastUpdated="March 21, 2026">
      <h2>1. Information We Collect</h2>
      <p>
        When you request a <strong>SofaRetrive</strong> estimate or a home
        consultation, we collect your name, WhatsApp number, and specific area
        in Bangalore. This information is strictly used to coordinate your{" "}
        <strong>free doorstep pickup</strong>
        and provide accurate labor estimates.
      </p>

      <h2>2. Visual Data & Furniture Photos</h2>
      <p>
        The photos of your furniture sent via WhatsApp or our web portal are
        used solely by our <strong>master craftsmen</strong> to calculate:
      </p>
      <ul>
        <li>Exact fabric yardage requirements.</li>
        <li>Structural repair needs (foam density, frame integrity).</li>
        <li>Estimated labor hours for restoration.</li>
      </ul>
      <p>
        These images are stored on our secure internal servers and are never
        shared with third-party marketing agencies.
      </p>

      <h2>3. WhatsApp & Communication</h2>
      <p>
        By initiating a quote, you consent to receive communication via WhatsApp
        and Phone regarding your furniture restoration. We do not engage in
        automated spam; all communications are handled by our{" "}
        <strong>Concierge Team</strong>
        to ensure high service standards.
      </p>

      <h2>4. Data Retention & Security</h2>
      <p>
        We do not sell, rent, or trade your personal data. Your consultation
        details remain private. We implement industry-standard encryption to
        protect your contact details and home address from unauthorized access.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        As a DreamDecore client, you have the right to request the deletion of
        your contact details from our database once your restoration project is
        complete and the 5-year warranty period has been registered.
      </p>

      <h2>6. Contact Our Legal Team</h2>
      <p>
        If you have questions about how we handle your data in Bangalore, please
        email us at <strong>legal@dreamdecore.com</strong>.
      </p>
    </PolicyLayout>
  );
}
