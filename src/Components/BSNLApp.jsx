import React from "react";
import bsnlLogo from "../assets/logobsnl.png";
import iphone from "../assets/iphone.png";
import qr from "../assets/QR.png";

function BSNLApp() {
  return (
    <div className="w-full h-fit py-2 bg-[#111] flex justify-around  mt-3 sm:flex-row flex-col">
      <div className="text-white sm:w-[30%] w-4/5 text-center mx-auto sm:m-0 md:text-left lg:w-[24%] h-fit xl:py-10">
        <h2 className="text-3xl font-bold tracking-wide pt-10 leading-10">
          Experience The All New BSNL App
        </h2>
        <h3 className="text-lg py-2 mt-3 xl:mt-5">
          Download the App for exclusive offers, manage your account and much
          more, on-the-go.
        </h3>
        <div className="w-32 h-32 xl:w-64 m-auto xl:h-64 mt-5 xl:mt-10">
          <img src={qr} className="w-full h-full cover" alt="" />
        </div>
        <h3 className="text-lg mt-3 lg:mt-10">Scan QR code to download the BSNL app</h3>
      </div>
      <div className="sm:w-[30%] w-1/2 m-auto sm:m-0 hidden sm:block">
        <div className="w-full h-[100vh] overflow-hidden">
          <img src={iphone} className="w-full h-full cover py-5" alt="" />
        </div>
      </div>
    </div>
  );
}

export default BSNLApp;
