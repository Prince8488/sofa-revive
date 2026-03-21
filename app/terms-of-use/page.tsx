import PolicyLayout from "@/components/layout/legal/PolicyLayout";

export default function TermsOfUsePage() {
  return (
    <PolicyLayout title="Terms of Use" lastUpdated="March 21, 2026">
      <h2>1. General Instruction of Payments</h2>
      <p>
        <strong>DreamDecore</strong> takes privacy protection very seriously and
        we set the highest standards in this regard. We value the trust you
        place in us and ensure that all financial interactions are handled
        through secure, encrypted channels.
      </p>

      <h2>2. Customer Information Collection</h2>
      <p>
        We collect essential contact details such as your{" "}
        <strong>
          name, email address, phone number, and physical service address
        </strong>{" "}
        in Bangalore.
      </p>
      <blockquote>
        Please note that your transaction or banking details required for
        internet banking or other payment instruments are{" "}
        <strong>not held by DreamDecore</strong>. These are processed by our
        certified payment gateway partners.
      </blockquote>
      <p>
        We maintain internal records of previous orders and restorations,
        including fabric choices, pricing, and project timelines to better serve
        your future needs.
      </p>

      <h2>3. How We Utilize Information</h2>
      <p>
        We only collect customer information required to conduct our business
        and to provide the best furniture restoration services.{" "}
        <strong>
          We do not sell or rent this information to third parties.
        </strong>
      </p>
      <p>
        Information is shareable with our subsidiaries, master craftsmen, and
        logistics partners involved in delivering our services to you. In the
        event of acquisitions or mergers, information may be shared as governed
        by business entity regulations.
      </p>
      <p>
        We utilize data to understand customer behavior and inform you about
        deals, new fabric launches, and order status. We may communicate special
        offers for up to <strong>6 months</strong> after your last engagement
        with DreamDecore.
      </p>

      <h2>4. Opt-Out & Support</h2>
      <p>
        Users may opt-out of non-essential communications at any time. Please
        direct questions or opt-out requests to our support team:
      </p>
      <div className="not-prose bg-slate-50 p-8 rounded-[2rem] border border-slate-100 my-10">
        <h4 className="font-black uppercase italic text-sm mb-2">
          Legal Support
        </h4>
        <p className="text-slate-500 text-sm mb-4">
          For formal inquiries or data removal requests:
        </p>
        <a
          href="mailto:dreamdecore12@gmail.com"
          className="inline-block bg-slate-900 text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all"
        >
          Email: dreamdecore12@gmail.com
        </a>
      </div>

      <h2>5. Policy Updates</h2>
      <p>
        Our privacy policy is subject to change without notice to stay compliant
        with local regulations. To ensure you are aware of any changes, please
        review this policy periodically.
      </p>
    </PolicyLayout>
  );
}
