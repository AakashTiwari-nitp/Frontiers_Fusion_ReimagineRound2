import React, { useState } from "react";
import bsnlsim from "../assets/bsnlsim.svg";
import postpaidsim from "../assets/postpaidsim.svg";
import portsim from "../assets/portsim.svg";
import fancyno from "../assets/fancy.svg";
import { CiMobile2 } from "react-icons/ci";
import { BsRouter } from "react-icons/bs";
import { TbReceiptRupee } from "react-icons/tb";
import { CiCreditCard1 } from "react-icons/ci";
import { MdElectricBolt } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { SiNetflix } from "react-icons/si";
import { RiMovie2Fill } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";
import './PayBills.css'

function PayBills() {
  const familyPrePlans = [
    {
      price: 799,
      validity: "30 Days",
      bData: "100GB/Plan",
      connection: "2",
      subscriptions: "2",
      eBenefits: "200GB RollOver",
    },
    {
      price: 599,
      validity: "105 Days",
      bData: "75GB/Plan",
      connection: "2",
      subscriptions: "3",
      eBenefits: "20 Sms/Day",
    },
    {
      price: 599,
      validity: "105 Days",
      bData: "75GB/Plan",
      connection: "2",
      subscriptions: "3",
      eBenefits: "20 Sms/Day",
    },
  ];

  const familyPostPlans = [
    {
      price: 799,
      validity: "30 Days",
      bData: "100GB/Plan",
      connection: "2",
      subscriptions: "2",
      eBenefits: "200GB RollOver",
    },
    {
      price: 1199,
      validity: "30 Days",
      bData: "150GB/Plan",
      connection: "3",
      subscriptions: "3",
      eBenefits: "300GB RollOver",
    },
    {
      price: 1599,
      validity: "30 Days",
      bData: "200GB/Plan",
      connection: "4",
      subscriptions: "4",
      eBenefits: "500GB RollOver",
    },
  ];

  const fiberPlans = [
    {
      price: 599,
      validity: "30 Days",
      speed: "60",
      subscriptions: "2",
      data: "3.3TB",
    },
    {
      price: 999,
      validity: "30 Days",
      speed: "200",
      subscriptions: "3",
      data: "4TB",
    },
    {
      price: 2499,
      validity: "30 Days",
      speed: "500",
      subscriptions: "4",
      data: "5TB",
    },
  ];

  const newConnection = [
    { img: bsnlsim, text: "Buy Prepaid Sim" },
    { img: postpaidsim, text: "Buy PostPaid Sim" },
    { img: portsim, text: "Port to BSNL" },
    { img: fancyno, text: "Get a Fancy Number" },
  ];

  const postpaidPlans = [
    { pm: 276, price: 399, validity: "365 Days", data: "75GB/Plan" },
    { pm: 175, price: 799, validity: "365 Days", data: "150GB/Plan" },
    { pm: 276, price: 999, validity: "365 Days", data: "200GB/Plan" },
  ];

  const prepaidPlans = [
    { pm: 199, price: 599, validity: "84 Days", data: "1.5GB/Day" },
    { pm: 125, price: 1499, validity: "365 Days", data: "24GB/Plan" },
    { pm: 184, price: 2199, validity: "365 Days", data: "1.5GB/Day" },
  ];

  const [paid, setPaid] = useState(0);
  const preHandleClick = () => {
    setPaid(0);
  };
  const postHandleClick = () => {
    setPaid(1);
  };

  const [device, setDevice] = useState(0);
  const mobileHandleClick = () => {
    setDevice(0);
  };
  const fiberHandleClick = () => {
    setDevice(1);
  };

  const [Family, setFamily] = useState(0);

  const handleIndiClick = () => {
    setFamily(0);
  };

  const handleFamilyClick = () => {
    setFamily(1);
  };

  return (
    <>
      <div className="w-full pb-10 bg-[#111] text-white text-center">
        <h1 className="text-white text-center text-3xl font-extrabold tracking-wide">
          Recharge or Pay Bills
        </h1>
        <button
          className={`px-2 mx-2 py-1 mt-2 ${
            device ? "text-[#FFFFFF9A]" : "text-[#FFFFFF] border-b-[3px]"
          }`}
          onClick={() => {
            mobileHandleClick();
          }}
        >
          <CiMobile2 className="inline-block" size={"1.5em"} />
          Mobile
        </button>
        <button
          className={`px-2 mx-2 py-1 mt-2 ${
            device ? "text-[#FFFFFF] border-b-[3px]" : "text-[#FFFFFF9A]"
          }`}
          onClick={() => {
            fiberHandleClick();
          }}
        >
          <BsRouter className="inline-block" size={"1.25em"} /> Fiber
        </button>

        {/* for mobile */}

        <div
          className={`${
            device ? "hidden" : ""
          } bg-[#2b38ca] lg:w-5/12 md:w-1/2 sm:w-3/5 w-4/5 m-auto rounded-xl mt-4 py-5 lg:px-20 md:px-10 px-5`}
        >
          <div className="bg-[#5e4fff84] w-fit rounded-full">
            {/* button for prepaid */}
            <button
              className={`px-4 py-1 ${paid ? "" : "bg-[#111] rounded-full"}`}
              onClick={() => {
                preHandleClick();
              }}
            >
              <TbReceiptRupee className="inline-block pr-1" size={"1.5em"} />
              Prepaid
            </button>
            {/* button for postpaid */}
            <button
              className={`px-4 py-1 ${paid ? "bg-[#111] rounded-full" : ""}`}
              onClick={() => {
                postHandleClick();
              }}
            >
              <CiCreditCard1 className="inline-block pr-1" size={"1.75em"} />
              Postpaid
            </button>
          </div>
          <div class="relative mt-5 mr-16">
            {/* input for prepaid */}
            <div className={`${paid ? "hidden" : ""}`}>
              <input
                type="number"
                class="peer h-full w-full rounded-[7px] border border-yellow-100 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-yellow-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                required
              />
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-yellow-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-yellow-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Enter the Number:
              </label>
            </div>
            {/* input for postpaid */}
            <div className={`${paid ? "" : "hidden"}`}>
              <input
                type="number"
                class="peer h-full w-full rounded-[7px] border border-yellow-100 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-yellow-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                required
              />
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-yellow-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-yellow-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Enter the Number:
              </label>
            </div>
          </div>
           <button  id="paybutton" className="text-center text-white bg-green-400 hover:bg-[#00000084]  mt-5 mb-4 py-2 px-3 rounded-lg">
            Recharge
            <MdElectricBolt className="inline-block pr-1" size={"1.5em"} />
          </button>
        </div>

        {/* for fiber */}

        <div
          className={`${
            device ? "" : "hidden"
          } bg-[#2b38ca] lg:w-5/12 md:w-1/2 sm:w-3/5 w-4/5 m-auto rounded-xl mt-4 py-5 lg:px-20 md:px-10 px-5`}
        >
          <div className="bg-[#5e4fff84] w-fit rounded-full">
            {/* button for prepaid */}
            <button
              className={`px-4 py-1 ${paid ? "" : "bg-[#111] rounded-full"}`}
              onClick={() => {
                preHandleClick();
              }}
            >
              <TbReceiptRupee className="inline-block pr-1" size={"1.5em"} />
              Prepaid
            </button>
            {/* button for postpaid */}
            <button
              className={`px-4 py-1 ${paid ? "bg-[#111] rounded-full" : ""}`}
              onClick={() => {
                postHandleClick();
              }}
            >
              <CiCreditCard1 className="inline-block pr-1" size={"1.75em"} />
              Postpaid
            </button>
          </div>
          <div class="relative mt-5 mr-16">
            {/* input for prepaid */}
            <div className={`${paid ? "hidden" : ""}`}>
              <input
                type="number"
                class="peer h-full w-full rounded-[7px] border border-yellow-100 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-yellow-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                required
              />
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-yellow-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-yellow-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Enter the Number:
              </label>
            </div>
            {/* input for postpaid */}
            <div className={`${paid ? "" : "hidden"}`}>
              <input
                type="number"
                class="peer h-full w-full rounded-[7px] border border-yellow-100 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-yellow-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                required
              />
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-yellow-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-yellow-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Enter the Number:
              </label>
            </div>
          </div>
          <button className="text-center text-white bg-orange-400 hover:bg-[#00000084]  mt-5 mb-4 py-2 px-3 rounded-lg">
            Recharge
            <MdElectricBolt className="inline-block pr-1" size={"1.5em"} />
          </button>
        </div>
      </div>

      {/* Plans for mobile */}
      <div className={`${device ? "hidden" : "w-full h-fit bg-[#111]"}`}>
        <div className="text-center mb-10">
          <button
            onClick={() => {
              handleIndiClick();
            }}
            className={`px-3 py-1 text-lg font-semibold ${
              Family
                ? "bg-black text-white"
                : "bg-[#D9D9D9] text-black rounded-lg"
            } mx-5 mt-4`}
          >
            Individual Plans
          </button>
          <button
            onClick={() => {
              handleFamilyClick();
            }}
            className={`px-3 py-1 text-lg font-semibold ${
              Family
                ? "bg-[#D9D9D9] text-black rounded-lg"
                : "bg-black text-white"
            }`}
          >
            Family Plans
          </button>
        </div>

        {/* Individual Plans */}
        <div className={`${Family ? "hidden" : ""}`}>
          <div className={`${paid ? "" : "hidden"}`}>
            <div className="text-center text-white mt-10 mb-10">
              <h1 className="text-3xl font-extrabold">Best Postpaid Plans</h1>
            </div>
            <div className="w-full bg-[#111] text-white flex justify-evenly flex-wrap gap-5">
              {postpaidPlans.map((elem, index) => {
                return (
                  <div
                    className="w-64 h-64 p-2 bg-[#1E1E1E] rounded-lg text-center"
                    key={index}
                  >
                    <h1 className="bg-blue-600 p-1 ml-3 mt-2 mr-20 rounded-md">
                      Only ₹{elem.pm}/Month
                    </h1>
                    <h2 className="px-4 text-xl font-bold m-1 mt-2">
                      ₹{elem.price}
                    </h2>
                    <h2 className="text-md text-blue-500 px-3">View Details</h2>
                    <div className="flex justify-between px-3 mt-2">
                      <div className="flex flex-col">
                        <h2 className="text-lg tracking-wide text-[#19FF4B] font-semibold">
                          VALIDITY
                        </h2>
                        <h3 className="text-lg font-sans">{elem.validity}</h3>
                      </div>
                      <div className="flex flex-col">
                        <h2 className="text-lg tracking-wide text-[#19FF4B] font-semibold">
                          DATA
                        </h2>
                        <h3 className="text-lg font-sans">{elem.data}</h3>
                      </div>
                    </div>
                    <button className="text-lg w-3/4 py-2 mt-5 bg-slate-300 text-black font-semibold rounded-full text-center">
                      Recharge
                      <MdElectricBolt
                        className="inline-block pr-1"
                        size={"1.5em"}
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={`${paid ? "hidden" : ""}`}>
            <div className="text-center text-white mt-10 mb-10">
              <h1 className="text-3xl font-extrabold">Best Prepaid Plans</h1>
            </div>
            <div className="w-full bg-[#111] text-white flex justify-evenly flex-wrap gap-5">
              {prepaidPlans.map((elem, index) => {
                return (
                  <div
                    className="w-64 h-64 p-2 bg-[#1E1E1E] rounded-lg text-center"
                    key={index}
                  >
                    <h1 className="bg-blue-600 p-1 ml-3 mt-2 mr-20 rounded-md">
                      Only ₹{elem.pm}/Month
                    </h1>
                    <h2 className="px-4 text-xl font-bold m-1 mt-2">
                      ₹{elem.price}
                    </h2>
                    <h2 className="text-md text-blue-500 px-3">View Details</h2>
                    <div className="flex justify-between px-3 mt-2">
                      <div className="flex flex-col">
                        <h2 className="text-lg tracking-wide text-[#19FF4B] font-semibold">
                          VALIDITY
                        </h2>
                        <h3 className="text-lg font-sans">{elem.validity}</h3>
                      </div>
                      <div className="flex flex-col">
                        <h2 className="text-lg tracking-wide text-[#19FF4B] font-semibold">
                          DATA
                        </h2>
                        <h3 className="text-lg font-sans">{elem.data}</h3>
                      </div>
                    </div>
                    <button id="paybutton" className="text-lg w-3/4 py-2 mt-5 bg-slate-300 text-black font-semibold rounded-full text-center">
                      Recharge
                      <MdElectricBolt
                        className="inline-block pr-1"
                        size={"1.5em"}
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Family Plans */}
        <div className={`${Family ? "" : "hidden"}`}>
          <div className="w-full h-fit bg-[#111]">
            <div className="text-center text-white mt-10 mb-10">
              <h1 className="text-3xl font-extrabold">
                Best {paid ? "PostPaid" : "PrePaid"} Family Plans
              </h1>
            </div>

            {/* Family Prepaid Plans */}
            <div
              className={`${
                paid
                  ? "hidden"
                  : "w-full bg-[#111] text-white flex justify-evenly flex-wrap gap-5"
              }`}
            >
              {familyPrePlans.map((elem, index) => {
                return (
                  <div
                    key={index}
                    className="h-80 w-80 bg-[#E3E9FD] px-3 py-1 rounded-lg relative overflow-hidden"
                  >
                    <div className="border-b-2 border-b-[#C8D3F6] h-16 flex justify-between gap-2">
                      <div className="w-[40%]">
                        <h2 className="text-black text-lg font-extrabold">
                          ₹{elem.price}
                        </h2>
                        <h3 className="text-blue-600 text-base">
                          View Details
                        </h3>
                      </div>
                      <div className="w-[45%]">
                        <h2 className="text-base font-bold text-right text-red-600">
                          Unlimited Voice Call Facility
                        </h2>
                      </div>
                    </div>
                    <div className="h-fit flex justify-between">
                      <div className="w-[45%] flex flex-col gap-2">
                        <div className="px-2 py-1">
                          <h2 className="text-[#727070] text-lg font-bold">
                            Connections
                          </h2>
                          <div className="text-black text-md flex item-center gap-2">
                            <CgProfile
                              size={"2.5em"}
                              className="inline-block"
                            />
                            <h3 className="">
                              {elem.connection} Additional Family SIM
                            </h3>
                          </div>
                        </div>
                        <div className="px-2 py-1">
                          <h2 className="text-[#727070] text-lg font-bold">
                            Validity
                          </h2>
                          <h3 className="text-base text-black">
                            {elem.validity}
                          </h3>
                        </div>
                        <div className="px-2 py-1">
                          <h2 className="text-[#727070] text-lg font-bold">
                            Subscriptions
                          </h2>
                          <div className="text-black text-md flex item-center gap-2">
                            <div className="flex">
                              <SiNetflix
                                size={"2em"}
                                className="inline-block p-1 border-2 border-black rounded-full"
                              />
                              <RiMovie2Fill
                                size={"2em"}
                                className="inline-block p-1 border-2 border-black rounded-full"
                              />
                            </div>
                            <h3 className="text-base">+{elem.subscriptions}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="w-[35%] flex flex-col gap-2">
                        <div className="px-2 py-3">
                          <h2 className="text-[#727070] text-lg font-bold">
                            Benefits
                          </h2>
                          <h3 className="text-base text-black">{elem.bData}</h3>
                        </div>
                        <div className="px-2 py-3">
                          <h2 className="text-[#727070] text-lg font-bold">
                            Extra Benefits
                          </h2>
                          <h3 className="text-base text-black">
                            {elem.eBenefits}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <button className="absolute -right-4 bottom-1 bg-blue-600 px-10 py-2 rounded-full text-base pr-28">
                      Avail Now
                      <FaExternalLinkAlt className="inline-block ml-5" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Family PostPaid Plans */}
            <div
              className={`${
                paid
                  ? "w-full bg-[#111] text-white flex justify-evenly flex-wrap gap-5"
                  : "hidden"
              }`}
            >
              {familyPostPlans.map((elem, index) => {
                return (
                  <div
                    key={index}
                    className="h-80 w-80 bg-[#E3E9FD] px-3 py-1 rounded-lg relative overflow-hidden"
                  >
                    <div className="border-b-2 border-b-[#C8D3F6] h-16 flex justify-between gap-2">
                      <div className="w-[40%]">
                        <h2 className="text-black text-lg font-extrabold">
                          ₹{elem.price}
                        </h2>
                        <h3 className="text-blue-600 text-base">
                          View Details
                        </h3>
                      </div>
                      <div className="w-[45%]">
                        <h2 className="text-base font-bold text-right text-red-600">
                          Unlimited Voice Call Facility
                        </h2>
                      </div>
                    </div>
                    <div className="h-fit flex justify-between">
                      <div className="w-[45%] flex flex-col gap-2">
                        <div className="px-2 py-1">
                          <h2 className="text-[#727070] text-lg font-bold">
                            Connections
                          </h2>
                          <div className="text-black text-md flex item-center gap-2">
                            <CgProfile
                              size={"2.5em"}
                              className="inline-block"
                            />
                            <h3 className="">
                              {elem.connection} Additional Family SIM
                            </h3>
                          </div>
                        </div>
                        <div className="px-2 py-1">
                          <h2 className="text-[#727070] text-lg font-bold">
                            Validity
                          </h2>
                          <h3 className="text-base text-black">
                            {elem.validity}
                          </h3>
                        </div>
                        <div className="px-2 py-1">
                          <h2 className="text-[#727070] text-lg font-bold">
                            Subscriptions
                          </h2>
                          <div className="text-black text-md flex item-center gap-2">
                            <div className="flex">
                              <SiNetflix
                                size={"2em"}
                                className="inline-block p-1 border-2 border-black rounded-full"
                              />
                              <RiMovie2Fill
                                size={"2em"}
                                className="inline-block p-1 border-2 border-black rounded-full"
                              />
                            </div>
                            <h3 className="text-base">+{elem.subscriptions}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="w-[35%] flex flex-col gap-2">
                        <div className="px-2 py-3">
                          <h2 className="text-[#727070] text-lg font-bold">
                            Benefits
                          </h2>
                          <h3 className="text-base text-black">{elem.bData}</h3>
                        </div>
                        <div className="px-2 py-3">
                          <h2 className="text-[#727070] text-lg font-bold">
                            Extra Benefits
                          </h2>
                          <h3 className="text-base text-black">
                            {elem.eBenefits}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <button className="absolute -right-4 bottom-1 bg-blue-600 px-10 py-2 rounded-full text-base pr-28">
                      Avail Now
                      <FaExternalLinkAlt className="inline-block ml-5" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Plans for fiber */}
      <div>
        <div className={`${device ? "w-full h-fit m-3 bg-[#111]" : "hidden"}`}>
          <div className="text-center text-white mb-10">
            <h1 className="text-3xl font-extrabold">Best Fiber Plans</h1>
          </div>
          <div
            className={`w-full h-fit bg-[#111] text-white flex justify-evenly flex-wrap gap-5 }`}
          >
            {fiberPlans.map((elem, index) => {
              return (
                <div
                  key={index}
                  className="h-64 w-80 bg-[#E3E9FD] px-3 py-1 rounded-lg relative overflow-hidden"
                >
                  <div className="border-b-2 border-b-[#C8D3F6] h-16 flex justify-between gap-2">
                    <div className="w-[40%]">
                      <h2 className="text-black text-lg font-extrabold">
                        ₹{elem.price}
                      </h2>
                      <h3 className="text-blue-600 text-base">View Details</h3>
                    </div>
                    <div className="w-[45%]">
                      <h2 className="text-base font-bold text-right text-red-600">
                        Unlimited Voice Call Facility
                      </h2>
                    </div>
                  </div>
                  <div className="h-fit flex justify-between">
                    <div className="w-[45%] flex flex-col gap-2">
                      <div className="px-2 py-1">
                        <h2 className="text-[#727070] text-lg font-bold">
                          Validity
                        </h2>
                        <h3 className="text-base text-black">
                          {elem.validity}
                        </h3>
                      </div>
                      <div className="px-2 py-1">
                        <h2 className="text-[#727070] text-lg font-bold">
                          Subscriptions
                        </h2>
                        <div className="text-black text-md flex item-center gap-2">
                          <div className="flex">
                            <SiNetflix
                              size={"2em"}
                              className="inline-block p-1 border-2 border-black rounded-full"
                            />
                            <RiMovie2Fill
                              size={"2em"}
                              className="inline-block p-1 border-2 border-black rounded-full"
                            />
                          </div>
                          <h3 className="text-base">+{elem.subscriptions}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="w-[35%] flex flex-col gap-2">
                      <div className="px-2 py-1">
                        <h2 className="text-[#727070] text-lg font-bold">
                          Speed
                        </h2>
                        <h3 className="text-base text-black">
                          {elem.speed}MB/sec
                        </h3>
                      </div>
                      <div className="px-2 py-1">
                        <h2 className="text-[#727070] text-lg font-bold">
                          Data
                        </h2>
                        <h3 className="text-base text-black">{elem.data}</h3>
                      </div>
                    </div>
                  </div>
                  <button className="absolute -right-4 bottom-1 bg-blue-600 px-10 py-2 rounded-full text-base pr-28">
                    Recharge Now
                    <FaExternalLinkAlt className="inline-block ml-5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* New Connection */}
      <div className="w-full pb-10 bg-[#111] text-white text-center">
        <h1 className="mt-10 text-white text-center text-2xl font-bold tracking-wide">
          Buy a New Connection
        </h1>
        <div  className="m-auto flex gap-5 mt-5 w-fit flex-wrap justify-evenly">
          {newConnection.map((elem, index) => {
            return (
              <div id="neon-hover"
                className="bg-black w-32 h-32 border-2 border-white hover:border-red-700 rounded-lg"
                key={index}
              >
                <div id="neon-hover" className="w-20 h-20 m-auto">
                  <img src={elem.img} className="w-full h-full cover" alt="" />
                </div>
                <h2 className="text-white text-base">{elem.text}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PayBills;
