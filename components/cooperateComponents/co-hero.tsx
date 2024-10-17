import React from "react";
import { useTranslations } from "next-intl";

import { useInView } from "react-intersection-observer";

const CoHero = () => {
  const t = useTranslations("coHero");
  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: false,
  });

  return (
    <div
      id="hero"
      className="bg-cover flex flex-col items-center lg:flex-row lg:justify-evenly lg:items-end w-full"
    >
      <div className="flex flex-col justify-evenly items-center w-full">
        <div className="flex flex-col items-center lg:items-center mt-1 lg:mt-20 lg:mb-8">
          <p className="text-center lg:text-start bg-blue-100 w-fit px-4 py-2 rounded-full text-blue-600 font-bold mb-5">
            {t("badge")}
          </p>

          <h1 className="text-3xl text-center px-1 lg:px-0 font-bold lg:text-[60px] lg:w-[800px] lg:leading-none lg:text-center">
            {t("title")}
          </h1>
          <p className="mt-5 text-base lg:text-lg px-4 lg:px-0 text-center lg:w-[800px]">
            {t("subtitle")}
          </p>
        </div>
        <div className="flex mt-4 mb-6 gap-4">
          <a
            href="#coabout"
            className="flex bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-3 lg:px-7 lg:py-4 lg:text-lg h-fit rounded-lg"
          >
            {t("cta1")}
          </a>
          <a
            href="#apply"
            className="flex bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold px-4 py-3 lg:px-7 lg:py-4 lg:text-lg h-fit rounded-lg"
          >
            {t("cta2")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoHero;
