import React, { useEffect, useRef } from "react";
import m from "../assets/m.png";
import r from "../assets/r.png";
import t from "../assets/t.png";
import as from "../assets/as.png";
import b from "../assets/b.png";
import s from "../assets/s.png";
import tt from "../assets/tt.png";
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
      img: m,
      head: "Unmissable Mobile Deals",
      content: "Experience superior connectivity with our exclusive offers",
    },
    {
      img: t,
      head: "Empower with BSNL",
      content: "Register for Bharat-Net Udyami and lead the digital revolution with BSNL to bring seamless connectivity",
    },
    {
      img: tt,
      head: "Learn with BSNL",
      content: "Elevate your career with our industry-oriented telecom courses",
    },
    {
      img: as,
      head: "Strategic Locations for You",
      content: "Lease or buy prime BSNL properties now!",
    },
    {
      img: b,
      head: "Stay Connected Always",
      content: "Upgrade to lightning-fast fiber broadband and stay ahead",
    },
    {
      img: s,
      head: "Seamless connectivity",
      content: "Get consistent and reliable coverage throughout Delhi and NCR",
    },
    {
      img: r,
      head: "Registration",
      content: "BSNL partner/BharatNet Udyami Registration",
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
