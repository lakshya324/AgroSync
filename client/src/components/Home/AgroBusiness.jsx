
import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import business1 from "../assets/business.webp"
import AgroLogo from "../assets/AgroSync.png";

function AgroBusiness() {
  return (
    <div className="bg-[#0d084d] sm:px-12 px-10 flex-wrap items-center justify-evenly pt-16 flex gap-8">
      <div className="text-white flex flex-col gap-6 justify-center items-start">
        <div className="flex gap-2">
        <div className="mr-2 mt-2 pl-2 w-[160px] ml-0 ">
        <img src= {AgroLogo}  />
      </div>
          <span className="text-white text-3xl  font-bold">Business</span>
        </div>
        <h2 className="text-3xl font-bold">Elevate Your Farming Experience</h2>
        <h4 className="text-xl">
        Unlock a tailored solution for agriculture to access quality crops and exclusive tools.
        </h4>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-2 items-center">
            <BsCheckCircle className="text-[#62646a] text-2xl" />
            <span>Crop Selection Made Easy</span>
          </li>
          <li className="flex gap-2 items-center">
            <BsCheckCircle className="text-[#62646a] text-2xl" />
            <span>Personalized Farming Support</span>
          </li>
          <li className="flex gap-2 items-center">
            <BsCheckCircle className="text-[#62646a] text-2xl" />
            <span>Efficient Collaboration</span>
          </li>
          <li className="flex gap-2 items-center">
            <BsCheckCircle className="text-[#62646a] text-2xl" />
            <span>Streamlined Transactions</span>
          </li>
        </ul>
        <button
          className="border text-base font-medium px-5 py-2   border-[#1DBF73] bg-[#1DBF73] text-white rounded-md"
          type="button"
        >
          Explore AgroSync
        </button>
      </div>
      <div className="relative  pt-28 h-[512px]  w-full sm:w-1/3">
        <img src={business1} alt="bsiness" fill />
      </div>
    </div>
  );
}

export default AgroBusiness;
