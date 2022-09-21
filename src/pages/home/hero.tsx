import React from "react";

import heroBg from "assets/images/home-banner-img.jpg";
import heroCenter from "assets/images/itc-banner-1.png";

import AppStore from "AppStore";

type Props = {
  // homeAnimation: any;
  smoothScroll?: any;
};

const Hero = ({ smoothScroll }: Props) => {
  return (
    <section
      id="hero"
      className={`w-full h-screen flex justify-center items-center relative z-10`}
    >
      <img
        className="object-cover h-full w-full pointer-events-none"
        src={heroBg.src}
      />
      <img
        className="absolute object-cover w-[20rem] sm:w-[30rem] lg:w-[40rem] pointer-events-none"
        src={heroCenter.src}
      />
    </section>
  );
};

export default Hero;
