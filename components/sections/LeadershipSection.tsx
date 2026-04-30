import Image from "next/image";

/*
 * Leadership section — exact Figma layout (y=4722 to y=5880)
 *
 * Two-column header (same y ≈ 4902/4910):
 *   LEFT  x=80  : "Leadership" label (text-label)
 *   RIGHT x=480 : H2 "Experienced Leadership, with Depth and Perspective" w=880
 *
 * Photos — both visible simultaneously, side by side (NOT a slider):
 *   Photo 1 (Vincent): x=480, w=428, h=400, navy bg
 *   Photo 2 (Husnain): x=932, w=428, h=400, navy bg
 *   Gap between: 24px
 *
 * Below each photo (matching x positions):
 *   Name (Merriweather 300 26px) — 24px below photo
 *   Role (Inter 400 15px, #67686B) — 12px below name
 *   Bio  (Inter 400 15px, #373738) — 12px below role
 *
 * No "About Us" button — not in Figma design.
 * No slider/carousel — both leaders always shown.
 */

const leaders = [
  {
    name: "Vincent de Cannière",
    role: "Chairman",
    // Full frame exported from Figma node 242:5007 — includes navy background
    image: "/images/leader-vincent-frame.png",
    bio: "Vincent brings over 40 years of experience across executive leadership, governance, private banking, acquisitions, and restructuring. Having served as CEO and board member for major financial and real estate institutions across Europe and the Middle East, he provides MSS with seasoned strategic direction and institutional oversight.",
  },
  {
    name: "Husnain Nasir",
    role: "Director",
    // Full frame exported from Figma node 242:5027 — includes navy background
    image: "/images/leader-husnain-frame.png",
    bio: "Husnain brings over 25 years of experience across fintech, enterprise solutions, branchless banking, and telecom. With leadership roles tied to major digital finance and transformation initiatives in Pakistan, he contributes deep expertise in strategy, investments, and business development to MSS.",
  },
];

export default function LeadershipSection() {
  return (
    <section aria-label="Leadership" className="w-full bg-white">
      <div className="w-full px-5 md:px-10 lg:px-20 pt-16 md:pt-20 lg:pt-28 pb-16 md:pb-20 lg:pb-32">

        {/* ── HEADER — two-column: label left, H2 right ─────────── */}
        {/*
         * Label: x=80 (standard left margin)
         * H2:    x=480 (starts ~400px from left — 1/3 across the 1280px content area)
         * At desktop: label takes ~31% (400/1280), H2 takes ~69% (880/1280)
         */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-0 mb-16 lg:mb-20">
          {/* Label — left column */}
          <div className="lg:w-[31%] lg:flex-shrink-0 lg:pt-1">
            <span className="text-label font-body" style={{ color: "#373738" }}>
              Leadership
            </span>
          </div>

          {/* H2 — right column */}
          <h2
            className="font-heading flex-1"
            style={{
              fontSize: "clamp(1.75rem, 3.2vw, 2.875rem)",
              lineHeight: "1.087",
              fontWeight: 300,
              color: "#1C1C1F",
              margin: 0,
            }}
          >
            Experienced Leadership,<br />with Depth and Perspective
          </h2>
        </div>

        {/* ── LEADERS — both visible simultaneously ─────────────── */}
        {/*
         * Photos: 428×400px each, 24px gap, starting at x=480 (31% from content left)
         * At desktop: offset from left to match H2 start (lg:ml-[31%])
         * Two-col grid for the leader cards
         */}
        <div className="lg:ml-[31%]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leaders.map((leader) => (
              <div key={leader.name} className="flex flex-col">

                {/* Photo — full frame exported from Figma (navy bg included) */}
                <div
                  className="relative w-full flex-shrink-0 overflow-hidden"
                  style={{ aspectRatio: "428/400" }}
                >
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 428px"
                  />
                </div>

                {/* Name — Merriweather 300 26px/32px, 24px below photo */}
                <h3
                  className="font-heading"
                  style={{
                    fontSize: "26px",
                    lineHeight: "32px",
                    fontWeight: 300,
                    color: "#1C1C1F",
                    margin: 0,
                    marginTop: "24px",
                  }}
                >
                  {leader.name}
                </h3>

                {/* Role — Inter 400 15px/22px, #67686B, 12px below name */}
                <p
                  className="font-body"
                  style={{
                    fontSize: "15px",
                    lineHeight: "22px",
                    color: "#67686B",
                    margin: 0,
                    marginTop: "12px",
                  }}
                >
                  {leader.role}
                </p>

                {/* Bio — Inter 400 15px/22px, #373738, 12px below role */}
                <p
                  className="font-body"
                  style={{
                    fontSize: "15px",
                    lineHeight: "22px",
                    color: "#373738",
                    margin: 0,
                    marginTop: "12px",
                  }}
                >
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
