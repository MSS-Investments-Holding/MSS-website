import Link from "next/link";
import HeroBackgroundImage from "@/components/ui/HeroBackgroundImage";
import ArrowRight from "@/components/icons/ArrowRight";

export default function HomeCTASection() {
  return (
    <section aria-label="Start the Conversation" className="w-full bg-white px-5 md:px-12 lg:px-20">
      <div className="relative w-full overflow-hidden flex items-center justify-center min-h-[428px] md:min-h-[628px]">
        <HeroBackgroundImage
          src="/images/home/cta-bg.png"
          alt=""
          className="object-cover object-center"
          priority={false}
        />
        <div className="relative z-10 flex flex-col items-center text-center px-6" style={{ maxWidth: "560px" }}>
          <h2
            className="font-heading text-white"
            style={{ fontSize: "clamp(2.125rem, 3.2vw, 2.875rem)", lineHeight: "1.087", fontWeight: 300, margin: 0 }}
          >
            Let&apos;s Start the Right Conversation!
          </h2>
          <p
            className="font-body text-white"
            style={{ fontSize: "15px", lineHeight: "22px", margin: 0, marginTop: "12px", maxWidth: "520px" }}
          >
            If you are building, scaling, or exploring a strategic path forward, we welcome opportunities that align with the MSS ecosystem.
          </p>
          <Link
            href="/pitch"
            className="inline-flex items-center gap-[4px] font-body mt-8"
            style={{ height: "40px", backgroundColor: "#FFFFFF", color: "#1C1C1F", fontSize: "15px", lineHeight: "22px", paddingLeft: "20px", paddingRight: "16px", paddingTop: "8px", paddingBottom: "8px", textDecoration: "none", whiteSpace: "nowrap" }}
          >
            Send Us Your Pitch
            <ArrowRight size="lg" fill="#1C1C1F" />
          </Link>
        </div>
      </div>
    </section>
  );
}
