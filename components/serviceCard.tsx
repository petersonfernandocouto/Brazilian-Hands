import Image from "next/image";
import React from "react";

interface Props {
  imgSrc: string;
  content: string;
}

const ServiceCard = ({ imgSrc, content }: Props) => {
  return (
    <div className="flex flex-col items-center text-white lg:w-[500px]">
      <Image
        className="rounded-3xl w-[450px] lg:w-[560px] "
        src={imgSrc}
        width={0}
        height={0}
        quality={100}
        alt="hero-img"
      />
      <div className="flex flex-col gap-4 px-4 pt-10 lg:px-0">
        <h3 className="text-xl font-bold">Commercial Cleaning</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
