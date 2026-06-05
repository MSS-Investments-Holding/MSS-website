import Image from "next/image";

interface DesktopPlacement {
  x: number; // px from Figma (negative = extends beyond container left/top)
  y: number;
  w: number; // image width at 1x
  h: number; // image height at 1x
}

interface Leader {
  name: string;
  role: string;
  image: string;
  bio?: string;
  cropClass: string;       // object-position class for mobile/tablet fill approach
  desktop: DesktopPlacement | null; // exact Figma placement at desktop; null = fill
}

const leaders: Leader[] = [
  {
    name: "Vincent de Cannière",
    role: "Chairman",
    image: "/images/home/leader-vincent.jpg",
    bio: "Vincent brings over 40 years of experience across executive leadership, governance, private banking, acquisitions, and restructuring. Having served as CEO and board member for major financial and real estate institutions across Europe and the Middle East, he provides MSS with seasoned strategic direction and institutional oversight.",
    cropClass: "[object-position:50%_20%]",
    desktop: { x: -1, y: -14, w: 417, h: 468 },
  },
  {
    name: "Husnain Nasir",
    role: "Director",
    image: "/images/home/leader-husnain.jpg",
    bio: "Husnain brings over 25 years of experience across fintech, enterprise solutions, branchless banking, and telecom. With executive leadership roles tied to major digital finance and transformation initiatives in Pakistan, UAE, UK and Europe, he contributes deep expertise in strategy and investments.",
    cropClass: "leader-husnain-crop",
    desktop: { x: -2, y: -134, w: 555, h: 740 },
  },
  {
    name: "Marc Lanz",
    role: "Head of Operations",
    image: "/images/home/leader-marc.jpg",
    cropClass: "[object-position:50%_45%]",
    desktop: { x: -8, y: -22, w: 425, h: 455 },
  },
  {
    name: "Sandra Schaad",
    role: "Head of Compliance",
    image: "/images/home/leader-sandra.jpg",
    cropClass: "object-center",
    desktop: null, // frame export already cropped to container dimensions
  },
];

function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <>
      {/* Mobile + Tablet (< 1024px) — same wrapper-div placement as desktop; container clips */}
      <div className="relative bg-[#0B1738] overflow-hidden h-[340px] lg:hidden">
        {leader.desktop ? (
          <div
            style={{
              position: "absolute",
              left: `${leader.desktop.x}px`,
              top: `${leader.desktop.y}px`,
              width: `${leader.desktop.w}px`,
              height: `${leader.desktop.h}px`,
            }}
          >
            <Image fill src={leader.image} alt={leader.name} sizes={`${leader.desktop.w}px`} />
          </div>
        ) : (
          <Image
            fill
            src={leader.image}
            alt={leader.name}
            className={`object-cover ${leader.cropClass}`}
            sizes="(max-width: 768px) calc(100vw - 40px), calc(50vw - 60px)"
          />
        )}
      </div>

      {/* Desktop (≥ 1024px): exact Figma pixel placement
          Wrapper div is positioned at the Figma x/y with Figma w/h.
          fill Image fills that wrapper 100×100%. Container clips to frame. */}
      <div className="relative bg-[#0B1738] overflow-hidden h-[390px] hidden lg:block">
        {leader.desktop ? (
          <div
            style={{
              position: "absolute",
              left: `${leader.desktop.x}px`,
              top: `${leader.desktop.y}px`,
              width: `${leader.desktop.w}px`,
              height: `${leader.desktop.h}px`,
            }}
          >
            <Image
              fill
              src={leader.image}
              alt={leader.name}
              sizes={`${leader.desktop.w}px`}
            />
          </div>
        ) : (
          <Image
            fill
            src={leader.image}
            alt={leader.name}
            className={`object-cover ${leader.cropClass}`}
            sizes="410px"
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

        {/* ── Mobile + Tablet (< 1024px): flex-wrap with fixed card width ──
            Cards sit side-by-side when space allows, stack when it doesn't.
            w-[320px]: fits 2 per row at 768px (672px available, 2×320+24=664px). ── */}
        <div className="mt-20 flex flex-wrap gap-x-6 gap-y-10 md:gap-y-12 lg:hidden">
          {leaders.map((leader) => (
            <article key={leader.name} className="w-[320px] flex-none">
              <LeaderCard leader={leader} />
            </article>
          ))}
        </div>

        {/*
         * ── Desktop (≥ 1024px): two fixed-width flex rows ──
         *
         * Row 1 (Vincent + Husnain): left-aligned, flex-none 410px.
         *   Empty right space absorbs as viewport narrows.
         *
         * Row 2 (Marc + Sandra): right-aligned via justify-end, flex-none 410px.
         *   Pair scoots left as viewport narrows, right edge stays within margin.
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
