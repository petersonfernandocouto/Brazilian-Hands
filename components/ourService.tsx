import React from "react";
import { FaHouseChimney } from "react-icons/fa6";
import { GiVacuumCleaner, GiMagicBroom, GiSoap } from "react-icons/gi";

const OurService = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className=" text-center">
        <h2 className=" text-emerald-500 font-bold pb-5">Our Service</h2>
        <h1 className="text-2xl font-bold pb-5">WHAT WE ARE OFFERING</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-8 p-6">
        {/* Card 1 */}
        <div className="max-w-xs bg-white shadow-lg rounded-lg p-6 text-center hover:bg-gray-100 transition-all">
          <FaHouseChimney className="text-7xl text-emerald-500 mx-auto mb-4 border border-gray-400 p-3 rounded-full" />
          <h1 className="text-2xl font-bold mb-2 text-emerald-500 ">
            House Cleaning
          </h1>
          <p className="text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
        </div>

        {/* Card 2 */}
        <div className="max-w-xs bg-white shadow-lg rounded-lg p-6 text-center hover:bg-gray-100 transition-all">
          <GiMagicBroom className="text-7xl text-emerald-500 mx-auto mb-4 border border-gray-400 p-3 rounded-full" />
          <h1 className="text-2xl font-bold mb-2 text-emerald-500">
            Office Cleaning
          </h1>
          <p className="text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
        </div>

        {/* Card 3 */}
        <div className="max-w-xs bg-white shadow-lg rounded-lg p-6 text-center hover:bg-gray-100 transition-all">
          <GiVacuumCleaner className="text-7xl text-emerald-500 mx-auto mb-4 border border-gray-400 p-3 rounded-full" />
          <h1 className="text-2xl font-bold mb-2 text-emerald-500">
            Floor Cleaning
          </h1>
          <p className="text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
        </div>

        {/* Card 4 */}
        <div className="max-w-xs bg-white shadow-lg rounded-lg p-6 text-center hover:bg-gray-100 transition-all">
          <GiSoap className="text-7xl text-emerald-500 mx-auto mb-4 border border-gray-400 p-3 rounded-full" />
          <h1 className="text-2xl font-bold mb-2 text-emerald-500">
            Window Cleaning
          </h1>
          <p className="text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurService;
