import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Samir from "../public/assets/testimonials/samir.jpg";
import Ada from "../public/assets/testimonials/ada.jpg";
import { Calendar } from "lucide-react";
import Link from "next/link";

const Testimonials = () => {
  return (
    <div className="flex flex-col-reverse w-full items-center justify-center lg:flex-row lg:justify-evenly lg:gap-10 p-8">
      <div className="flex flex-col items-center justify-center lg:items-start">
        <h3 className="text-center lg:text-start text-emerald-500 font-bold pt-5 pb-5">
          Testimonials
        </h3>
        <div className="flex flex-col items-center lg:flex-row justify-between w-full">
          <div className="flex flex-col lg:w-[600px]">
            <h1 className="pb-5 text-2xl text-center font-medium lg:text-4xl lg:text-start lg:w-[380px]">
              Testimonials from Our Customers
            </h1>
            <p className="pb-5 text-xl text-gray-500 text-start">
              Check out what our customers are saying about us
            </p>
          </div>
          <Link href="#hero">
            <Button className="bg-yellow-400 text-black flex justify-center items-center lg:justify-start hover:bg-yellow-500 px-8 py-6 rounded-full font-semibold lg:text-lg">
              <Calendar className="mr-2" /> Book now
            </Button>
          </Link>
        </div>

        {/* Testimonials */}
        <div className="flex flex-col justify-center items-center gap-7 lg:flex-row w-full">
          {/* Primeiro Testimonial */}
          <div className="flex flex-col mt-10 justify-center items-center lg:justify-start lg:items-start gap-4 border border-1 shadow-sm lg:w-[558px] p-14 rounded-xl">
            <div className="flex flex-col lg:flex-row items-center gap-5">
              <div className="flex px-4 items-center justify-center rounded-full lg:justify-start lg:items-start">
                <Image
                  src={Samir}
                  alt="Samir Rajesh"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="font-bold text-2xl">Seán O'Connor</h2>
                <span>Marketing Manager</span>
              </div>
            </div>
            <h2 className="font-bold text-xl text-emerald-600">
              Quick and Reliable service
            </h2>
            <p>
              I had an excellent experience with the cleaning service. I reached
              out on a Saturday afternoon, and by that evening, a kind woman was
              at my mother’s home, ready to assist. Marcelo was incredibly
              helpful in arranging everything on short notice, as my mother was
              returning from hospital the next day and we needed her house
              prepared. The rates were very reasonable as well.
            </p>
          </div>

          {/* Segundo Testimonial */}
          <div className="flex flex-col mt-10 justify-center items-center lg:justify-start lg:items-start gap-4 border border-1 shadow-sm lg:w-[558px] p-14 rounded-xl">
            <div className="flex flex-col lg:flex-row items-center gap-5">
              <div className="flex px-4  items-center justify-center rounded-full lg:justify-start lg:items-start">
                <Image
                  src={Ada}
                  alt="Ada Waren"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="font-bold text-lg lg:text-2xl">
                  Michelle Kelly
                </h2>
                <span>Small Business Owner</span>
              </div>
            </div>
            <h2 className="font-bold text-xl text-emerald-600">
              Impressive Attention to Detail
            </h2>
            <p>
              I was very impressed with the cleaning service. I called on a
              Sunday morning and was able to have a lovely lady come to my
              father’s house that afternoon. Marcelo was amazing trying to help
              me find someone as my father was being discharged from hospital
              the following day and we needed his house cleaned for him . His
              prices are also affordable. Would highly recommended his company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
