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
      <div className="bg-[#2b38ca] lg:w-5/12 md:w-1/2 sm:w-3/5 w-4/5 m-auto rounded-xl mt-4 py-5 lg:px-20 md:px-10 px-5">
        <div className="bg-[#5e4fff84] w-fit rounded-full">
          <button className="px-4 py-1 bg-[#111] rounded-full"><TbReceiptRupee className="inline-block pr-1" size={"1.5em"} />Prepaid</button>
          <button className="px-4 py-1"><CiCreditCard1 className="inline-block pr-1" size={"1.75em"}  />Postpaid</button>
        </div>
        <div class="relative mt-5">
        <input
    type="text"
    class="peer h-full w-full rounded-[7px] border border-yellow-100 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-yellow-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
    placeholder=" "
    required
  />
  <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-yellow-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-yellow-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    Enter the number:
  </label>
</div>
        <button className="text-center  hover:bg-red-400 bg-[#65ff0584]  mt-5 mb-4 py-2 px-3 rounded-lg">
          Recharge<MdElectricBolt className="inline-block pr-1" size={"1.5em"}  />
        </button>
      </div>

      <h1 className="mt-10 text-white text-center text-2xl font-bold tracking-wide">Buy a New Connection</h1>
      <div className="m-auto flex gap-5 mt-5 w-fit flex-wrap justify-evenly">
        <div className="bg-black w-32 h-32 py-2 border-2 border-white hover:border-red-700 rounded-lg">
            <div className="w-20 h-20 m-auto">
                <img src={bsnlsim} className="w-full h-full cover" alt="" />
            </div>
            <h2 className="text-white">Prepaid</h2>
        </div>
        <div className="bg-black w-32 h-32 py-2 border-2 border-white hover:border-red-700 rounded-lg">
            <div className="w-20 h-20 m-auto">
                <img src={postpaidsim} className="w-full h-full cover" alt="" />
            </div>
            <h2 className="text-white">Postpaid</h2>
        </div>
        <div className="bg-black w-32 h-32 py-2 border-2 border-white hover:border-red-700 rounded-lg">
            <div className="w-20 h-20 m-auto">
                <img src={portsim} className="w-full h-full cover" alt="" />
            </div>
            <h2 className="text-white">Port to BSNL</h2>
        </div>
        <div className="bg-black w-32 h-32 py-1 border-2 border-white hover:border-red-700 rounded-lg">
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
