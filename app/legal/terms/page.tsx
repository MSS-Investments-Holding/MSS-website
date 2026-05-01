import type { Metadata } from "next";
import LegalPageLayout, { type LegalSection } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms and Conditions | MSS Investments Holding",
  description:
    "Terms and Conditions governing access to and use of the MSS Investments Holding website.",
};

const sections: LegalSection[] = [
  {
    heading: "Introduction",
    body: "These Terms & Conditions govern your access to and use of the MSS Investments Holding website, including any pages, content, forms, documents, features, or services made available through the website. By accessing or using this website, you agree to comply with these Terms. If you do not agree with these Terms, you should not use this website.\n\nFor the purpose of these Terms, \"MSS,\" \"we,\" \"our,\" or \"us\" refers to MSS Investments Holding. \"You\" or \"your\" refers to any person, company, or organization accessing or using this website.",
  },
  {
    heading: "Use of the Website",
    body: "This website is provided for general corporate, informational, and communication purposes only. You may use the website to learn more about MSS, our areas of focus, portfolio, leadership, insights, and contact channels.\n\nYou agree not to use this website in any way that may: breach any applicable law or regulation; interfere with the proper operation or security of the website; attempt to gain unauthorized access to any part of the website, server, or related systems; copy, scrape, misuse, or extract website content without permission; submit false, misleading, harmful, or unlawful information through any form on the website.\n\nWe may suspend, restrict, or discontinue access to all or part of the website at any time without prior notice.",
  },
  {
    heading: "Website Content",
    body: "The content on this website is provided for general information only. It should not be treated as financial, investment, legal, tax, business, or professional advice. Nothing on this website should be interpreted as: an offer to invest; a solicitation of investment; a recommendation to buy, sell, or hold any asset, security, product, or service; a guarantee of performance, return, or business outcome; a formal advisory relationship between you and MSS.\n\nYou should seek independent professional advice before making any business, financial, investment, or legal decision based on information available on this website.\n\nWhile we aim to keep the website accurate and up to date, we do not guarantee that all information is complete, current, error-free, or suitable for your specific circumstances.",
  },
  {
    heading: "Portfolio and Investment Information",
    body: "Any references to portfolio companies, ventures, investments, business areas, sectors, performance indicators, or market activity are provided for informational purposes only. Portfolio-related information may include historical, current, or illustrative details and should not be relied upon as a representation of future performance or results.\n\nPast performance, transaction activity, business growth, or market presence does not guarantee future outcomes. MSS reserves the right to update, remove, revise, or correct portfolio-related content at any time.",
  },
  {
    heading: "Pitch Submissions and Business Inquiries",
    body: "The website may allow users to submit business information, pitch decks, proposals, partnership inquiries, advisory requests, or other materials through forms such as \"Pitch to Us\" or \"Contact Us.\" By submitting information to MSS, you confirm that: the information you provide is accurate to the best of your knowledge; you have the right to share the information and materials submitted; your submission does not violate the rights of any third party; your submission does not contain unlawful, confidential, or restricted information that you are not authorized to disclose.\n\nSubmitting information to MSS does not create any obligation for MSS to review, respond to, invest in, partner with, advise, or enter into any transaction with you.\n\nUnless a separate written agreement or non-disclosure agreement is signed by MSS, any information submitted through the website will not be treated as confidential. You should not submit highly sensitive or confidential information unless appropriate protections have been agreed in writing.\n\nMSS may already be reviewing, developing, investing in, or working with businesses, ideas, strategies, or opportunities that are similar to those submitted through the website. You agree that MSS is not restricted from pursuing existing or future opportunities because of your submission.",
  },
  {
    heading: "Intellectual Property",
    body: "All content on this website, including text, images, graphics, logos, icons, layouts, design elements, documents, videos, and other materials, is owned by or licensed to MSS unless otherwise stated.\n\nYou may view and download website content for personal or internal business reference only. You may not copy, reproduce, modify, distribute, publish, sell, or exploit any website content for commercial purposes without prior written permission from MSS.\n\nAll MSS names, logos, brand assets, and related marks may not be used without written approval.",
  },
  {
    heading: "Third-Party Links",
    body: "This website may contain links to third-party websites, platforms, portfolio companies, articles, social media pages, or external resources. These links are provided for convenience only.\n\nMSS does not control and is not responsible for the content, accuracy, availability, privacy practices, or terms of any third-party website or service. Accessing third-party websites is done at your own risk.",
  },
  {
    heading: "Warranties",
    body: "This website is provided on an \"as is\" and \"as available\" basis. MSS makes no warranties or representations, whether express or implied, regarding: the accuracy or completeness of website content; the availability or uninterrupted operation of the website; the security of the website; the suitability of website content for any specific purpose; the absence of errors, viruses, or harmful components.\n\nWe may update, change, suspend, or remove website content at any time without notice.",
  },
  {
    heading: "Limitation of Liability",
    body: "To the fullest extent permitted by applicable law, MSS will not be liable for any direct, indirect, incidental, consequential, special, or punitive loss or damage arising from or related to your use of this website. This includes, without limitation, loss of profits, loss of business opportunity, loss of data, loss of goodwill, or reliance on any information available through the website.\n\nYour use of the website is at your own risk.",
  },
  {
    heading: "Privacy and Data",
    body: "When you submit information through the website, MSS may collect and process personal or business information provided by you. This may include your name, contact details, company information, inquiry details, uploaded documents, and other relevant data.\n\nSuch information will be handled in accordance with our Privacy Policy. By submitting information through the website, you confirm that the information provided is accurate and that you have the authority to share it.",
  },
  {
    heading: "Changes to the Website",
    body: "MSS may update, revise, remove, or change any part of this website at any time. We are not obligated to keep all content up to date, and we may modify website features, sections, or availability without prior notice.",
  },
  {
    heading: "Changes to These Terms",
    body: "MSS may update these Terms & Conditions from time to time. Any changes will be posted on this page. By continuing to use the website after changes are published, you agree to the updated Terms.\n\nYou should review this page periodically to stay informed of any updates.",
  },
  {
    heading: "Governing Law",
    body: "These Terms shall be governed by and interpreted in accordance with the laws of the United Arab Emirates.\n\nAny disputes arising out of or in connection with these Terms or the use of this website shall be subject to the exclusive jurisdiction of the courts of the United Arab Emirates. If you access this website from outside the UAE, you are responsible for compliance with any local laws that apply.",
  },
];

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms and Conditions"
      lastUpdated="Last updated: January 22, 2026"
      sections={sections}
    />
  );
}
