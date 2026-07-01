import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import LegalSection from "@/components/legal/LegalSection";

export const metadata: Metadata = {
  title: "Terms & Conditions | Health 206",
  description:
    "Read the Terms and Conditions governing your use of Health 206, a personal health information management platform operating under Indian law.",
};

const LAST_UPDATED = "1 June 2025";

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout title="Terms & Conditions" lastUpdated={LAST_UPDATED}>
      <LegalSection heading="1. Acceptance of Terms">
        <p>
          These Terms and Conditions (&ldquo;Terms&rdquo;) constitute a legally
          binding agreement between you (&ldquo;User&rdquo; or
          &ldquo;Patient&rdquo;) and Health 206 (&ldquo;Platform&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) governing
          your access to and use of the Health 206 website and all associated
          services.
        </p>
        <p>
          By creating an account, logging in, or otherwise accessing the
          platform, you confirm that you have read, understood, and agree to
          be bound by these Terms. If you do not agree, you must not use the
          platform.
        </p>
        <p>
          These Terms are governed by the{" "}
          <span className="text-slate-300">Indian Contract Act, 1872</span>,
          the{" "}
          <span className="text-slate-300">
            Information Technology Act, 2000
          </span>{" "}
          and its associated rules, and all other applicable laws of India.
        </p>
      </LegalSection>

      <LegalSection heading="2. Description of Service">
        <p>
          Health 206 is a personal health information management platform that
          enables registered users to securely store, organise, and review their
          own health data including medical records, appointments, medications,
          insurance details, and emergency contact information.
        </p>
        <p>
          Health 206 is{" "}
          <span className="font-semibold text-slate-200">
            not a hospital, clinic, diagnostic laboratory, pharmacy, or
            telemedicine service
          </span>
          . We do not employ medical professionals. We do not diagnose, treat,
          or prescribe. The platform is a digital record-keeping tool for
          personal use only.
        </p>
      </LegalSection>

      <LegalSection heading="3. Eligibility">
        <p>To use Health 206, you must:</p>
        <ul className="ml-4 list-disc space-y-1 marker:text-cyan-500">
          <li>Be at least 18 years of age</li>
          <li>Be a resident of India or a citizen of India</li>
          <li>
            Have the legal capacity to enter into a binding contract under the
            Indian Contract Act, 1872
          </li>
          <li>
            Not have been previously banned or suspended from the platform for a
            breach of these Terms
          </li>
          <li>Register with a valid, personal email address</li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. User Account Responsibilities">
        <p>
          When you create an account, you agree to provide accurate, complete,
          and current information. You are solely responsible for:
        </p>
        <ul className="ml-4 list-disc space-y-1 marker:text-cyan-500">
          <li>
            Maintaining the confidentiality of your account password and session
          </li>
          <li>
            All activity that occurs under your account, whether authorised by
            you or not
          </li>
          <li>
           Notifying us immediately at{" "}
<a
  href="mailto:info@health206.com"
  className="text-cyan-400 hover:underline"
>
  info@health206.com
</a>{" "}
            if you suspect unauthorised access to your account
          </li>
          <li>
            Using a strong, unique password not shared with any other service
          </li>
          <li>
            Logging out of your account after each session on shared or public
            devices
          </li>
        </ul>
        <p>
          We will not be held liable for any loss or damage arising from your
          failure to comply with these security obligations.
        </p>
      </LegalSection>

      <LegalSection heading="5. Acceptable Use Policy">
        <p>
          You agree to use Health 206 only for lawful purposes and in a manner
          that does not infringe the rights of others. You must not:
        </p>
        <ul className="ml-4 list-disc space-y-1 marker:text-cyan-500">
          <li>
            Upload or store any information that you do not have the right to
            share, including another person&rsquo;s health records without their
            explicit written consent
          </li>
          <li>
            Attempt to gain unauthorised access to any other user&rsquo;s
            account, data, or the underlying infrastructure of the platform
          </li>
          <li>
            Use the platform in any manner that could damage, disable, overload,
            or impair our systems or servers
          </li>
          <li>
            Introduce any virus, trojan, worm, logic bomb, or other malicious or
            technologically harmful material into the platform
          </li>
          <li>
            Attempt to reverse-engineer, decompile, or extract the source code
            of any part of the platform
          </li>
          <li>
            Use automated scripts, bots, scrapers, or crawlers to access or
            extract data from the platform
          </li>
          <li>
            Misrepresent your identity, impersonate any person, or use the
            platform under a false name
          </li>
          <li>
            Upload content that is obscene, defamatory, threatening, or
            otherwise unlawful under applicable Indian law
          </li>
        </ul>
        <p>
          Violation of this acceptable use policy may result in immediate
          account suspension or permanent termination without notice.
        </p>
      </LegalSection>

      <LegalSection heading="6. Health Information Disclaimer">
        <p>
          Health 206 stores health information that you upload and enter. We do
          not verify, validate, or endorse the accuracy of any health
          information that you record. The platform does not constitute medical
          advice of any kind.
        </p>
        <p>
          You must not rely on any information stored on Health 206 as a
          substitute for advice from a qualified medical professional. Always
          consult a licensed doctor or healthcare provider regarding any medical
          condition, treatment, or medication.
        </p>
      </LegalSection>

      <LegalSection heading="7. Intellectual Property">
        <p>
          All intellectual property rights in the Health 206 platform —
          including but not limited to the software, design, user interface,
          graphics, logos, trademarks, and written content — are owned by or
          licensed to Health 206. Nothing in these Terms transfers any
          intellectual property rights to you.
        </p>
        <p>
          You retain full ownership of all health data and files that you upload
          to the platform. By uploading data, you grant us a limited,
          non-exclusive, royalty-free licence to store, process, and display
          your data solely for the purpose of providing the service to you. This
          licence terminates upon deletion of your account.
        </p>
        <p>
          You must not reproduce, distribute, modify, create derivative works
          from, publicly display, or commercially exploit any part of the
          platform without our prior written consent.
        </p>
      </LegalSection>

      <LegalSection heading="8. Third-Party Links and Services">
        <p>
          The platform may contain links to third-party websites or services for
          informational purposes only. These links do not constitute an
          endorsement or approval of those websites or services. We have no
          control over the content of third-party websites and accept no
          responsibility for any loss or damage that may arise from your use of
          them. Access to third-party sites is at your own risk.
        </p>
      </LegalSection>

      <LegalSection heading="9. Account Suspension and Termination">
        <p>
          We reserve the right to suspend, restrict, or permanently terminate
          your account and access to the platform, with or without prior notice,
          if:
        </p>
        <ul className="ml-4 list-disc space-y-1 marker:text-cyan-500">
          <li>You breach any provision of these Terms</li>
          <li>
            We have reasonable grounds to suspect fraudulent, abusive, or
            illegal activity
          </li>
          <li>
            Continued provision of the service to you would expose us to legal
            liability
          </li>
          <li>We are required to do so by law or by a court or tribunal</li>
        </ul>
        <p>
          You may terminate your account at any time by contacting us at{" "}
