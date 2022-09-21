import React, { useEffect, useRef } from "react";

import Head from "next/head";
import { Component } from "react";
import { attributes, react as HomeContent } from "../../../content/home.md";

import AppStore from "AppStore";
import Header from "widgets/header";
import MetaHead from "widgets/meta-head";
import Hero from "./hero";
import Product1 from "./product-1";
import Product2 from "./product-2";
import Product3 from "./product-3";
import Product4 from "./product-4";

import bgImg from "assets/images/frozen-snacks-bg-pattern.png";
import img1 from "assets/images/frozen-snacks.png";
import img2 from "assets/images/659x383.png";
import img3 from "assets/images/Website-banner-basegravies.png";
import img4 from "assets/images/Website-Banner_Chutneys.png";
import About from "./about";
import Footer from "widgets/footer";

type Props = {};

const Home = (props: Props) => {
  const [paddingClass] = AppStore("paddingClass");

  let { aboutTitle, aboutText, products } = attributes;

  const topRef: any = useRef(null);
  const aboutRef: any = useRef(null);
  const product1Ref: any = useRef(null);
  const product2Ref: any = useRef(null);
  const product3Ref: any = useRef(null);
  const product4Ref: any = useRef(null);

  const smoothScroll = (destination: string) => {
    console.log("destination", destination);
    switch (destination) {
      case "top":
        {
          window.scrollTo({
            top: topRef.current.offsetTop - 100,
            behavior: "smooth",
          });
        }
        break;
      case "about":
        {
          window.scrollTo({
            top: aboutRef.current.offsetTop - 100,
            behavior: "smooth",
          });
        }
        break;
      case "product1":
        {
          window.scrollTo({
            top: product1Ref.current.offsetTop + 780,
            behavior: "smooth",
          });
        }
        break;

      case "product2":
        {
          window.scrollTo({
            top: product2Ref.current.offsetTop + 780,
            behavior: "smooth",
          });
        }
        break;
      case "product3":
        {
          window.scrollTo({
            top: product3Ref.current.offsetTop + 780,
            behavior: "smooth",
          });
        }
        break;
      case "product4":
        {
          window.scrollTo({
            top: product4Ref.current.offsetTop + 780,
            behavior: "smooth",
          });
        }
        break;
    }
  };

  const reveal = () => {
    var elements = document.querySelectorAll(".holder");

    elements.forEach((element) => {
      var top = element.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        element.classList.add("fadeInUp");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <>
      <div className="fixed h-screen w-full bg-orange-200 overflow-hidden">
        <img
          className="h-full w-full object-cover opacity-30"
          src={bgImg.src}
        />
      </div>
      <MetaHead title="ITC Masterchef" />
      <Header smoothScroll={smoothScroll} />
      <div ref={topRef}>
        <Hero />
      </div>
      <div className={`z-10 relative ${paddingClass}`}>
        <div ref={product1Ref}>
          <Product1
            animateClass="holder"
            smoothScroll={smoothScroll}
            data={products[0]}
            img={img1}
          />
        </div>
        <div ref={product2Ref}>
          <Product2
            animateClass="holder"
            smoothScroll={smoothScroll}
            data={products[1]}
            img={img2}
          />
        </div>
        <div ref={product3Ref}>
          <Product3
            animateClass="holder"
            smoothScroll={smoothScroll}
            data={products[2]}
            img={img3}
          />
        </div>
        <div ref={product4Ref}>
          <Product4
            animateClass="holder"
            smoothScroll={smoothScroll}
            data={products[3]}
            img={img4}
          />
        </div>
      </div>
      <div ref={aboutRef} className={`z-10 relative`}>
        <About
          data={{ title: aboutTitle, body: aboutText }}
          animateClass="holder"
        />
      </div>
      <Footer smoothScroll={smoothScroll} />
    </>
  );
};

export default Home;
