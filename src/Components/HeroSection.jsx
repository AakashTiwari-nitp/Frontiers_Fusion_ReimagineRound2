import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import bsnlLogo from "../assets/logobsnl.png";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
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
// import gsap from "gsap";

const images = [p1, p2, p3, p4, p5, p6, p7, p8];

function HeroSection() {
  const sliderRef = useRef(null);
  const bannerRef = useRef(null);
  // const [isDragging, setIsDragging] = useState(false);
  // const [startX, setStartX] = useState(0);
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
      setRotationY((prevRotationY) => prevRotationY - 45); // Adjust the degree of rotation as needed
    }, 3000); // 10000ms = 10 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  const handleLeftClick = () => {
    setRotationY(rotationY + 45); // Adjust the degree of rotation as needed
  };

  const handleRightClick = () => {
    setRotationY(rotationY - 45); // Adjust the degree of rotation as needed
  };

  const navlinks = [
    {
      name: "Home",
      dropdown: [],
    },
    {
      name: "About Us",
      dropdown: [{ link: "Company" }, { link: "HRD" }, { link: "Others" }],
    },
    {
      name: "Landline & data",
      dropdown: [{ link: "Usage" }, { link: "Data" }, { link: "Speed Test" }],
    },
    {
      name: "Mobile & data",
      dropdown: [{ link: "Usage" }, { link: "Data" }, { link: "Speed Test" }],
    },
    {
      name: "Ent. Services",
      dropdown: [{ link: "SetUp Box" }, { link: "Plans" }],
    },
  ];

  const [show, setShow] = useState(0);

  const handleMenuClick = () => {
    setShow(!show);
  };

  // const navbarRef = useRef(null);

  // useEffect(() => {
  //   if (navbarRef.current) {
  //     const navbarElements = navbarRef.current.children;
      
  //     gsap.fromTo(
  //       navbarElements,
  //       { 
  //         opacity: 0, 
  //         y: -20 
  //       },
  //       { 
  //         opacity: 1, 
  //         y: 0, 
  //         duration: 0.5, 
  //         stagger: 0.1,
  //         ease: "power2.out"
  //       }
  //     );
  //   }
  // }, []);


  return (
    <>
      <div className="hero">
      <div className="w-full h-32 bg-[#111] pt-2">
        <div className="navbar-container flex justify-between lg:gap-16 items-center py-2 w-full px-10 m-auto">
          <div className="navbar-logo">
            <img src={bsnlLogo} className="h-14 w-14 cover" alt="BSNL Logo" />
          </div>
          <div className="navbar-menu flex-1 hidden lg:block z-50">
            <ul className="menu-list flex justify-end">
              {navlinks.map((elem, index) => {
                return (
                  <li key={index}>
                    <a
                      href="#"
                      className="menu relative block px-4 py-2 text-white"
                    >
                      <h2 className="menu-title text-base font-[PPWoodland] font-bold">
                        {elem.name}
                      </h2>
                      <ul className="menu-dropdown hidden absolute top-[100%] left-0 bg-[#fff] min-w-32">
                        {elem.dropdown.map((e, ind) => {
                          return <li key={ind}>{e.link}</li>;
                        })}
                      </ul>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="navbar-right flex">
            <button
              type="button"
              className="account-button bg-[#0039a6] text-white px-4 py-2 rounded-md font-bold mr-3"
            >
              My Account
            </button>
            <button
              className="menu-toggle block lg:hidden text-white"
              aria-label="Toggle menu"
              onClick={handleMenuClick}
            >
              {show ? (
                <IoMdClose size={"1.75em"} />
              ) : (
                <CiMenuBurger size={"1.75em"} />
              )}
            </button>
          </div>
        </div>
        <div
          className={`absolute right-0 bg-[#ffffff] ${
            show ? "block" : "hidden"
          } lg:hidden w-fit z-50`}
        >
          <div className="navbar-menu flex-1">
            <ul className="menu-list flex flex-col justify-end">
              {navlinks.map((elem, index) => {
                return (
                  <li key={index}>
                    <a
                      href="#"
                      className="menu relative block px-4 py-2 text-black"
                    >
                      <h2 className="menu-title text-md font-bold">
                        {elem.name}
                      </h2>
                      <ul className="menu-dropdown hidden absolute right-[100%] top-0 bg-[#fff] min-w-32">
                        {elem.dropdown.map((e, ind) => {
                          return <li key={ind}>{e.link}</li>;
                        })}
                      </ul>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
        <div
          ref={bannerRef}
          className="banner bg-[#111] h-[50vw] sm:h-[40vw] md:h-[35vw] xl:h-[30vw] w-full text-center flex justify-center items-center overflow-hidden relative rounded-md"
        >
          <button
            onClick={handleLeftClick}
            className="absolute left-0 top-1/3 transform -translate-y-1/2 p-4 text-black z-20 rounded-full"
          >
            <FaRegArrowAltCircleLeft className="text-white" size={"2em"} />
          </button>
          <div
            ref={sliderRef}
            className="slider absolute w-[35vw] h-[17vw] sm:w-[38vw] sm:h-[17vw] md:h-[15vw] lg:w-[35vw] lg:h-[15vw] xl:w-[25vw] xl:h-[12vw] top-[25%] -translate-y-1/2 [transform-style:preserve-3d] z-10 cursor-grab"
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
            <FaRegArrowAltCircleRight className="text-white" size={"2em"} />
          </button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
