// Attempt to load the shared LegalPageLayout component. If it's not
// available (e.g. during certain build steps), fall back to a simple
// local layout so the page still renders without a module resolution error.
import React from "react";

let LegalPageLayout: any;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  LegalPageLayout = require("@/components/legal/LegalPageLayout").default;
} catch (e) {
  // Local fallback layout
  LegalPageLayout = ({ title, lastUpdated, children }: any) => (
    <div className="max-w-3xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm text-gray-500">Last updated: {lastUpdated}</p>
      </header>
      <main>{children}</main>
    </div>
  );
}

// Fallback LegalSection component to prevent module resolution error during build
// This keeps the page functional if the original component path cannot be resolved.
function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">{heading}</h2>
      <div className="text-sm text-gray-700">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="1 July 2026"
    >
      <LegalSection heading="Introduction">
        <p>
          Health 206 is committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, store, and protect your
          personal and health information.
        </p>
      </LegalSection>

      <LegalSection heading="Information We Collect">
        <ul className="list-disc pl-6 space-y-2">
          <li>Name</li>
          <li>Email address</li>
          <li>Medical records uploaded by you</li>
          <li>Appointment information</li>
          <li>Insurance information</li>
        </ul>
      </LegalSection>

      <LegalSection heading="How We Use Your Information">
        <p>
          We use your information to provide healthcare services, securely
          store your records, improve our platform, and communicate with you.
        </p>
      </LegalSection>

      <LegalSection heading="Data Security">
        <p>
          Your information is stored securely using encrypted systems and
          industry best practices. Only authorized access is permitted.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>Email: info@health206.com</p>
      </LegalSection>
    </LegalPageLayout>
  );
}