import join1 from "../assets/bg-signup.webp"
import React from "react";

function JoinAgro() {
  return (
    <div className="sm:mx-16 mx-4 flex flex-col items-center justify-between rounded-md my-16 bg-[#3f0909] relative">
      <div className="absolute z-10 top-1/3 left-10">
        <h4 className="text-white text-4xl  sm:text-5xl mb-10">
          Suddenly it&apos;s all so <i>doable.</i>
        </h4>
        <button
          className="border text-base font-medium px-5 py-2   border-[#1DBF73] bg-[#1DBF73] text-white rounded-md"
          type="button"
        >
          Join AgroSync
        </button>
      </div>
      <div className="w-full h-auto">
        <img src={join1} fill alt="signup" className="hidden  sm:block rounded-sm" />
      </div>
    </div>
  );
}

export default JoinAgro;
