import { FaWrench } from "react-icons/fa6";
import { CircleArrowRight } from "lucide-react";

import React from 'react'

const OurPurpose = () => {
  return (

    

    <div className="flex flex-col gap-7 lg:flex-row lg:justify-center bg-[#E4F0FF]">
      
      <div className="flex flex-col justify-center items-center">

        <p className="text-sm text-emerald-500 font-bold mt-4">Our Purpose</p>
        <h1 className="text-3xl font-medium lg:text-4xl mt-4 mb-4">TokoKlin's Purpose Revealed</h1>

        <div className="lg:w-[50%]">
          <div className="w-96 h-[450px] bg-[#020618] rounded-[15px]">IMG</div>
        </div>

      </div>

        <div className="ml-14">

            <div className="flex gap-4 mt-4 mb-4">

                <div className="w-16 h-12 bg-emerald-500 rounded-full flex justify-center items-center ">

                    <FaWrench className="text-white" />
                    

                </div>

                <h2 className="text-center pt-2 font-bold text-2xl">Our Vision</h2>

            </div>

            <div className="lg:w-[50%] mb-4">

                  <div className="w-[26rem] h-[280px] bg-emerald-500 rounded-[15px] text-white "> 

                    <p className="p-14">Urna neque ipsum nec ac nunc enim elementum posuere. Aenean orci duis gravida nulla sit magnis sed enim. Sed porta nisi eu fames dui habitant arcu sit. Ullamcorper magna nisl purus ultrices. Molestie ornare id cursus.
                    </p>

                  </div>

            </div>

            <div className="flex gap-4 mt-4 mb-4">

                <div className="w-16 h-12 bg-emerald-500 rounded-full flex justify-center items-center ">

                    <FaWrench className="text-white" />
                    

                </div>

                <h2 className="text-center pt-2 font-bold text-2xl">Our Mission</h2>

            </div>

            <div className="flex flex-col lg:w-[273px] mt-4 ">

                    <ul className=" flex flex-col justify-center gap-5 lg:items-start ml-6">

                        <li className="flex gap-4 rounded-xl bg-white p-6 w-96 hover:bg-[#CED9E7] cursor-pointer">
                        <CircleArrowRight />
                        Residential Cleaning
                        </li>

                        <li className="flex gap-4 rounded-xl bg-white p-6 w-96 hover:bg-[#CED9E7] cursor-pointer">
                        <CircleArrowRight />
                        Commercial Cleaning
                        </li>

                        <li className="flex gap-4 rounded-xl bg-white p-6 w-96 hover:bg-[#CED9E7] cursor-pointer">
                        <CircleArrowRight />
                        Deep Cleaning
                        </li>

                        <li className="flex gap-4 rounded-xl bg-white p-6 w-96 hover:bg-[#CED9E7] cursor-pointer mb-4">
                        <CircleArrowRight />
                        Deep Cleaning
                        </li>

                    </ul>

            </div>


        </div>

    </div>
      
   

  )
}

export default OurPurpose
