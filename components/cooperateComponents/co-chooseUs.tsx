import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import ChooseIMG from "../../public/assets/partners.jpg";
import Link from "next/link";
import { BanknoteIcon, Clock, HandCoinsIcon } from "lucide-react";
import { useTranslations } from "next-intl";

const CoChooseUs = () => {
  const t = useTranslations("coChoose");
  return (
    <div className="flex flex-col-reverse bg-blue-100 items-center justify-center lg:flex-row lg:justify-evenly lg:gap-10 p-10">
      <div className="mx-4 flex flex-col items-center justify-center lg:items-start ">
        <h3 className="text-center lg:text-start text-blue-500 font-bold pt-5 pb-5">
          Por que trabalhar conosco?
        </h3>

        <div className="flex flex-col lg:w-[560px] ">
          <h1 className="pb-5 text-2xl text-center font-semibold lg:text-4xl lg:text-start ">
            Razões para trabalhar na BHC
          </h1>
        </div>
        <div className="flex flex-col lg:w-[800px]">
          <div className="flex flex-col gap-8 lg:flex-row ">
            <div className="flex mt-4 flex-col justify-start items-start lg:justify-start gap-4 lg:w-full">
              <div className="flex  bg-blue-500 px-4 py-4 items-start justify-start rounded-full">
                <BanknoteIcon width={24} height={24} color="white" />
              </div>
              <h2 className="font-bold text-2xl">{t("cardTitle1")}</h2>
              <p className="text-justify">{t("cardSubtitle1")}</p>
            </div>
            <div className="flex mt-4  flex-col justify-start items-start lg:justify-start gap-4 w-full">
              <div className="flex  bg-blue-500 px-4 py-4 items-start justify-start rounded-full">
                <Clock width={24} height={24} color="white" />
              </div>
              <h2 className="font-bold text-2xl">{t("cardTitle2")}</h2>
              <p className="text-justify ">{t("cardSubtitle2")}</p>
            </div>
          </div>
          <div className="flex mt-4  flex-col justify-start items-start lg:justify-start gap-4">
            <div className="flex  bg-blue-500 px-4 py-4 items-start justify-start rounded-full ">
              <HandCoinsIcon width={24} height={24} color="white" />
            </div>
            <h2 className="font-bold text-2xl">{t("cardTitle3")}</h2>
            <p className="text-justify lg:w-[48%]">{t("cardSubtitle3")}</p>
          </div>
          <Link href="#apply">
            <Button className="bg-yellow-400 text-black flex justify-center items-center lg:justify-start  hover:bg-yellow-500 px-8 py-6 rounded-full font-semibold lg:text-lg mt-10 lg:hover:-translate-y-2 transition-transform duration-700">
              {t("cta")}
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col mx-10 lg:mx-10  ">
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

export default CoChooseUs;
