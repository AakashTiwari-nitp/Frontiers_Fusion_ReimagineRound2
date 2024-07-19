import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";

gsap.registerPlugin(ScrollTrigger);

const images = [p1, p2, p3, p4, p5];

function HeroSection() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    gsap.to(slider, {
      rotateY: "-360deg",
      rotateZ: "0deg",
      ease: "none",
      scrollTrigger: {
        trigger: ".banner .slider .item img",
        scroller: "body",
        start: "top 15%",
        end: "top 0%",
        markers: true,
        scrub: 2,
      },
    });
  }, []);

  return (
    <>
      <div className="hero">
        <div className="banner bg-[#111] h-[75vh] w-full text-center flex justify-center items-center overflow-hidden relative">
          <div
            ref={sliderRef}
            className="slider absolute w-[550px] h-[200px] top-[30%] -translate-y-1/2 [transform-style:preserve-3d] [transform:perspective(1000px)] z-10"
            style={{ "--quantity": images.length }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="item absolute inset-0 [backface-visibility:hidden] rounded-md overflow-hidden"
                style={{
                  "--position": index + 1,
                  transform: `rotateY(calc((var(--position) - 1) * (360deg / var(--quantity)))) translateZ(550px)`,
                }}
              >
                <img
                  src={src}
                  alt={`jacket ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
