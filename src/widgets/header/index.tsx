import React from "react";

import AppStore from "AppStore";

type Props = { smoothScroll: any };

const Header = ({ smoothScroll }: Props) => {
  const [paddingClass] = AppStore("paddingClass");

  return (
    <header
      className={`z-50 fixed top-0 right-0 h-24 w-full bg-transparentD text-white flex items-center justify-between ${paddingClass}`}
    >
      <div className="flex items-center space-x-14">
        <a
          onClick={() => {
            smoothScroll("top");
          }}
        >
          <div className="flex items-center cursor-pointer transition-all duration-300">
            <div className={`headerLogo w-24 h-16 md:w-28 md:h-20`} />
          </div>
        </a>
        <div className="hidden md:flex items-center justify-center space-x-6">
          <a
            onClick={() => {
              smoothScroll("top");
            }}
            className="text-white font-semibold cursor-pointer hover:text-amber-500 transition-all duration-500"
          >
            Home
          </a>
          <a
            onClick={() => {
              smoothScroll("product1");
            }}
            className="text-white font-semibold cursor-pointer hover:text-amber-500 transition-all duration-500"
          >
            Frozen Snacks
          </a>
          <a
            onClick={() => {
              smoothScroll("product2");
            }}
            className="text-white font-semibold cursor-pointer hover:text-amber-500 transition-all duration-500"
          >
            Cooking Pastes
          </a>
          <a
            onClick={() => {
              smoothScroll("product3");
            }}
            className="text-white font-semibold cursor-pointer hover:text-amber-500 transition-all duration-500"
          >
            All-Purpose Gravies
          </a>
          <a
            onClick={() => {
              smoothScroll("product4");
            }}
            className="text-white font-semibold cursor-pointer hover:text-amber-500 transition-all duration-500"
          >
            Dips & Spreads
          </a>
          <a
            onClick={() => {
              smoothScroll("about");
            }}
            className="text-white font-semibold cursor-pointer hover:text-amber-500 transition-all duration-500"
          >
            About
          </a>
        </div>
      </div>

      <div className="items-center">
        <div className="flex items-center justify-end">
          <div className={`headerLogoRight w-10 h-12 md:w-12 md:h-16`} />
        </div>
      </div>
    </header>
  );
};

export default Header;
