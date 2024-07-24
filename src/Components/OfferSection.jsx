import React, { useEffect, useRef } from "react";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './OfferSection.css'

gsap.registerPlugin(ScrollTrigger);

function OfferSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    const updateAnimation = () => {
      const sectionWidth = section.offsetWidth;
      const contentWidth = content.scrollWidth;
      const maxScroll = contentWidth - sectionWidth;

      if (maxScroll > 0) {
        gsap.to(content, {
          x: () => -maxScroll,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 10%",
            end: () => `+=${maxScroll}`,
            scrub: true,
            pin: true,
            // anticipatePin: 1,
            // invalidateOnRefresh: true,
          },
        });
      } else {
        gsap.set(content, { x: 0 });
        ScrollTrigger.getAll().forEach((t) => t.kill());
      }
    };

    updateAnimation();

    // window.addEventListener("resize", updateAnimation);

    return () => {
      window.removeEventListener("resize", updateAnimation);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const offers = [
    {
      img: p2,
      head: "Mobile Offers",
      content: "Explore Various Promotional Offers",
    },
    {
      img: p1,
      head: "Registration",
      content: "BSNL partner/BharatNet Udyami Registration",
    },
    {
      img: p2,
      head: "Training & Program",
      content: "BSNL Offers Telecom Training For Students and Professionals",
    },
    {
      img: p1,
      head: "Asset Monetization",
      content: "BSNL offers spaces/Land available for Rent/sale",
    },
    {
      img: p2,
      head: "Broadband",
      content: "Explore various offers for Fibre Broadband",
    },
    {
      img: p2,
      head: "Seamless connectivity",
      content: "Seamless connectivity in Delhi & NCR area",
    },
    {
      img: p1,
      head: "Mobile Offers",
      content: "Explore Various Promotional Offers",
    },
  ];

  return (
    <div className="overflow-hidde mt-5" ref={sectionRef}>
      <div
        ref={contentRef}
        className="flex items-center mx-5"
        style={{ width: "max-content" }}
      >
        <div className="w-[50vw] h-[100%] flex shrink-0 items-center justify-center">
          <h1 className="text-white text-[10vw] font-extrabold">Offers</h1>
        </div>
        <div className="flex w-64 h-fit m-2">
          {offers.map((elem, index) => (
            <div id="offercard"
              className="cards w-80 h-80 mx-[1vw] rounded-lg overflow-hidden bg-[#484848] shrink-0"
              key={index}
            >
              <div className="w-full h-48">
                <img
                  src={elem.img}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="p-2 pb-2 text-white text-center">
                <h1 className="text-xl font-extrabold tracking-wide">
                  {elem.head}
                </h1>
                <h2 className="text-base font-semibold tracking-wide">
                  {elem.content}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OfferSection;
