import React from "react";
import { data } from "../data/data.js";

export const Work = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-black'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {project.map((item, index) => (
            <React.Fragment>
              <div className=" shadow-white hover:scale-110 duration-500">
                <img
                  className="w-auto mx-auto"
                  src={item.image}
                  alt="HTML icon"
                />
                <p className="my-4">{item.name}</p>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.view} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white "
                    >
                      View
                    </button>
                  </a>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
