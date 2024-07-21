import React, { useEffect, useRef } from "react";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function OfferSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.to(section, {
      x: "-38%",
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top 50%",
        end: "top 15%",
        markers: true,
        scrub: true,
      },
    });

    return () => {
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
      content: "BSNL partnet/BharatNat Udyami Registration",
    },
    {
      img: p2,
      head: "Training & Program",
      content: "BSNL Offers Telecom Traiining For Students and Professionals",
    },
    {
      img: p1,
      head: "Asset Monetization",
      content: "BSNL offers spaces/Land available for Rent/sale",
    },
    {
      img: p2,
      head: "Broadband",
      content: "Explore various offer for Fibre Broadband",
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
    <div className="mt-10">
        <div className="mt-2 mx-auto">
            <h1 className="text-white text-7xl text-center font-extrabold">Offers</h1>
        </div>
      <div
        ref={sectionRef}
        className="w-[160vw] h-[48vh] my-2 mt-5 px-10 flex justify-evenly gap-5"
      >
        {offers.map((elem, index) => (
          <div
            className="cards w-64 h-fit mt-2 rounded-lg overflow-hidden m-auto bg-[#484848]"
            key={index}
          >
            <div className="w-full h-48">
              <img src={elem.img} className="w-full h-full cover" alt="" />
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
  );
}

export default OfferSection;
