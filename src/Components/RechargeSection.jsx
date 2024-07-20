import React from "react";

function RechargeSection() {
  const postpaidPlans = [
    { pm: 276, price: 3599, validity: "365 Days", data: "2.5GB/Day" },
    { pm: 175, price: 2399, validity: "365 Days", data: "1.5GB/Day" },
    { pm: 276, price: 1599, validity: "365 Days", data: "2.5GB/Day" },
  ];

  const prepaidPlans = [
    { pm: 239, price: 3599, validity: "365 Days", data: "2.5GB/Day" },
    { pm: 175, price: 2399, validity: "365 Days", data: "1.5GB/Day" },
    { pm: 276, price: 1599, validity: "365 Days", data: "2.5GB/Day" },
  ];

  return (
    <div className="w-full h-fit bg-[#111]">
      <div className="text-center text-white mb-10">
        <h1 className="text-3xl font-extrabold">Best Postpaid Plans</h1>
        <button className="px-3 py-1 text-lg font-semibold bg-black rounded-lg mx-5 mt-4">
          Individual Plans
        </button>
        <button className="px-3 py-1 text-lg font-semibold bg-[#D9D9D9] text-black rounded-lg mx-5 mt-4">
          Family Plans
        </button>
      </div>
      <div className="w-full bg-[#111] text-white flex justify-evenly flex-wrap gap-5">
        {postpaidPlans.map((elem, index) => {
          return (
            <div className="w-64 h-64 p-2 bg-[#1E1E1E] rounded-lg text-center" key={index}>
              <h1 className="bg-blue-600 p-1 ml-3 mt-2 mr-20 rounded-md">
                Only ₹{elem.pm}/Month
              </h1>
              <h2 className="px-4 text-xl font-bold m-1 mt-2">₹{elem.price}</h2>
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
              </button>
            </div>
          );
        })}
      </div>
      <div className="text-center text-white mt-10 mb-10">
        <h1 className="text-3xl font-extrabold">Best Prepaid Plans</h1>
      </div>
      <div className="w-full bg-[#111] text-white flex justify-evenly flex-wrap gap-5">
        {prepaidPlans.map((elem, index) => {
          return (
            <div className="w-64 h-64 p-2 bg-[#1E1E1E] rounded-lg text-center" key={index}>
              <h1 className="bg-blue-600 p-1 ml-3 mt-2 mr-20 rounded-md">
                Only ₹{elem.pm}/Month
              </h1>
              <h2 className="px-4 text-xl font-bold m-1 mt-2">₹{elem.price}</h2>
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
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RechargeSection;
