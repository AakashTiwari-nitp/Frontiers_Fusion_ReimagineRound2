import React, { useEffect, useRef, useState } from "react";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const images = [p1, p2, p3, p4, p5, p6, p7, p8];


function HeroSection() {
  const sliderRef = useRef(null);
  const bannerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
/*
  useEffect(() => {
    const slider = sliderRef.current;
    const banner = bannerRef.current;
    if (!slider || !banner) return;

    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.clientX);
      slider.style.cursor = "grabbing";
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        slider.style.cursor = "grab";
      }
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - startX;
      const sensitivity = 0.3;
      const newRotation = rotationY + deltaX * sensitivity;
      setRotationY(newRotation);
      setStartX(e.clientX);
    };

    banner.addEventListener("mousedown", handleMouseDown);
    banner.addEventListener("mouseup", handleMouseUp);
    banner.addEventListener("mousemove", handleMouseMove);

    return () => {
      banner.removeEventListener("mousedown", handleMouseDown);
      banner.removeEventListener("mouseup", handleMouseUp);
      banner.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging, startX, rotationY]); 
 */
  

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationY((prevRotationY) => prevRotationY + 45); // Adjust the degree of rotation as needed
    }, 3000); // 10000ms = 10 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []); 

  const handleLeftClick = () => {
    setRotationY(rotationY - 45); // Adjust the degree of rotation as needed
  };

  const handleRightClick = () => {
    setRotationY(rotationY + 45); // Adjust the degree of rotation as needed
  };

  return (
    <div className="hero">
      <div
        ref={bannerRef}
        className="banner bg-[#111] h-[95vh] w-full text-center flex justify-center items-center overflow-hidden relative"
      >
        <button
          onClick={handleLeftClick}
          className="absolute left-0 top-1/3 transform -translate-y-1/2 p-4 text-black z-20 rounded-full"
        >
          <FaRegArrowAltCircleLeft size={"2em"}/>
        </button>
        <div
          ref={sliderRef}
          className="slider absolute w-[430px] h-[180px] top-[20%] -translate-y-1/2 [transform-style:preserve-3d] z-10 cursor-grab"
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
        <button
          onClick={handleRightClick}
          className="absolute right-3 top-1/3 transform -translate-y-1/2  text-black z-20 rounded-full "
        >
         <FaRegArrowAltCircleRight size={"2em"} />
        </button>
      </div>
    </div>
  );
}

export default HeroSection;