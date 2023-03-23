import React from "react";
import { BiBadgeCheck } from "react-icons/bi";

export const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-black">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-500">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-pink-800">
          Bahareh Izadpanah.
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
        As a full-stack developer, my expertise lies in building digital experiences that are nothing short of exceptional. At the moment, my primary area of focus is centered around developing responsive web applications utilizing a comprehensive full-stack methodology.
        </p>
        <div>
          <button className="text-white bg-pink-600 px-6 py-3 flex items-center hover:bg-yellow-700">
            {" "}
            View Work <BiBadgeCheck />
          </button>
        </div>
      </div>
    </div>
  );
};
