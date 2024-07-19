import React from "react";
import bsnlLogo from "../assets/logobsnl.png";
import iphone from "../assets/iphone.png";
import qr from "../assets/QR.png";

function BSNLApp() {
  return (
    <div className="w-full h-fit py-2 bg-[#111] flex justify-around mt-3">
      <div className="text-white w-[25%] h-fit py-10">
        <h2 className="text-2xl font-bold tracking-wide pt-10">
          Experience All New BSNL App
        </h2>
        <h3 className="text-lg py-2">
          Download the App for exclusive offers,manage your account and much
          more, on-the-go.
        </h3>
        <div className="w-32 h-32 mt-3">
          <img src={qr} className="w-full h-full cover" alt="" />
        </div>
        <h3 className="text-lg mt-3">Scan QR code to download the BSNL app</h3>
      </div>
      <div className="w-[30%]">
        <div className="w-full h-[100vh]">
          <img src={iphone} className="w-full h-full cover" alt="" />
        </div>
      </div>
    </div>
  );
}

export default BSNLApp;
