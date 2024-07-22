import React, { useState } from "react";
import "./Navbar.css";
import bsnlLogo from "../../assets/logobsnl.png";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const navlinks = [
    { name: "Home", dropdown: [{ link: "Company" }, { link: "HRD" }, { link: "Others" }] },
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

  return (
    <div className="w-full h-32 bg-[#111] pt-2">
      <div className="navbar-container flex justify-between lg:gap-16 items-center py-2 w-full px-10 m-auto">
        <a href="/" className="navbar-logo">
          <img src={bsnlLogo} className="h-14 w-14 cover" alt="BSNL Logo" />
        </a>
        <div className="navbar-menu flex-1 hidden lg:block">
          <ul className="menu-list flex justify-end">
            {navlinks.map((elem, index) => {
              return (
                <li key={index}>
                  <a
                    href="#"
                    className="menu relative block px-4 py-2 text-white"
                  >
                    <h2 className="menu-title text-md font-bold">
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
            aria-label="Toggle menu" onClick={handleMenuClick}
          >
            {show? <IoMdClose size={"1.75em"} /> : <CiMenuBurger size={"1.75em"} />}
          </button>
        </div>
      </div>
      <div className={`absolute right-0 bg-[#ffffff9a] ${show? "block": "hidden"} w-fit`}>
        <div className="navbar-menu flex-1">
          <ul className="menu-list flex flex-col justify-end">
            {navlinks.map((elem, index) => {
              return (
                <li key={index}>
                  <a
                    href="#"
                    className="menu relative block px-4 py-2 text-white"
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
  );
};

export default Navbar;
