import React, { useEffect, useRef, useState } from "react";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";

const images = [p1, p2, p3, p4, p5, p6, p7, p8];

function HeroSection() {
  const sliderRef = useRef(null);
  const bannerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [rotationY, setRotationY] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    const banner = bannerRef.current;
    if (!slider || !banner) return;

    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.clientX);
      slider.style.cursor = "grabbing";
    };

    const handlemouseup = () => {
      if (isDragging) {
        setIsDragging(false);
        slider.style.cursor = "grab";
      }
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - startX;
      const sensitivity = 0.5; // Adjust this value to change rotation speed
      const newRotation = rotationY + deltaX * sensitivity;
      setRotationY(newRotation);
      setStartX(e.clientX);
    };

    // const handleTouchStart = (e) => {
    //   setIsDragging(true);
    //   setStartX(e.touches[0].clientX);
    //   slider.style.cursor = "grabbing";
    // };

    // const handleTouchEnd = () => {
    //   setIsDragging(false);
    //   slider.style.cursor = "grab";
    // };

    // const handleTouchMove = (e) => {
    //   if (!isDragging) return;
    //   const deltaX = e.touches[0].clientX - startX;
    //   const sensitivity = 0.5; // Adjust this value to change rotation speed
    //   const newRotation = rotationY + deltaX * sensitivity;
    //   setRotationY(newRotation);
    //   // setStartX(e.touches[0].clientX);
    // };

    banner.addEventListener("mousedown", handleMouseDown);
    banner.addEventListener("mouseup", handlemouseup);
    banner.addEventListener("mousemove", handleMouseMove);
    // banner.addEventListener("touchstart", handleTouchStart);
    // banner.addEventListener("touchend", handleTouchEnd);
    // banner.addEventListener("touchmove", handleTouchMove);

    return () => {
      banner.removeEventListener("mousedown", handleMouseDown);
      banner.removeEventListener("mouseup", handlemouseup);
      banner.removeEventListener("mousemove", handleMouseMove);
      // banner.removeEventListener("touchstart", handleTouchStart);
      // banner.removeEventListener("touchend", handleTouchEnd);
      // banner.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isDragging, startX, rotationY]);

  return (
    <div className="hero">
      <div 
        ref={bannerRef}
        className="banner bg-[#111] h-[65vh] w-full text-center flex justify-center items-center overflow-hidden relative"
      >
        <div
          ref={sliderRef}
          className="slider absolute w-[400px] h-[180px] top-[20%] -translate-y-1/2 [transform-style:preserve-3d] z-10 cursor-grab"
          style={{
            "--quantity": images.length,
            transform: `perspective(1000px) rotateY(${rotationY}deg)`,
            transition: "transform 0.3s ease-out", // Add smooth transition
          }}
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
  );
}

export default HeroSection;