const partners = [
  { src: "/images/icons/partner-01.svg", width: 140, height: 40, alt: "" },
  { src: "/images/icons/partner-02.svg", width: 159, height: 40, alt: "" },
  { src: "/images/icons/partner-03.svg", width: 160, height: 40, alt: "" },
  { src: "/images/icons/partner-04.svg", width: 110, height: 40, alt: "" },
  { src: "/images/icons/partner-05.svg", width: 110, height: 40, alt: "" },
  { src: "/images/icons/partner-06.svg", width: 111, height: 40, alt: "" },
  { src: "/images/icons/partner-07.png", width: 123, height: 40, alt: "" },
  { src: "/images/icons/partner-08.png", width: 152, height: 40, alt: "" },
];

export default function PartnersSection() {
  const logoSet = [...partners, ...partners];

  return (
    <section aria-label="Our Esteemed Partners" className="w-full bg-white overflow-hidden py-14 md:py-16">
      <p className="text-label font-body text-center" style={{ color: "#67686B" }}>
        Our Esteemed Partners
      </p>

      <div className="relative mt-10 md:mt-12 h-12 overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 z-10 w-[18%] pointer-events-none"
          style={{ background: "linear-gradient(90deg, #FFFFFF 5%, rgba(255,255,255,0.24) 100%)" }}
        />
        <div
          className="absolute inset-y-0 right-0 z-10 w-[18%] pointer-events-none"
          style={{ background: "linear-gradient(270deg, #FFFFFF 5%, rgba(255,255,255,0.24) 100%)" }}
        />

        <div className="partners-marquee flex items-center gap-10 md:gap-20 py-1">
          {logoSet.map((partner, index) => (
            <div
              key={`${partner.src}-${index}`}
              className="relative shrink-0"
              style={{ width: `${partner.width}px`, height: `${partner.height}px` }}
            >
              <img
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
