import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import LegalSection from "@/components/legal/LegalSection";

export const metadata: Metadata = {
  title: "Cookie Policy | Health 206",
  description:
    "Learn about the cookies Health 206 uses, why we use them, and how you can manage your cookie preferences.",
}; 

const LAST_UPDATED = "1 June 2025";

interface CookieTableRow {
  name: string;
  provider: string;
  purpose: string;
  duration: string;
  type: "Essential" | "Analytics" | "Functional";
}

const COOKIE_TABLE: CookieTableRow[] = [
  {
    name: "sb-[project-ref]-auth-token",
    provider: "Supabase",
    purpose:
      "Stores your encrypted authentication session. Required to keep you logged in across page navigations.",
    duration: "Session / up to 7 days (refreshed automatically)",
    type: "Essential",
  },
  {
    name: "sb-[project-ref]-auth-token-code-verifier",
    provider: "Supabase",
    purpose:
      "Used during the OAuth PKCE flow to securely verify the authentication code. Deleted immediately after login.",
    duration: "Session",
    type: "Essential",
  },
  {
    name: "__vercel_live_token",
    provider: "Vercel",
    purpose:
      "Used by Vercel infrastructure for deployment preview routing. Only present in preview/staging environments.",
    duration: "Session",
    type: "Functional",
  },
];

