import Link from "next/link";
import Image from "next/image";
import ArrowRight from "@/components/icons/ArrowRight";

export default function CTASection({ ariaLabel = "Start the Conversation" }: { ariaLabel?: string }) {
  return (
    <section aria-label={ariaLabel} className="w-full bg-white px-5 md:px-12 lg:px-20">
      <div className="mss-shared-cta-frame relative w-full overflow-hidden flex items-center justify-center">
        <div className="mss-shared-cta-image" aria-hidden="true">
          <Image
            src="/global/cta-bg.png"
            alt=""
            fill
            className="object-fill"
            sizes="(max-width: 767px) 903px, 1446px"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-5" style={{ maxWidth: "560px" }}>
          <h2
            className="font-heading font-light text-white text-h2 m-0"
          >
            Let&apos;s Start the Right Conversation!
          </h2>
          <p
            className="font-body text-body-sm text-white"
            style={{ margin: 0, marginTop: "12px", maxWidth: "520px" }}
          >
            If you are building, scaling, or exploring a strategic path forward, we welcome opportunities that align with the MSS ecosystem.
          </p>
          <Link
            href="/pitch"
            className="inline-flex items-center gap-[6px] font-body text-body-sm mt-8"
            style={{ height: "40px", backgroundColor: "#FFFFFF", color: "#1C1C1F", paddingLeft: "20px", paddingRight: "16px", paddingTop: "8px", paddingBottom: "8px", textDecoration: "none", whiteSpace: "nowrap" }}
          >
            Send Us Your Pitch
            <ArrowRight size="lg" fill="#1C1C1F" />
          </Link>
        </div>
      </div>
    </section>
  );
}
