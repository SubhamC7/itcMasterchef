// import styles from "assets/styles/underline.module.css";

import React from "react";
import Link from "next/link";

import FaceBookIcon from "assets/svg/FaceBookIcon";
import InstagramIcon from "assets/svg/InstagramIcon";
import YoutubeIcon from "assets/svg/YoutubeIcon";

import image1 from "assets/images/fork-and-spoon.png";
import image2 from "assets/images/chopping-board.png";
import image3 from "assets/images/salt-shaker.png";

import appStore from "AppStore";

type Props = { smoothScroll?: any };

const Footer = ({ smoothScroll }: Props) => {
  const [paddingClass] = appStore("paddingClass");

  const BrandSection = () => (
    <div className="w-full md:w-60 md:h-72 flex flex-col items-start justify-start text-justify space-y-2 pr-2 xl:tracking-widest">
      <a
        onClick={() => {
          smoothScroll("top");
        }}
        className="tracking-tighter whitespace-nowrap flex justify-start items-center w-fit text-3xl font-bold pt-2 transition-all duration-300 cursor-pointer"
      >
        {/* <div className="w-20 h-12 md:w-28 md:h-20 headerLogo" /> */}
        ITC Masterchef
      </a>
      {/* brand description */}
      <div className="p-4 pl-0">
        <p className="tracking-tight font-thin 2sm:w-40 md:w-full">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
    </div>
  );

  const ServicesSection = () => (
    <div className="w-full md:w-52 p-4 pl-0 space-y-2 flex flex-col xl:tracking-widest">
      <p className="font-medium text-2xl text-themeColor mb-4">Products</p>
      <a
        onClick={() => {
          smoothScroll("product1");
        }}
        className={`w-fit transition-all duration-500 hover:cursor-pointer hover:text-amber-500 whitespace-nowrap`}
      >
        Frozen Snacks
      </a>
      <a
        onClick={() => {
          smoothScroll("product2");
        }}
        className={`w-fit transition-all duration-500 hover:cursor-pointer hover:text-amber-500 whitespace-nowrap`}
      >
        Cooking Pastes
      </a>
      <div className="flex flex-col justify-center space-y-2 md:w-52 font-thin">
        <a
          onClick={() => {
            smoothScroll("product3");
          }}
          className={`w-fit transition-all duration-500 hover:cursor-pointer hover:text-amber-500 whitespace-nowrap`}
        >
          All-Purpose Gravies
        </a>
        <a
          onClick={() => {
            smoothScroll("product4");
          }}
          className={`w-fit transition-all duration-500 hover:cursor-pointer hover:text-amber-500 whitespace-nowrap`}
        >
          Dips & Spreads
        </a>

        {/* <a
          onClick={() => {
            smoothScroll("about");
          }}
          className={`w-fit transition-all duration-500 hover:cursor-pointer hover:text-amber-500 whitespace-nowrap`}
        >
          About
        </a> */}
      </div>
    </div>
  );

  const ContactSection = () => (
    // <div className="w-full sm:w-80 flex flex-col space-y-2 p-4 pl-0">
    <div className=" w-full md:w-56 space-y-2 py-4 flex flex-col xl:tracking-widest">
      <p className="font-medium text-2xl mb-4">Follow Us</p>
      <div className="flex items-center space-x-4 mb-3 font-thin">
        <FaceBookIcon style="fill-blue-500 w-8 h-8 hover:fill-amber-500" />
        <InstagramIcon
          style={"w-8 h-8 fill-fuchsia-600 hover:fill-amber-500"}
        />
        <YoutubeIcon style={"w-8 h-8 fill-red-600 hover:fill-amber-500"} />
      </div>
    </div>
  );

  return (
    <div
      className={`z-10 relative w-full h-fit flex flex-wrap justify-start sm:justify-between text-[#555555] bg-white pt-10 pb-28 ${paddingClass}`}
    >
      <img
        className="hidden sm:block absolute left-48 bottom-0 h-36"
        src={image1.src}
      />
      <img
        className="hidden lg:block absolute right-96 bottom-0 h-36"
        src={image2.src}
      />
      <img className="absolute right-0 bottom-36 h-36" src={image3.src} />
      <div className="w-full h-fit flex flex-col sm:flex-row items-start justify-between">
        <BrandSection />

        <ServicesSection />

        <ContactSection />
      </div>

      {/* <div className="w-full flex flex-col justify-center items-center pt-6 mt-4 space-y-2 border-t border-[#222222]">
        <div className="flex justify-center space-x-10">
          <Link href="#">
            <a className="lg:hover:cursor-pointer">
              <FaceBookIcon style="fill-themeColor w-8 h-8 hover:fill-blue-500" />
            </a>
          </Link>
          <Link href="#">
            <a className="lg:hover:cursor-pointer">
              <InstagramIcon
                style={"fill-themeColor w-8 h-8 hover:fill-fuchsia-600"}
              />
            </a>
          </Link>

          <Link href="#">
            <a className="lg:hover:cursor-pointer">
              <YoutubeIcon
                style={"fill-themeColor w-8 h-8 hover:fill-red-600"}
              />
            </a>
          </Link>
        </div>
        <div className="text-gray-400 justify-center items-center">
          <p className="text-center">
            &copy; Copyright 2022 @{" "}
            <span className="text-white"> WeRepair</span>. All rights reserved.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
