import Image from "next/image";

const leaders = [
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
    // Mobile: rect offset left=-2px top=-110px w=495 h=659 (Figma mobile frame 362×340)
    // Desktop (lg): rect offset left=-1px top=-134px w=556 h=659 (Figma desktop frame 410×390)
    imageClassName: "absolute max-w-none left-[-2px] top-[-110px] h-[659px] w-[495px] lg:left-[-1px] lg:top-[-134px] lg:w-[556px] lg:h-[659px]",
  },
  {
    name: "Marc Lanz",
    role: "Head of Operations",
    image: "/images/home/leader-marc.jpg",
    bio: undefined,
    placedImage: false,
    imageClassName: "object-cover object-top",
  },
  {
    name: "Sandra Schaad",
    role: "Head of Compliance",
    image: "/images/home/leader-sandra.jpg",
    bio: undefined,
    placedImage: true,
    // Mobile: x=-6 y=-4 w=372 h=451 (desktop values × 362/410 scale)
    // Desktop (lg): x=-7 y=-4 w=421 h=511 (Figma desktop frame 410×390)
    imageClassName: "absolute max-w-none left-[-6px] top-[-4px] w-[372px] h-[451px] lg:left-[-7px] lg:top-[-4px] lg:w-[421px] lg:h-[511px]",
  },
];

// Desktop staggered placement: Vincent C1R1, Husnain C2R1, Marc C2R2, Sandra C3R2
const lgPlacement = [
  "lg:col-start-1 lg:row-start-1",
  "lg:col-start-2 lg:row-start-1",
  "lg:col-start-2 lg:row-start-2",
  "lg:col-start-3 lg:row-start-2",
] as const;

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

        {/*
          Mobile  (1-col): all 4 stacked, 40px row gap
          md      (2-col): 2×2 auto-flow, 48px row gap
          lg      (3-col): staggered explicit placement, 64px row gap, 24px col gap
        */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 md:gap-y-12 lg:gap-y-16">
          {leaders.map((leader, i) => (
            <article key={leader.name} className={lgPlacement[i]}>

              {/* Photo frame — navy bg matches Figma frame fill (#0B1738) */}
              <div className="relative bg-[#0B1738] overflow-hidden h-[340px] lg:h-[390px]">
                {leader.placedImage ? (
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={960}
                    height={1280}
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

              {/* Text — name, role, bio (bio only for senior leaders) */}
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

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
