const contactItems = [
  {
    title: "General Inquiries",
    body: "All general enquiries should be directed to:",
    href: "mailto:info@mssinvestmentsholding.com",
    value: "info@mssinvestmentsholding.com",
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
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
        {contactItems.map((item, index) => {
          const hasLeftDivider = index > 0;
          const hasRightDivider = index < contactItems.length - 1;
          // Desktop: keep a 16px gap between each horizontal rule and the
          // adjacent vertical divider — inset on the divider side. Mobile
          // stacks (no divider), so rules stay full width.
          const ruleClass = [
            "absolute h-px bg-[#D2D5D9] left-0 w-full",
            hasLeftDivider ? "md:left-4" : "",
            hasLeftDivider && hasRightDivider
              ? "md:w-full"
              : hasLeftDivider
              ? "md:w-[calc(100%_-_16px)]"
              : hasRightDivider
              ? "md:w-[calc(100%_+_16px)]"
              : "",
          ].join(" ");
          return (
            <article
              key={item.title}
              className="legal-contact-card relative text-center"
            >
              <div className={`${ruleClass} top-0`} aria-hidden="true" />
              <div className={`${ruleClass} bottom-0`} aria-hidden="true" />
              {/* Vertical divider — inset 16px top/bottom so it sits 32px
                  shorter than the column height. Desktop only. */}
              {hasLeftDivider && (
                <div
                  className="hidden md:block absolute left-0 top-4 bottom-4 w-px bg-[#D2D5D9]"
                  aria-hidden="true"
                />
              )}
              <h2 className="legal-contact-title font-heading m-0 text-[#1C1C1F]">
                {item.title}
              </h2>
              <p className="legal-contact-body font-body mx-auto mb-0 text-[#67686B]">
                {item.body}
              </p>
              <a
                href={item.href}
                className="legal-contact-link font-body mx-auto block text-[#373738]"
              >
                {item.value}
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
