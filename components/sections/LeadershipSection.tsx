import Image from "next/image";

interface Leader {
  name: string;
  role: string;
  image: string;
  bio?: string;
  placedImage: boolean;
  imageClassName: string;
  placedW?: number;
  placedH?: number;
}

const leaders: Leader[] = [
  {
    name: "Vincent de Cannière",
    role: "Chairman",
    image: "/images/home/leader-vincent.png",
    bio: "Vincent brings over 40 years of experience across executive leadership, governance, private banking, acquisitions, and restructuring. Having served as CEO and board member for major financial and real estate institutions across Europe and the Middle East, he provides MSS with seasoned strategic direction and institutional oversight.",
    placedImage: false,
    imageClassName: "object-cover object-top",
  },
  {
    name: "Husnain Nasir",
    role: "Director",
    image: "/images/home/leader-husnain.png",
    bio: "Husnain brings over 25 years of experience across fintech, enterprise solutions, branchless banking, and telecom. With executive leadership roles tied to major digital finance and transformation initiatives in Pakistan, UAE, UK and Europe, he contributes deep expertise in strategy and investments.",
    placedImage: true,
    imageClassName: "absolute max-w-none left-[-2px] top-[-110px] h-[659px] w-[495px] lg:left-[-1px] lg:top-[-134px] lg:w-[556px] lg:h-[659px]",
    placedW: 960,
    placedH: 1280,
  },
  {
    name: "Marc Lanz",
    role: "Head of Operations",
    image: "/images/home/leader-marc.jpg",
    placedImage: false,
    imageClassName: "object-cover object-top",
  },
  {
    name: "Sandra Schaad",
    role: "Head of Compliance",
    image: "/images/home/leader-sandra.jpg",
    // fill + object-cover guarantees full container coverage.
    // object-top anchors to the top edge, matching the Figma crop (top overflow is only 4px).
    placedImage: false,
    imageClassName: "object-cover object-top",
  },
];

function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <>
      <div className="relative bg-[#0B1738] overflow-hidden h-[340px] lg:h-[390px]">
        {leader.placedImage ? (
          <Image
            src={leader.image}
            alt={leader.name}
            width={leader.placedW ?? 960}
            height={leader.placedH ?? 1280}
            className={leader.imageClassName}
            sizes="(max-width: 768px) calc(100vw - 40px), (max-width: 1024px) calc(50vw - 60px), 410px"
          />
        ) : (
          <Image
            src={leader.image}
            alt={leader.name}
            fill
            className={leader.imageClassName}
            sizes="(max-width: 768px) calc(100vw - 40px), (max-width: 1024px) calc(50vw - 60px), 410px"
          />
        )}
      </div>

      <h3
        className="leadership-person-h3 font-heading font-light"
        style={{ color: "#1C1C1F", margin: 0, marginTop: "24px" }}
      >
        {leader.name}
      </h3>
      <p className="font-body text-body-sm" style={{ color: "#67686B", margin: 0, marginTop: "12px" }}>
        {leader.role}
      </p>
      {leader.bio && (
        <p className="font-body text-body-sm" style={{ color: "#373738", margin: 0, marginTop: "12px" }}>
          {leader.bio}
        </p>
      )}
    </>
  );
}

export default function LeadershipSection() {
  return (
    <section aria-label="Leadership" className="w-full bg-white">
      <div className="w-full px-5 md:px-12 lg:px-20 pt-28 md:pt-32 lg:pt-32 pb-20 md:pb-28 lg:pb-[120px]">
        <span className="text-label font-body block" style={{ color: "#67686B" }}>Leadership</span>

        <h2
          className="leadership-section-h2 font-heading font-light"
          style={{ color: "#1C1C1F", margin: 0, marginTop: "24px", maxWidth: "700px" }}
        >
          Experienced Leadership, with Depth and Perspective
        </h2>

        {/* ── Mobile + Tablet (< 1024px): 1→2 col auto-flow grid ── */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 md:gap-y-12 lg:hidden">
          {leaders.map((leader) => (
            <article key={leader.name}>
              <LeaderCard leader={leader} />
            </article>
          ))}
        </div>

        {/*
         * ── Desktop (≥ 1024px): two fixed-width flex rows ──
         *
         * Row 1 (Vincent + Husnain): left-aligned, flex-none 410px each.
         *   Cards stay at left margin — empty right space absorbs viewport shrinkage.
         *
         * Row 2 (Marc + Sandra): right-aligned via justify-end, flex-none 410px each.
         *   As viewport narrows the pair scoots left, right edge stays within margin.
         */}
        <div className="hidden lg:flex lg:flex-col">
          <div className="mt-20 flex gap-6">
            {leaders.slice(0, 2).map((leader) => (
              <article key={leader.name} className="w-[410px] flex-none">
                <LeaderCard leader={leader} />
              </article>
            ))}
          </div>

          <div className="mt-16 flex gap-6 justify-end">
            {leaders.slice(2).map((leader) => (
              <article key={leader.name} className="w-[410px] flex-none">
                <LeaderCard leader={leader} />
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
