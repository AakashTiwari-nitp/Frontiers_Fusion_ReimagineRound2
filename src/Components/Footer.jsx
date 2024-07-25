import React from "react";
import bsnlLogo from "../assets/logo.png";
import { BiSupport } from "react-icons/bi";
import { IoIosChatbubbles } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { IoStorefront } from "react-icons/io5";
import './Footer.css'

function Footer() {
  return (
    <div className="bg-[#111] py-5 w-full">
      <div className="text-white lg:w-3/5 sm:w-4/5 w-[90%] rounded-lg text-center bg-[#4C3DFF] py-5 m-auto">
        <h1 className="text-5xl font-extrabold tracking-wide">
          Need a Guidance?
        </h1>
        <h2 className="text-xl mt-2">It's Our Pleasure to help You!</h2>
        <div className="flex justify-around py-5 flex-wrap sm:flex-row flex-col px-10 sm:px-0 gap-3 sm:gap-0">
          <h2 id="footerbutton" className=" bg-[#584BEF] text-lg rounded-lg border-sky-200 border-2 px-2">
            <BiSupport className="inline-block pr-1" size={"1.5em"} />
            Support
          </h2>
          <h2 id="footerbutton" className=" bg-[#584BEF] text-lg rounded-lg border-sky-200 border-2 px-2">
            <IoIosChatbubbles className="inline-block pr-1" size={"1.5em"} />
            Chat with Us
          </h2>
          <h2 id="footerbutton"  className=" bg-[#584BEF] text-lg rounded-lg border-sky-200 border-2 px-2">
            <FiPhoneCall className="inline-block pr-1" size={"1.5em"} />
            Call Us
          </h2>
          <h2 id="footerbutton" className=" bg-[#584BEF] text-lg rounded-lg border-sky-200 border-2 px-2">
            <IoStorefront className="inline-block pr-1" size={"1.5em"} />
            Store
          </h2>
        </div>
      </div>
      <div  className=" w-full flex sm:justify-around justify-start pt-5 pb-10 flex-wrap px-5 gap-10 sm:gap-5 sm:px-2 md:gap-0">
        <div className="text-white text-left">
          <h1 className="text-xl font-semibold text-[#666] mb-3">
            Quick Access
          </h1>
          <div className="links text-md flex flex-col gap-3">
            <h6>Prepaid Recharge</h6>
            <h6>PostPaid Bill Payment</h6>
            <h6>BroadBand Payment</h6>
            <h6>Exclusive Offers</h6>
            <h6>Business</h6>
            <h6>Download Forms</h6>
          </div>
        </div>
        <div className="text-white">
          <h1 className="text-xl font-semibold text-[#666] mb-3">Support</h1>
          <div className="links text-md flex flex-col gap-3">
            <h6>Exclusive Support</h6>
            <h6>SiteMap</h6>
            <h6>Feedback</h6>
            <h6>Locate Us</h6>
            <h6>FAQ</h6>
            <h6>Track Order</h6>
            <h6>Manage Your Account</h6>
          </div>
        </div>
        <div className="text-white">
          <h1 className="text-xl font-semibold text-[#666] mb-3">
            New Connection
          </h1>
          <div className="links text-md flex flex-col gap-3">
            <h6>Prepaid</h6>
            <h6>Postpaid</h6>
            <h6>BroadBand</h6>
            <h6>Switch to BSNL</h6>
            <h6>Special Plans</h6>
            <h6>International Roaming</h6>
          </div>
        </div>
        <div className="text-white">
          <h1 className="text-xl font-semibold text-[#666] mb-3">About BSNL</h1>
          <div className="links text-md flex flex-col gap-3">
            <h6>Brand</h6>
            <h6>Carrer</h6>
            <h6>Partners</h6>
            <h6>About BSNL</h6>
            <h6>Press Release</h6>
            <h6>Investor</h6>
          </div>
        </div>
      </div>
      <div className=" bg-[#010101] text-white flex lg:flex-row flex-col justify-around py-5 gap-50 items-center">
        <div className="flex flex-wrap gap-5 items-center">
          <div className="h-8 w-8 m-auto">
            <img src={bsnlLogo} className="w-full h-full cover" alt="" />
          </div>
          <h1 className="sm:text-sm text-xs m-auto text-center">
            2024 &copy; Bharat Sanchar Nigam Limited. All Right Reserved
          </h1>
        </div>
        <div className="flex gap-10 flex-wrap justify-center">
          <div className="flex gap-10">
            <h6 className="text-sm">Press Release</h6>
            <h6 className="text-sm">Regulatory</h6>
          </div>
          <div className="flex gap-10">
            <h6 className="text-sm">Policies</h6>
            <h6 className="text-sm">Terms and Conditions</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
