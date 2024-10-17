import Image from "next/image";
import React from "react";
import LogoWhite from "../assets/logo/logo_w.png";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-emerald-600 w-full h-full flex flex-col justify-center items-start pl-6 gap-6 lg:justify-around lg:flex-row p-10 lg:px-6 lg:py-6 text-white lg:gap-12 lg:pt-10 lg:pb-20">
      <div className="flex flex-col gap-4 justify-center items-center lg:items-center  ">
        <Image
          className="-ml-10"
          src={LogoWhite}
          alt="logo"
          width={100}
          height={100}
        />
        <p className="text-white text-start  w-[320px]">
          Affordable cleaning, garden care, beauty, and repair services in
          Ireland. Professionalism with a Brazilian touch.
        </p>
      </div>
      <div className="flex flex-col ">
        <h3 className="font-bold text-xl">Services</h3>
        <ul className="flex flex-col gap-2 mt-6">
          <li className="hover:text-yellow-400 font-semibold hover:transition duration-150">
            <Link href="#services"> Residential Cleaning</Link>
          </li>
          <li className="hover:text-yellow-400 font-semibold hover:transition duration-150">
            <Link href="#services"> Commercial Cleaning</Link>
          </li>
          <li className="hover:text-yellow-400 font-semibold hover:transition duration-150">
            <Link href="#services"> Deep Cleaning</Link>
          </li>
          <li className="hover:text-yellow-400 font-semibold hover:transition duration-150">
            <Link href="#services"> Window Cleaning</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col ">
        <h3 className="font-bold text-xl">Contact Info</h3>
        <ul className="flex flex-col gap-2 mt-6">
          <li className="hover:text-yellow-400 font-semibold hover:transition duration-150 ">
            <a
              href="https://api.whatsapp.com/send?phone=353833471038&text=Hello,%20I%20came%20from%20your%20website%20and%20I'd%20like%20to%20schedule%20a%20service!%0A"
              target="_blank"
            >
              +353 83 347 1038
            </a>
          </li>
          <li className="hover:text-yellow-400 font-semibold hover:transition duration-150 ">
            brazilianhandscooperative@gmail.com
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold text-xl">Follow us</h3>
        <ul className="flex  gap-4 mt-6">
          {/* TODO: add social links  */}
          <a
            href="https://WA.me/353833471038"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>
              <FaWhatsapp size={32} className="hover:text-yellow-300" />
            </li>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61563594075044"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>
              <FaInstagram size={32} className="hover:text-yellow-300" />
            </li>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61563594075044"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>
              <FaLinkedin size={32} className="hover:text-yellow-300" />
            </li>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61563594075044"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>
              <FaFacebookF size={32} className="hover:text-yellow-300" />
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
