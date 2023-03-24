import React from "react";
import pishi from "../assets/pishi.jpeg";

export const About = () => {
  return (
    <div name="about" className=" w-full md:h-screen bg-black text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-3 gap-8">
          <div className=" pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4">
          <div className=" text-4xl font-bold">
            <p>Hi. I'm Bahareh Izadpanah, nice to meet you!</p>
          </div>
          <div>
            <p>
            I am highly motivated to create exceptional products that can make a positive impact on people's lives. With my expertise in software engineering, I specialize in crafting tailored solutions for a diverse range of clients, including individuals, small businesses, and large corporations.
            </p>
          </div>
          <div className=" text-4xl font-bold">
            <img className="h-auto" src={pishi} alt="a cat with sunglasses"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