<a
  href="mailto:info@health206.com"
  className="text-cyan-400 hover:underline"
>
  info@health206.com
</a>
          . Upon termination, your data will be handled in accordance with our
          Privacy Policy.
        </p>
      </LegalSection>

      <LegalSection heading="10. Limitation of Liability">
        <p>
          To the maximum extent permitted by applicable law, Health 206, its
          directors, employees, agents, and affiliates shall not be liable for:
        </p>
        <ul className="ml-4 list-disc space-y-1 marker:text-cyan-500">
          <li>
            Any indirect, incidental, consequential, special, or punitive
            damages arising from your use of or inability to use the platform
          </li>
          <li>
            Any medical decisions made in reliance on information stored on the
            platform
          </li>
          <li>
            Loss of data due to technical failure, cyberattack, or events
            outside our reasonable control
          </li>
          <li>
            Interruptions to or unavailability of the platform due to
            maintenance, upgrades, or infrastructure issues
          </li>
          <li>
            Any act or omission of any third-party service provider including
            Supabase or Vercel
          </li>
        </ul>
        <p>
          Our total aggregate liability to you under these Terms shall not
          exceed the amount, if any, paid by you to us in the twelve (12) months
          preceding the event giving rise to the claim. As Health 206 is
          currently a free-to-use service, this limit is zero (₹0) to the
          fullest extent permitted by law.
        </p>
      </LegalSection>

      <LegalSection heading="11. Indemnification">
        <p>
          You agree to indemnify, defend, and hold harmless Health 206 and its
          officers, directors, employees, and agents from and against any claims,
          actions, proceedings, losses, damages, expenses, and costs (including
          reasonable legal fees) arising out of or in connection with your use
          of the platform, your violation of these Terms, or your violation of
          any applicable law.
        </p>
      </LegalSection>

      <LegalSection heading="12. Modifications to the Service">
        <p>
          We reserve the right to modify, suspend, or discontinue any aspect of
          the platform at any time, with or without notice. We will not be
          liable to you or any third party for any modification, suspension, or
          discontinuation of the service.
        </p>
        <p>
          We may revise these Terms at any time by publishing an updated version
          on this page. Continued use of the platform after such changes
          constitutes acceptance of the revised Terms. We encourage you to
          review these Terms periodically.
        </p>
      </LegalSection>

      <LegalSection heading="13. Governing Law and Dispute Resolution">
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of India, without regard to its conflict of law provisions.
        </p>
        <p>
          In the event of any dispute, controversy, or claim arising out of or
          in connection with these Terms or the use of the platform, the parties
          shall first attempt to resolve the matter through good-faith
          negotiation. If the dispute is not resolved within 30 days, it shall
          be subject to the exclusive jurisdiction of the courts of{" "}
          <span className="text-slate-300">New Delhi, India</span>.
        </p>
      </LegalSection>

      <LegalSection heading="14. Contact Information">
        <p>
          For any questions regarding these Terms and Conditions, please contact
          us:
        </p>
        <ul className="ml-4 list-disc space-y-1 marker:text-cyan-500">
          <li>
           Email:{" "}
<a
  href="mailto:info@health206.com"
  className="text-cyan-400 hover:underline"
>
  info@health206.com
</a>
          </li>
          <li>Platform: Health 206, India</li>
        </ul>
      </LegalSection>
    </LegalPageLayout>
  );
}