import React from "react";
import "./Navbar.css";
import bsnlLogo from "../../assets/logobsnl.png";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="w-full h-32 bg-[#111] pt-2">
      <div className="navbar-container flex lg:gap-16 items-center py-2 w-full px-10 m-auto">
        <a href="/" className="navbar-logo">
          <img src={bsnlLogo} className="h-14 w-14 cover" alt="BSNL Logo" />
        </a>
        <div className="navbar-menu flex-1 hidden lg:block">
          <ul className="menu-list flex justify-end">
            <li>
              <a href="#" className="menu relative block px-4 py-2 text-white">
                <h2 className="menu-title text-md font-bold">Home</h2>
              </a>
            </li>
            <li>
              <a href="#" className="menu relative block px-4 py-2 text-white">
                <h2 className="menu-title text-md font-bold">About Us</h2>
                <ul className="menu-dropdown hidden absolute top-[100%] left-0 bg-[#fff] min-w-32">
                  <li>Company</li>
                  <li>HRD</li>
                  <li>Others</li>
                </ul>
              </a>
            </li>
            <li>
              <a href="#" className="menu relative block px-4 py-2 text-white">
                <h2 className="menu-title text-md font-bold">
                  Landline & data
                </h2>
                <ul className="menu-dropdown hidden absolute top-[100%] left-0 bg-[#fff] min-w-32">
                  <li>Kevin</li>
                  <li>Jim</li>
                  <li>Andy</li>
                </ul>
              </a>
            </li>
            <li>
              <a href="#" className="menu relative block px-4 py-2 text-white">
                <h2 className="menu-title text-md font-bold">Mobile & data</h2>
                <ul className="menu-dropdown hidden absolute top-[100%] left-0 bg-[#fff] min-w-32">
                  <li>Bench</li>
                  <li>Pizza</li>
                  <li>Honda CB125</li>
                  <li>Space</li>
                  <li>Black matter</li>
                  <li>Apple</li>
                  <li>Philodendron</li>
                  <li>Liver</li>
                  <li>Brass</li>
                </ul>
              </a>
            </li>
            <li>
              <a href="#" className="menu relative block px-4 py-2 text-white">
                <h2 className="menu-title text-md font-bold">Ent. Services</h2>
                <ul className="menu-dropdown hidden absolute top-[100%] left-0 bg-[#fff] min-w-32">
                  <li>Godzilla</li>
                  <li>Man on Wire</li>
                  <li>Spirited Away</li>
                  <li>Interstellar</li>
                </ul>
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <button
            type="button"
            className="account-button bg-[#0039a6] text-white px-4 py-2 rounded-md font-bold mr-3"
          >
            My Account
          </button>
          <button
            className="menu-toggle block lg:hidden"
            aria-label="Toggle menu"
          >
            <CiMenuBurger />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
