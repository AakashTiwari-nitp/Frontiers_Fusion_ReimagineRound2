import React from "react";
import bsnlLogo from "../assets/logobsnl.png";

function Footer() {
  return (
    <div className="bg-[#111] py-5 w-full">
        <div className="text-white w-3/5 rounded-lg text-center bg-[#4C3DFF] py-5 m-auto">
            <h1 className="text-5xl font-extrabold tracking-wide">Need a Guidance?</h1>
            <h2 className="text-xl mt-2">It's Our Pleasure to help You!</h2>
            <div className="flex justify-around py-5">
                <h2 className=" bg-[#584BEF] text-lg rounded-lg border-sky-200 border-2 px-2">Support</h2>
                <h2 className=" bg-[#584BEF] text-lg rounded-lg border-sky-200 border-2 px-2">Chat with Us</h2>
                <h2 className=" bg-[#584BEF] text-lg rounded-lg border-sky-200 border-2 px-2">Call Us</h2>
                <h2 className=" bg-[#584BEF] text-lg rounded-lg border-sky-200 border-2 px-2">Store</h2>
            </div>
        </div>
      <div className=" w-full flex justify-around pt-5 pb-10">
        <div className="text-white">
          <h1 className="text-xl font-semibold text-[#666] mb-3">
            Quick Access
          </h1>
          <div className="links text-md flex flex-col gap-3">
            <a>Prepaid Recharge</a>
            <a>PostPaid Bill Payment</a>
            <a>BroadBand Payment</a>
            <a>Exclusive Offers</a>
            <a>Business</a>
            <a>Download Forms</a>
          </div>
        </div>
        <div className="text-white">
          <h1 className="text-xl font-semibold text-[#666] mb-3">Support</h1>
          <div className="links text-md flex flex-col gap-3">
            <a>Exclusive Support</a>
            <a>SiteMap</a>
            <a>Feedback</a>
            <a>Locate Us</a>
            <a>FAQ</a>
            <a>Track Order</a>
            <a>Manage Your Account</a>
          </div>
        </div>
        <div className="text-white">
          <h1 className="text-xl font-semibold text-[#666] mb-3">
            New Connection
          </h1>
          <div className="links text-md flex flex-col gap-3">
            <a>Prepaid</a>
            <a>Postpaid</a>
            <a>BroadBand</a>
            <a>Switch to BSNL</a>
            <a>Special Plans</a>
            <a>International Roaming</a>
          </div>
        </div>
        <div className="text-white">
          <h1 className="text-xl font-semibold text-[#666] mb-3">About BSNL</h1>
          <div className="links text-md flex flex-col gap-3">
            <a>Brand</a>
            <a>Carrer</a>
            <a>Partners</a>
            <a>About BSNL</a>
            <a>Press Release</a>
            <a>Investor</a>
          </div>
        </div>
      </div>
      <div className=" bg-[#010101] text-white flex justify-around py-5 gap-50 items-center">
        <div className="flex gap-5 items-center">
          <div className="h-8 w-8">
            <img src={bsnlLogo} className="w-full h-full cover" alt="" />
          </div>
          <h1 className="text-sm">2024 &copy; Bharat Sanchar Nigam Limited. All Right Reserved</h1>
        </div>
        <a className="text-sm">Press Release</a>
        <a className="text-sm">Regulatory</a>
        <a className="text-sm">Policies</a>
        <a className="text-sm">Terms and Conditions</a>
      </div>
    </div>
  );
}

export default Footer;
