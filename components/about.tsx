import React from "react";
import { Button } from "./ui/button";
import OurPurpose from "./AboutUs/ourPurpose";
import CleanerIMG from "../public/assets/cleaner.jpg";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";

const About = () => {
  return (
    <div className="bg-gray-50 flex flex-col items-center justify-center lg:flex-row lg:justify-evenly lg:gap-10 w-full py-10">
      <div className="flex flex-col mx-10 lg:mx-10 ">
        <Image
          className="rounded-3xl w-[300px] lg:w-[450px] "
          src={CleanerIMG}
          width={0}
          height={0}
          quality={100}
          alt="hero-img"
        />
      </div>

      <div className="mx-4 flex flex-col items-center justify-center lg:items-start mt-10">
        <p className="text-center lg:text-start text-emerald-500 font-bold pb-5">
          About us
        </p>

        <div className="flex flex-col lg:w-[560px] ">
          <h1 className="pb-5 text-2xl text-center font-medium lg:text-4xl lg:text-start">
            Experience expert cleaning services
          </h1>

          <p className="pb-5 text-justify text-lg">
            At{" "}
            <span className="font-semibold">Brazilian Hands Cooperative</span>,
            we believe in providing exceptional service with a personal touch.
            Founded by a group of hardworking Brazilians in Ireland, our mission
            is simple: to make your life easier by offering high-quality
            services in areas like cleaning, gardening, painting, and much more.
            Whether it’s a one-time job or regular support, we’re committed to
            delivering excellence in everything we do.
          </p>
        </div>
        <Link href="#hero">
          <Button className="bg-[#FDE047] text-black flex justify-center items-center lg:justify-start hover:bg-yellow-500 px-8 py-6 rounded-full font-semibold lg:text-lg m-4">
            <Calendar className="mr-2" /> Request now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default About;

//rafce
