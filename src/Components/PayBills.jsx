import React from "react";
import bsnlsim from "../assets/bsnlsim.svg";
import postpaidsim from "../assets/postpaidsim.svg";
import portsim from "../assets/portsim.svg";
import fancyno from "../assets/fancy.svg";
import { CiMobile2 } from "react-icons/ci";
import { BsRouter } from "react-icons/bs";
import { TbReceiptRupee } from "react-icons/tb";
import { CiCreditCard1 } from "react-icons/ci";
import { MdElectricBolt } from "react-icons/md";

function PayBills() {
  return (
    <div className="w-full pb-10 bg-[#111] text-white text-center">
      <h1 className="text-white text-center text-3xl font-extrabold tracking-wide">
        Recharge or Pay Bills
      </h1>
      <button className="px-2 mx-2 py-1 mt-2 text-[#FFFFFF] border-b-[3px]"><CiMobile2 className="inline-block" size={"1.5em"} />Mobile</button>
      <button className="px-2 mx-2 py-1 mt-2 text-[#FFFFFF9A]"><BsRouter className="inline-block" size={"1.25em"}  /> Fiber</button>
      <div className="bg-[#4C3DFF9A] lg:w-5/12 md:w-1/2 sm:w-3/5 w-4/5 m-auto rounded-xl mt-4 py-5 lg:px-20 md:px-10 px-5">
        <div className="bg-[#0C0093] w-fit rounded-full">
          <button className="px-4 py-1 bg-[#111] rounded-full"><TbReceiptRupee className="inline-block pr-1" size={"1.5em"} />Prepaid</button>
          <button className="px-4 py-1"><CiCreditCard1 className="inline-block pr-1" size={"1.75em"}  />Postpaid</button>
        </div>
        <input
          type="number"
          placeholder="Enter the number"
          className="w-full mt-5 px-5 py-2 bg-[#11E] text-md font-bold"
        />
        <button className="text-center mt-5 mb-4 py-2 px-3 bg-slate-600 rounded-lg">
          Recharge<MdElectricBolt className="inline-block pr-1" size={"1.5em"}  />
        </button>
      </div>

      <h1 className="mt-10 text-white text-center text-2xl font-bold tracking-wide">Buy a New Connection</h1>
      <div className="m-auto flex gap-5 mt-5 w-fit flex-wrap justify-evenly">
        <div className="bg-black w-32 h-32 py-2">
            <div className="w-20 h-20 m-auto">
                <img src={bsnlsim} className="w-full h-full cover" alt="" />
            </div>
            <h2 className="text-white">Prepaid</h2>
        </div>
        <div className="bg-black w-32 h-32 py-2">
            <div className="w-20 h-20 m-auto">
                <img src={postpaidsim} className="w-full h-full cover" alt="" />
            </div>
            <h2 className="text-white">Postpaid</h2>
        </div>
        <div className="bg-black w-32 h-32 py-2">
            <div className="w-20 h-20 m-auto">
                <img src={portsim} className="w-full h-full cover" alt="" />
            </div>
            <h2 className="text-white">Port to BSNL</h2>
        </div>
        <div className="bg-black w-32 h-32 py-1">
            <div className="w-20 h-20 m-auto">
                <img src={fancyno} className="w-full h-full cover" alt="" />
            </div>
            <h2 className="text-white">Get a Fancy Number</h2>
        </div>
      </div>
    </div>
  );
}

export default PayBills;
