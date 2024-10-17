import React from "react";
import CommercialIMG from "../../public/assets/services/commercial.jpg";
import DeepIMG from "../../public/assets/services/deep.jpg";
import ResidentialIMG from "../../public/assets/services/residential.jpg";
import WindowIMG from "../../public/assets/services/window.jpg";
import Image from "next/image";

function CoServices() {
  return (
    <div className="flex flex-col justify-around items-center w-full bg-service bg-cover lg:pt-10 pb-20">
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
          <div className="flex flex-col items-center text-white lg:w-[500px]">
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
              <p>
                Justo porta nunc donec at faucibus ornare quam integer lectus.
                Eu at dignissim at proin sit faucibus elementum mi. Interdum
                viverra faucibus dui amet habitasse. Feugiat est et dui
                tristique vel. Facilisis interdum ut varius velit a amet arcu
                faucibus. Consectetur.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-white lg:w-[500px]">
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
              <p>
                Justo porta nunc donec at faucibus ornare quam integer lectus.
                Eu at dignissim at proin sit faucibus elementum mi. Interdum
                viverra faucibus dui amet habitasse. Feugiat est et dui
                tristique vel. Facilisis interdum ut varius velit a amet arcu
                faucibus. Consectetur.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row px-4 lg:gap-20 lg:mt-12">
          <div className="flex flex-col items-center text-white lg:w-[500px]">
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
              <p>
                Justo porta nunc donec at faucibus ornare quam integer lectus.
                Eu at dignissim at proin sit faucibus elementum mi. Interdum
                viverra faucibus dui amet habitasse. Feugiat est et dui
                tristique vel. Facilisis interdum ut varius velit a amet arcu
                faucibus. Consectetur.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-white lg:w-[500px]">
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
              <p>
                Justo porta nunc donec at faucibus ornare quam integer lectus.
                Eu at dignissim at proin sit faucibus elementum mi. Interdum
                viverra faucibus dui amet habitasse. Feugiat est et dui
                tristique vel. Facilisis interdum ut varius velit a amet arcu
                faucibus. Consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoServices;