const TYPE_BADGE: Record<CookieTableRow["type"], string> = {
  Essential: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  Analytics: "bg-violet-500/10 text-violet-400 border-violet-500/30",
  Functional: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
};

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout title="Cookie Policy" lastUpdated={LAST_UPDATED}>
      <LegalSection heading="1. What Are Cookies?">
        <p>
          Cookies are small text files that are placed on your device (computer,
          tablet, or mobile phone) when you visit a website. They are widely
          used to make websites function correctly, work more efficiently, and
          to provide information to the website operators. Cookies cannot
          execute code, carry viruses, or access information on your device
          beyond what the issuing website has stored in them.
        </p>
        <p>
          In addition to cookies, Health 206 may also use similar technologies
          such as session storage, local storage, and JWT (JSON Web Tokens) to
          manage authentication state. These are governed by the same principles
          set out in this policy.
        </p>
      </LegalSection>

      <LegalSection heading="2. How We Use Cookies">
        <p>
          Health 206 uses cookies strictly to provide core platform
          functionality — primarily authentication and session management. We do
          not use cookies to track your browsing behaviour across third-party
          websites, to build advertising profiles, or to sell data to any
          marketing platform.
        </p>
        <p>Our cookie usage falls into three categories:</p>
      </LegalSection>

      <LegalSection heading="3. Essential Cookies">
        <p>
          Essential cookies are necessary for the platform to function. Without
          these cookies, you cannot log in, and the platform cannot verify your
          identity to retrieve your health records securely. These cookies do
          not require your consent under applicable law because they are
          strictly necessary to deliver a service that you have explicitly
          requested.
        </p>
        <ul className="ml-4 list-disc space-y-1 marker:text-cyan-500">
          <li>
            <span className="text-slate-300">Authentication tokens</span> —
            issued by Supabase Auth upon successful login, these store your
            encrypted session. They ensure you remain logged in as you navigate
            between pages and that all database queries are securely scoped to
            your account.
          </li>
          <li>
            <span className="text-slate-300">CSRF protection tokens</span> —
            short-lived tokens used during login and sensitive actions to prevent
            cross-site request forgery attacks.
          </li>
          <li>
            <span className="text-slate-300">Code verifier cookies</span> —
            used during the PKCE (Proof Key for Code Exchange) authentication
            flow to securely exchange authentication codes. These are deleted
            immediately upon successful login.
          </li>
        </ul>
        <p>
          Essential cookies contain no personal health information. They contain
          only encrypted tokens referencing your account identifier.
        </p>
      </LegalSection>

      <LegalSection heading="4. Analytics Cookies">
        <p>
          At present, Health 206 does not deploy third-party analytics cookies
          (such as Google Analytics, Mixpanel, or similar services). As a
          healthcare platform, we apply the{" "}
          <span className="text-slate-300">principle of data minimisation</span>{" "}
          — we collect only the data strictly required to provide and improve the
          service.
        </p>
        <p>
          If we introduce analytics tools in the future, we will update this
          Cookie Policy in advance, present you with a cookie consent banner,
          and ensure that analytics cookies are only activated upon your explicit
          opt-in consent. Analytics cookies will never have access to your
          medical records or health data.
        </p>
      </LegalSection>

      <LegalSection heading="5. Functional Cookies">
        <p>
          Functional cookies enable enhanced features that improve your
          experience but are not strictly essential to the core service. On
          Health 206, functional cookies may include:
        </p>
        <ul className="ml-4 list-disc space-y-1 marker:text-cyan-500">
          <li>
            Cookies set by Vercel (our hosting provider) for deployment
            infrastructure and preview environment routing. These are technical
            in nature and do not store personal health data.
          </li>
          <li>
            Language or display preference cookies, if such preferences are
            introduced in a future version of the platform.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="6. Cookies We Use">
        <p>
          The following table lists the specific cookies currently used on the
          Health 206 platform:
        </p>

        <div className="mt-4 overflow-x-auto rounded-xl border border-white/5">
          <table className="w-full min-w-160 border-collapse text-xs">
            <thead>
              <tr className="border-b border-white/5 bg-white/5">
                <th className="px-4 py-3 text-left font-semibold text-slate-300">
                  Cookie Name
                </th>
                <th className="px-4 py-3 text-left font-semibold text-slate-300">
                  Provider
                </th>
                <th className="px-4 py-3 text-left font-semibold text-slate-300">
                  Purpose
                </th>
                <th className="px-4 py-3 text-left font-semibold text-slate-300">
                  Duration
                </th>
                <th className="px-4 py-3 text-left font-semibold text-slate-300">
                  Type
                </th>
              </tr>
            </thead>
            <tbody>
              {COOKIE_TABLE.map((row, idx) => (
                <tr
                  key={row.name}
                  className={idx % 2 === 1 ? "bg-white/2" : ""}
                >
                  <td className="px-4 py-3 font-mono text-xs text-cyan-400/80">
                    {row.name}
                  </td>
                  <td className="px-4 py-3 text-slate-400">{row.provider}</td>
                  <td className="px-4 py-3 leading-5 text-slate-400">
                    {row.purpose}
                  </td>
                  <td className="px-4 py-3 text-slate-400">{row.duration}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block rounded-full border px-2 py-0.5 text-xs font-medium ${TYPE_BADGE[row.type]}`}
                    >
                      {row.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </LegalSection>

      <LegalSection heading="7. Managing and Disabling Cookies">
        <p>
          You have the right to manage or disable cookies at any time through
          your browser settings. The steps vary by browser:
        </p>
        <ul className="ml-4 list-disc space-y-1 marker:text-cyan-500">
          <li>
            <span className="text-slate-300">Google Chrome:</span> Settings
            &rarr; Privacy and Security &rarr; Cookies and other site data
          </li>
          <li>
            <span className="text-slate-300">Mozilla Firefox:</span> Settings
            &rarr; Privacy &amp; Security &rarr; Cookies and Site Data
          </li>
          <li>
            <span className="text-slate-300">Apple Safari:</span> Preferences
            &rarr; Privacy &rarr; Manage Website Data
          </li>
          <li>
            <span className="text-slate-300">Microsoft Edge:</span> Settings
            &rarr; Cookies and Site Permissions &rarr; Cookies and Site Data
          </li>
        </ul>
        <p>
          Please be aware that disabling or deleting the essential
          authentication cookies will prevent you from logging into Health 206.
          You will be logged out and will need to sign in again to access your
          health records. The platform cannot function correctly if essential
          cookies are blocked.
        </p>
        <p>
          To delete all cookies set by Health 206, clear site data for the
          Health 206 domain in your browser settings. This will terminate your
          active session.
        </p>
      </LegalSection>

      <LegalSection heading="8. Cookie Consent">
        <p>
          As Health 206 currently uses only strictly necessary cookies and does
          not deploy third-party tracking or advertising cookies, a cookie
          consent banner is not displayed at this time. If we introduce
          non-essential cookies in the future, we will update this policy, add a
          consent mechanism to the platform, and obtain your explicit consent
          before placing any non-essential cookies on your device.
        </p>
        <p>
          This policy is in line with the requirements of the{" "}
          <span className="text-slate-300">Information Technology Act, 2000</span>{" "}
          and the{" "}
          <span className="text-slate-300">SPDI Rules, 2011</span>. If and when
          the Digital Personal Data Protection Act, 2023 comes into full effect,
          we will update our consent mechanisms accordingly.
        </p>
      </LegalSection>

      <LegalSection heading="9. Changes to This Cookie Policy">
        <p>
          We may update this Cookie Policy periodically to reflect changes in
          our technology, legal obligations, or practices. The &ldquo;Last
          updated&rdquo; date at the top of this page will be revised whenever
          we make material changes. We encourage you to review this policy
          periodically.
        </p>
      </LegalSection>
<LegalSection heading="10. Contact">
  <p>
    If you have any questions about our use of cookies, please contact us at{" "}
    <a
      href="mailto:info@health206.com"
      className="text-cyan-400 hover:underline"
    >
      info@health206.com
    </a>
    .
  </p>
</LegalSection>
    </LegalPageLayout>
  );
}