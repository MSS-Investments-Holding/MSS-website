const contactItems = [
  {
    title: "General Inquiries",
    body: "All general enquiries should be directed to:",
    href: "mailto:info@mssinvestmentsholding.com",
    value: "info@mssinvestmentsholding.com",
  },
  {
    title: "Media Inquiries",
    body: "All group media enquiries should be directed to:",
    href: "mailto:media@mssinvestmentsholding.com",
    value: "media@mssinvestmentsholding.com",
  },
  {
    title: "Contact Us",
    body: "For all support related matters, contact us at:",
    href: "tel:+971503840381",
    value: "+971 50 384 0381",
  },
];

export default function LegalContactMediums() {
  return (
    <section aria-label="Contact Mediums" className="w-full bg-white px-5 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
        {contactItems.map((item, index) => (
          <article
            key={item.title}
            className={[
              "legal-contact-card relative text-center",
              index > 0 ? "md:border-l md:border-[#D2D5D9]" : "",
            ].join(" ")}
          >
            <div className="absolute left-0 top-0 h-px w-full bg-[#D2D5D9]" aria-hidden="true" />
            <div className="absolute left-0 bottom-0 h-px w-full bg-[#D2D5D9]" aria-hidden="true" />
            <h2 className="legal-contact-title font-heading m-0 text-[#1C1C1F]">
              {item.title}
            </h2>
            <p className="legal-contact-body font-body mx-auto mb-0 text-[#67686B]">
              {item.body}
            </p>
            <a
              href={item.href}
              className="legal-contact-link font-body mx-auto block text-[#373738] underline"
            >
              {item.value}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
