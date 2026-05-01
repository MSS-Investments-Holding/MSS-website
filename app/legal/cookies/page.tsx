import type { Metadata } from "next";
import LegalPageLayout, { type LegalSection } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Cookies Policy | MSS Investments Holding",
  description:
    "Cookies Policy explaining how MSS Investments Holding uses cookies and similar technologies on its website.",
};

const sections: LegalSection[] = [
  {
    heading: "Introduction",
    body: "This Cookie Policy explains how MSS Investments Holding uses cookies and similar tracking technologies when you visit our website. It describes what cookies are, why we use them, and what choices you have regarding their use.\n\nThis Cookie Policy should be read alongside our Privacy Policy and Terms and Conditions. By continuing to use our website, you acknowledge that you have read and understood how we use cookies as described in this policy.",
  },
  {
    heading: "What Are Cookies",
    body: "Cookies are small text files that are placed on your device — computer, tablet, or mobile phone — when you visit a website. They are widely used to make websites function correctly, to improve the user experience, and to provide information to website owners about how their site is being used.\n\nCookies can be session cookies, which are deleted when you close your browser, or persistent cookies, which remain on your device for a set period or until you delete them. They can be set by the website you are visiting (first-party cookies) or by third-party services that provide functionality embedded within the site (third-party cookies).",
  },
  {
    heading: "How We Use Cookies",
    body: "MSS Investments Holding uses cookies to:\n\nEnsure the website functions correctly and securely, including maintaining session state and preventing fraudulent activity.\n\nUnderstand how visitors interact with our website by collecting anonymised usage data, which helps us improve site performance, content, and user experience.\n\nRemember your preferences and settings where applicable, such as language or regional preferences, to avoid you having to re-enter information on repeat visits.\n\nWe do not use cookies for advertising, remarketing, or tracking your behaviour across third-party websites.",
  },
  {
    heading: "Strictly Necessary Cookies",
    body: "These cookies are essential for the website to function and cannot be switched off. They are set in response to actions you take, such as submitting a form, navigating between pages, or using secure features of the website.\n\nStrictly necessary cookies do not store any personally identifiable information and are used solely to ensure the technical operation of the website. Because they are essential, they do not require your consent under most data protection frameworks.\n\nExamples include: session management cookies that keep you logged in during a visit, security tokens that protect forms from misuse, and cookies that remember your cookie consent preferences.",
  },
  {
    heading: "Analytics and Performance Cookies",
    body: "These cookies allow us to count visits and understand how visitors move around our website, so we can measure and improve performance. All information collected by analytics cookies is aggregated and anonymised — it does not identify individual users.\n\nWe may use analytics tools such as Google Analytics or similar services to collect data about page views, session duration, traffic sources, and user behaviour patterns. This data helps us understand which content is most useful and where improvements can be made.\n\nYou may opt out of analytics cookies through your browser settings or through cookie management tools without affecting your ability to use the website.",
  },
  {
    heading: "Functional Cookies",
    body: "Functional cookies allow the website to remember choices you have made in the past to provide a more personalised experience. This may include your language or region preference, display settings, or whether you have previously acknowledged a notice on the website.\n\nThese cookies do not track your browsing activity on other websites and are not used for advertising purposes. Disabling functional cookies may affect some features of the website but will not prevent you from accessing core content.",
  },
  {
    heading: "Third-Party Cookies",
    body: "Some cookies on our website may be set by third-party services that provide functionality embedded within our pages, such as analytics platforms, embedded social media content, or external resources.\n\nThird-party cookies are governed by the privacy and cookie policies of the respective third parties, and we do not have direct control over how those cookies are used. We encourage you to review the relevant policies of any third-party services you interact with through our website.\n\nWhere third-party cookies involve the collection of personal data, such collection is governed by the relevant third party's privacy practices.",
  },
  {
    heading: "Cookie Duration",
    body: "The duration for which cookies remain on your device depends on whether they are session or persistent cookies.\n\nSession cookies are temporary and are deleted automatically when you close your browser. They are typically used to maintain continuity during a single visit.\n\nPersistent cookies remain on your device for a set period, which may range from a few days to several years depending on their purpose. They are used to remember your preferences across multiple visits. You can delete persistent cookies at any time through your browser settings.",
  },
  {
    heading: "Managing and Disabling Cookies",
    body: "You can control and manage cookies through your browser settings. Most modern browsers allow you to view, block, or delete cookies. Please note that blocking certain cookies may affect the functionality of our website.\n\nHere are links to cookie management guidance for major browsers:\n\nGoogle Chrome: go to Settings > Privacy and Security > Cookies and other site data.\n\nMozilla Firefox: go to Settings > Privacy & Security > Cookies and Site Data.\n\nSafari: go to Preferences > Privacy > Manage Website Data.\n\nMicrosoft Edge: go to Settings > Cookies and site permissions.\n\nIf you choose to disable cookies, some features of our website may not function as intended. We are not responsible for any reduced functionality resulting from your decision to restrict cookies.",
  },
  {
    heading: "Cookie Consent",
    body: "Where required by applicable law, we will seek your consent before placing non-essential cookies on your device. You may accept or decline non-essential cookies when prompted by any cookie consent mechanism we operate.\n\nYou may withdraw or update your consent at any time by adjusting your browser settings or using any cookie management tool we make available on the website. Withdrawing consent will not affect the lawfulness of any processing that occurred before your withdrawal.",
  },
  {
    heading: "Changes to This Policy",
    body: "We may update this Cookie Policy from time to time to reflect changes in the technologies we use, legal requirements, or our operational practices. Any updates will be posted on this page with a revised effective date.\n\nWe encourage you to check this page periodically to stay informed of how we use cookies.",
  },
  {
    heading: "Contact Us",
    body: "If you have any questions or concerns about our use of cookies or this Cookie Policy, please contact us at:\n\nprivacy@mssinvestmentsholding.com\n\nMSS Investments Holding\nUnited Arab Emirates",
  },
];

export default function CookiesPage() {
  return (
    <LegalPageLayout
      title="Cookies Policy"
      lastUpdated="Last updated: January 22, 2026"
      sections={sections}
    />
  );
}
