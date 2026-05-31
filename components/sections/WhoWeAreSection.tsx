"use client";

import { Fragment, useState } from "react";
import Image from "next/image";

const items = [
  {
    title: "Strategic Ownership",
    body: "We invest and supports businesses with long-term relevance, helping shape direction beyond capital alone. The focus is on building companies with structure, clarity, and the ability to grow within changing markets.",
    image: "/images/about/who-we-are-1.jpg",
  },
  {
    title: "Connected Ecosystem",
    body: "Our businesses are part of a wider group, not isolated efforts. We look for ways to create alignment across companies, markets, and teams so that shared knowledge and relationships can create stronger outcomes.",
    image: "/images/about/who-we-are-2.jpg",
  },
  {
    title: "Operational Perspective",
    body: "Growth depends on how well ideas are executed. We bring practical business judgment, leadership experience, and operating discipline to help ventures move from potential to measurable progress.",
    image: "/images/about/who-we-are-3.jpg",
  },
  {
    title: "Global Market View",
    body: "Our presence across multiple regions gives us a broader understanding of opportunity, timing, and market behavior, which helps us identify where businesses can scale and where long-term value can be built.",
    image: "/images/about/who-we-are-4.jpg",
  },
];

export default function WhoWeAreSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      aria-label="Who We Are"
      className="w-full bg-white px-5 md:px-12 lg:px-20 pt-24 pb-24 lg:pb-[120px]"
    >
      <span className="text-label font-body block" style={{ color: "#373738" }}>
        Who are we
      </span>

      <h2
        className="about-who-h2 font-heading"
        style={{ margin: 0, marginTop: "24px", maxWidth: "600px", fontWeight: 300 }}
      >
        A Global Holding Company{"\n"}Shaping Tomorrow&apos;s Economy
      </h2>

      <div className="flex flex-col lg:flex-row mt-16 lg:gap-x-10 xl:gap-x-[40px]">

        {/* Image — all 4 stacked, opacity-driven swap */}
        <div
          className="about-who-image-frame w-full lg:flex-shrink-0 xl:w-[740px] lg:w-[57%] relative overflow-hidden mb-6 lg:mb-0"
          style={{ backgroundColor: "#0B1738" }}
        >
          {items.map((item, i) => (
            <Image
              key={item.image}
              src={item.image}
              alt=""
              fill
              className="object-cover"
              style={{
                opacity: i === activeIndex ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
              sizes="(max-width: 767px) 570px, 1480px"
              priority={i === 0}
            />
          ))}
        </div>

        {/* Interactive accordion list */}
        <div
          className="flex-1 flex flex-col lg:min-h-[590px]"
          style={{ borderBottom: "1px solid #D2D5D9" }}
        >
          {items.map((item, i) => (
            <Fragment key={item.title}>
              <div
                className={`about-who-item${i > 0 ? " about-who-item-bordered" : ""}`}
              >
                <button
                  className="about-who-item-btn"
                  onClick={() => setActiveIndex(i)}
                  aria-pressed={i === activeIndex}
                >
                  <span
                    className="about-who-item-heading font-heading"
                    style={{
                      fontWeight: 300,
                      color: i === activeIndex ? "#1C1C1F" : "#67686B",
                    }}
                  >
                    {item.title}
                  </span>
                  {i === activeIndex && (
                    <p
                      className="font-body about-who-item-body"
                      style={{ color: "#67686B", margin: 0, marginTop: "12px" }}
                    >
                      {item.body}
                    </p>
                  )}
                </button>
              </div>
              {i === activeIndex && <div className="flex-1" />}
            </Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
