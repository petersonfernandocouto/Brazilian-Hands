import React from "react";
import { Button } from "../ui/button";
import CleanerIMG from "../../public/assets/working.jpg";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const CoAbout = () => {
  const t = useTranslations("coAbout");
  return (
    <div className="bg-blue-50 flex flex-col items-center justify-center lg:flex-row lg:justify-evenly lg:gap-10 w-full py-14 mt-10">
      <div className="flex flex-col mx-10 lg:mx-10" id="coabout">
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
        <p className="text-center lg:text-start text-blue-500 font-bold pb-5">
          {t("badge")}
        </p>

        <div className="flex flex-col lg:w-[560px] ">
          <h1 className="pb-5 text-2xl text-center font-semibold lg:text-4xl lg:text-start">
            {t("title")}
          </h1>

          <p className="pb-5 text-justify lg:text-lg">
            {t("subtitle1")}{" "}
            <span className="text-blue-500 font-bold">
              Brazilian Hands Cooperative
            </span>{" "}
            {t("subtitle2")}
          </p>
        </div>
        <Link href="#apply">
          <Button className="bg-yellow-400 text-black flex justify-center items-center lg:justify-start  hover:bg-yellow-500 px-8 py-6 rounded-full font-semibold lg:text-lg lg:hover:-translate-y-2 transition-transform duration-700">
            {t("cta")}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CoAbout;
