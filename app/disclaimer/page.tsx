// app/disclaimer/page.tsx
import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import LegalSection from "@/components/legal/LegalSection";

export const metadata: Metadata = {
  title: "Disclaimer | Health 206",
  description:
    "Disclaimer for Health 206, a healthcare information management platform. Learn about the limitations of our service and important medical, emergency, and liability information.",
};

export default function DisclaimerPage() {
  return (
    <LegalPageLayout lastUpdated="1 July 2026" title="">
      <LegalSection heading="1. Medical Disclaimer">
        <p>
          Health 206 ("we," "us," or "our") is a healthcare information
          management platform. We are not a medical provider, and nothing on
          our platform, including any content, tools, features, or
          communications, constitutes medical advice, diagnosis, or
          treatment. The information provided through Health 206 is intended
          for general informational and organizational purposes only and
          should not be relied upon as a substitute for professional medical
          judgment.
        </p>
        <p>
          Always seek the advice of your physician or other qualified health
          provider with any questions you may have regarding a medical
          condition or treatment. Never disregard professional medical
          advice or delay seeking it because of something you have read or
          accessed on Health 206.
        </p>
      </LegalSection>

      <LegalSection heading="2. Emergency Notice">
        <p>
          Health 206 is not designed or intended for use in medical
          emergencies. If you are experiencing a medical emergency, call your
          local emergency services number immediately or go to the nearest
          emergency room. Do not use Health 206 to seek emergency assistance
          or to communicate time-sensitive medical information.
        </p>
        <p>
          We do not monitor the platform in real time for emergency
          situations, and any delay in response should be expected.
        </p>
      </LegalSection>

      <LegalSection heading="3. No Doctor-Patient Relationship">
        <p>
          Use of Health 206 does not create a doctor-patient, therapist-
          patient, or any other professional healthcare relationship between
          you and Health 206, its employees, contractors, or affiliates. Any
          healthcare professionals who may be listed, referenced, or
          integrated within the platform are not acting as your treating
          providers solely by virtue of your use of our service.
        </p>
      </LegalSection>

      <LegalSection heading="4. Accuracy of Information">
        <p>
          While we strive to ensure that information made available through
          Health 206 is accurate, current, and complete, we make no
          representations or warranties of any kind, express or implied,
          about the completeness, accuracy, reliability, suitability, or
          availability of any information, products, services, or related
          graphics contained on the platform.
        </p>
        <p>
          Medical knowledge and best practices are constantly evolving. Any
          reliance you place on information accessed through Health 206 is
          strictly at your own risk. We encourage you to independently verify
          any information with a qualified healthcare professional.
        </p>
      </LegalSection>

      <LegalSection heading="5. AI Features Disclaimer">
        <p>
          Health 206 may incorporate artificial intelligence ("AI") features
          to assist with organizing, summarizing, or presenting health-
          related information. These AI features are tools designed to
          support information management and are not a substitute for
          professional medical judgment.
        </p>
        <p>
          AI-generated content may be incomplete, outdated, or inaccurate,
          and may not account for your individual medical history or
          circumstances. Outputs from AI features should not be used as the
          sole basis for any healthcare decision. Always verify AI-generated
          content with a qualified healthcare professional before acting on
          it.
        </p>
      </LegalSection>

      <LegalSection heading="6. User Responsibility">
        <p>
          You are solely responsible for your use of Health 206 and for any
          decisions you make based on information accessed through the
          platform. This includes verifying the accuracy of any information
          you input, store, or share, and consulting appropriate healthcare
          professionals before making decisions about your health or the
          health of others.
        </p>
        <p>
          You agree not to use Health 206 as a replacement for professional
          medical consultation, diagnosis, or treatment.
        </p>
      </LegalSection>

      <LegalSection heading="7. Third-Party Services">
        <p>
          Health 206 may contain links to, or integrations with, third-party
          websites, applications, or services that are not owned or
          controlled by us. We have no control over, and assume no
          responsibility for, the content, accuracy, privacy policies, or
          practices of any third-party services.
        </p>
        <p>
          Your use of any third-party services accessed through Health 206
          is subject to the terms and policies of those third parties, and
          we encourage you to review them independently.
        </p>
      </LegalSection>

      <LegalSection heading="8. Limitation of Liability">
        <p>
          To the fullest extent permitted by applicable law, Health 206, its
          officers, employees, contractors, and affiliates shall not be
          liable for any direct, indirect, incidental, consequential,
          special, or exemplary damages, including but not limited to
          personal injury, loss of data, or other damages, arising out of or
          in connection with your use of, or inability to use, the platform
          or reliance on any information provided through it.
        </p>
        <p>
          This limitation applies regardless of the legal theory on which the
          claim is based, whether in contract, tort, negligence, strict
          liability, or otherwise, even if we have been advised of the
          possibility of such damages.
        </p>
      </LegalSection>

      <LegalSection heading="9. Contact Information">
        <p>
          If you have any questions or concerns about this Disclaimer, please
          contact us at:
        </p>
        <p>
          Health 206
          <br />
          Email: support@health206.com
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}