import React from "react";
import CleanerIMG from "../public/assets/cleaner.jpg";
import CommercialIMG from "../public/assets/services/commercial.jpg";
import DeepIMG from "../public/assets/services/deep.jpg";
import ResidentialIMG from "../public/assets/services/residential.jpg";
import WindowIMG from "../public/assets/services/window.jpg";
import Image from "next/image";
import ServiceCard from "./serviceCard";
import { useInView } from "react-intersection-observer";

function Services() {
  const { ref: residentialRef, inView: residentialInView } = useInView({
    triggerOnce: true,
  });
  const { ref: commercialRef, inView: commercialInView } = useInView({
    triggerOnce: true,
  });
  const { ref: deepRef, inView: deepInView } = useInView({ triggerOnce: true });
  const { ref: WindowCleRef, inView: WindowCleInView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="flex flex-col justify-around items-center w-full bg-emerald-600 bg-cover lg:pt-10 pb-20">
      <div className="flex flex-col items-center w-full  mt-10 mb-10 lg:mb-0 ">
        <p className="text-center items-center lg:text-center w-fit px-4 py-2 rounded-full text-emerald-50 font-bold  ">
          Our Services
        </p>

        <h1 className="text-4xl text-center text-white font-semibold lg:w-[500px] lg:leading-normal lg:text-4xl lg:text-center ">
          Comprehensive Cleaning Services for Your Need
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-10 lg:flex-row px-4 lg:gap-20 lg:mt-12">
          <div
            ref={residentialRef}
            className={`flex flex-col items-center text-white lg:w-[500px] transition-all duration-1000  ${
              residentialInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            } `}
          >
            <Image
              className="rounded-3xl w-[450px] lg:w-[560px] "
              src={ResidentialIMG}
              width={0}
              height={0}
              quality={100}
              alt="hero-img"
            />
            <div className="flex flex-col items-start gap-4 px-4 pt-10 lg:px-0">
              <h3 className="text-xl font-bold">Residential Cleaning</h3>
              <p className="text-justify text-lg">
                Make your home sparkle with our thorough residential cleaning
                services. Whether you need regular maintenance or a one-time
                deep clean, our team ensures your space is always fresh and
                inviting.
              </p>
            </div>
          </div>

          <div
            ref={commercialRef}
            className={`flex flex-col items-center text-white lg:w-[500px] transition-all duration-1000  ${
              commercialInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
            style={{ transitionDelay: commercialInView ? "1s" : "0s" }} // nesta linha eu manipulo o delay. a div irá aparecer após 1 segundo em relação a div que vem antes
          >
            <Image
              className="rounded-3xl w-[450px] lg:w-[560px] "
              src={CommercialIMG}
              width={0}
              height={0}
              quality={100}
              alt="hero-img"
            />
            <div className="flex flex-col gap-4 px-4 pt-10 lg:px-0">
              <h3 className="text-xl font-bold">Commercial Cleaning</h3>
              <p className="text-justify text-lg">
                Keep your business looking its best with our commercial cleaning
                solutions. We provide tailored services to meet the demands of
                busy office spaces, retail shops, and other commercial
                environments.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row px-4 lg:gap-20 lg:mt-12">
          <div
            ref={deepRef}
            className={`flex flex-col items-center text-white lg:w-[500px] transition-all duration-1000  ${
              deepInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
            style={{ transitionDelay: deepInView ? "1s" : "0s" }}
          >
            <Image
              className="rounded-3xl w-[450px] lg:w-[560px] "
              src={DeepIMG}
              width={0}
              height={0}
              quality={100}
              alt="hero-img"
            />
            <div className="flex flex-col items-start gap-4 px-4 pt-10 lg:px-0">
              <h3 className="text-xl font-bold">Deep Cleaning</h3>
              <p className="text-justify text-lg">
                Our deep cleaning service tackles those hard-to-reach places and
                ensures every nook and cranny is spotless. Perfect for
                post-renovation clean-ups or preparing your home for special
                occasions.
              </p>
            </div>
          </div>

          <div
            ref={WindowCleRef}
            className={`flex flex-col items-center text-white lg:w-[500px] transition-all duration-1000  ${
              WindowCleInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
            style={{ transitionDelay: WindowCleInView ? "1.5s" : "0s" }}
          >
            <Image
              className="rounded-3xl w-[450px] lg:w-[560px] "
              src={WindowIMG}
              width={0}
              height={0}
              quality={100}
              alt="hero-img"
            />
            <div className="flex flex-col gap-4 px-4 pt-10 lg:px-0">
              <h3 className="text-xl font-bold">Window Cleaning</h3>
              <p className="text-justify text-lg">
                Bring more light into your home or office with our window
                cleaning service. We make sure your windows are streak-free and
                shining, providing a clear view of the world outside.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
