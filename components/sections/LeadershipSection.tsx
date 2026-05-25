import Image from "next/image";

const leaders = [
  {
    name: "Vincent de Cannière",
    role: "Chairman",
    image: "/images/home/leader-vincent.png",
    cardBg: "#F5E9DC",
    imageClassName: "object-cover object-top",
    placedImage: false,
    bio: "Vincent brings over 40 years of experience across executive leadership, governance, private banking, acquisitions, and restructuring. Having served as CEO and board member for major financial and real estate institutions across Europe and the Middle East, he provides MSS with seasoned strategic direction and institutional oversight.",
  },
  {
    name: "Husnain Nasir",
    role: "Director",
    image: "/images/home/leader-husnain.png",
    cardBg: "#C5D3E5",
    imageClassName: "absolute max-w-none object-fill left-[-1px] top-[-110px] h-[calc(100%+324px)] w-[calc(100%+145px)] lg:left-[-2px] lg:top-[-115px] lg:h-[calc(100%+326px)] lg:w-[calc(100%+115px)]",
    placedImage: true,
    bio: "Husnain brings over 25 years of experience across fintech, enterprise solutions, branchless banking, and telecom. With leadership roles tied to major digital finance and transformation initiatives in Pakistan, he contributes deep expertise in strategy and investments.",
  },
];

export default function LeadershipSection() {
  return (
    <section aria-label="Leadership" className="w-full bg-white">
      <div className="w-full px-5 md:px-12 lg:px-20 pt-28 md:pt-32 lg:pt-32 pb-20 md:pb-28 lg:pb-[120px]">
        <span className="text-label font-body block" style={{ color: "#67686B" }}>
          Leadership
        </span>

        <h2
          className="font-heading"
          style={{ fontSize: "clamp(2.125rem, 3.4vw, 3rem)", lineHeight: "1.083", fontWeight: 300, color: "#1C1C1F", margin: 0, marginTop: "24px", maxWidth: "700px" }}
        >
          Experienced Leadership, with Depth and Perspective
        </h2>

        <div className="mt-20 lg:mt-20 flex flex-col gap-10 lg:gap-6">
          <LeaderRow leader={leaders[0]} />
          <LeaderRow leader={leaders[1]} reverse />
        </div>
      </div>
    </section>
  );
}

function LeaderRow({ leader, reverse = false }: { leader: typeof leaders[number]; reverse?: boolean }) {
  return (
    <div
      className={[
        "grid grid-cols-1 lg:grid-cols-[400px_440px] items-stretch",
        reverse ? "lg:ml-[440px]" : "",
      ].join(" ")}
    >
      <div className="relative bg-[#0B1738] overflow-hidden h-[336px] md:h-[400px] lg:h-[400px]">
        {leader.placedImage ? (
          <Image
            src={leader.image}
            alt={leader.name}
            width={960}
            height={1280}
            className={leader.imageClassName}
            sizes="(max-width: 1024px) calc(100vw + 145px), 515px"
          />
        ) : (
          <Image
            src={leader.image}
            alt={leader.name}
            fill
            className={leader.imageClassName}
            sizes="(max-width: 1024px) 100vw, 400px"
          />
        )}
      </div>

      <div
        className="flex flex-col min-h-[360px] md:min-h-[400px] p-6"
        style={{ backgroundColor: leader.cardBg }}
      >
        <h3 className="font-heading" style={{ fontSize: "26px", lineHeight: "32px", fontWeight: 300, color: "#1C1C1F", margin: 0 }}>
          {leader.name}
        </h3>
        <p className="font-body" style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "12px" }}>
          {leader.role}
        </p>
        <p className="font-body mt-auto" style={{ fontSize: "15px", lineHeight: "22px", color: "#373738", marginBottom: 0 }}>
          {leader.bio}
        </p>
      </div>
    </div>
  );
}
