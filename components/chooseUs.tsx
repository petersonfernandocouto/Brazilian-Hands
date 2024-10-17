import React from "react";
import { Button } from "./ui/button";
import OurPurpose from "./AboutUs/ourPurpose";
import CleanerIMG from "../public/assets/cleaner.jpg";
import Image from "next/image";
import Broom from "../public/assets/icons/broom.png";
import ChooseIMG from "../public/assets/choose-img.jpg";

const ChooseUs = () => {
  return (
    <div className="flex flex-col-reverse bg-emerald-50 items-center justify-center lg:flex-row lg:justify-evenly lg:gap-10 p-10">
      <div className="mx-4 flex flex-col items-center justify-center lg:items-start ">
        <h3 className="text-center lg:text-start text-emerald-500 font-bold pt-5 pb-5">
          Why Choose Us
        </h3>

        <div className="flex flex-col lg:w-[560px] ">
          <h1 className="pb-5 text-2xl text-center font-medium lg:text-4xl lg:text-start">
            Reasons to Choose Brazilian Hands
          </h1>

          <p className="pb-1 text-lg text-justify">
            Your safety comes first—we thoroughly vet our professionals so you
            can trust who’s in your home. Our experienced team delivers
            top-quality services at affordable prices. Support a local Brazilian
            community while enjoying the best in residential and commercial
            care.
          </p>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row lg:w-[657px]">
          <div className="flex mt-10  flex-col justify-start items-start lg:justify-start gap-4">
            <div className="flex  bg-emerald-500 px-4 py-4 items-start justify-start rounded-full">
              <Image src={Broom} alt="broom icon" width={24} height={24} />
            </div>
            <h2 className="font-bold text-2xl">Professional Expertise</h2>
            <p className="text-justify">
              With a team of trained and dedicated professionals, we ensure
              top-tier quality in every service we provide. Whether it's
              cleaning, painting, or garden maintenance, you can trust our
              expertise to deliver outstanding results every time.
            </p>
          </div>
          <div className="flex mt-10  flex-col justify-start items-start lg:justify-start gap-4">
            <div className="flex  bg-emerald-500 px-4 py-4 items-start justify-start rounded-full">
              <Image src={Broom} alt="broom icon" width={24} height={24} />
            </div>
            <h2 className="font-bold text-2xl">Customized Solutions</h2>
            <p className="text-justify">
              We understand that every home and business is unique. That's why
              we offer personalized solutions tailored to your specific needs.
              From flexible scheduling to customized services, we’re here to
              make your life easier.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-10 lg:mx-10 ">
        <Image
          className="rounded-3xl w-[250px] lg:w-[450px] "
          src={ChooseIMG}
          width={0}
          height={0}
          quality={100}
          alt="hero-img"
        />
      </div>
    </div>
    /* <OurPurpose /> */
  );
};

export default ChooseUs;
