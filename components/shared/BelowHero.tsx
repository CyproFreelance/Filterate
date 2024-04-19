"use client";
import React, { useState } from "react";
import Section from "../widgets/Section";

const BelowHero = () => {
  const [index, setIndex] = useState(0);

  const handleRightClick = () => {
    setIndex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : 0));
  };

  const handleLeftClick = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 3));
  };

  return (
    <Section id="belowhero" className={`pt-[12rem] mt-[6.25rem]`}>
      <main className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-24 w-full relative">
        <div className="content text-center lg:text-left mb-8 lg:mb-0 lg:mr-12 lg:w-1/2">
          <div className="heading">
            <h1 className="h1 mb-6 font-bold leading-none">
              Find Your Perfect <br /> Editor Now
            </h1>
            <p className="mb-6 lg:mb-8">
              The landing page should be the first thing that pops up after the
              logo intro to the website when most users click on it. Things it
              should contain is a signup/login not mandatory browsing is
              optional by pressing a skip button.
            </p>
            <button className="border-none bg-[#ffcd0aff] text-n-8 uppercase py-4 px-10 rounded-full cursor-pointer transition-transform hover:scale-0.9">
              View Examples
            </button>
          </div>
        </div>
        <div className="wrapper overflow-hidden lg:w-[50%] md:w-[60%] sm:w-[70%] xl:w-[40%] max-w-full relative">
          <div
            className="images flex transition-transform ease-in-out w-full lg:w-full sm:w-1/2"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            <div
              className="image bg-cover"
              style={{
                backgroundImage:
                  "url('https://vikram-hegde.github.io/ui-animation/images/image1.png')",
              }}
            ></div>
            <div
              className="image bg-cover"
              style={{
                backgroundImage:
                  "url('https://vikram-hegde.github.io/ui-animation/images/image2.png')",
              }}
            ></div>
            <div
              className="image bg-cover"
              style={{
                backgroundImage:
                  "url('https://vikram-hegde.github.io/ui-animation/images/image3.png')",
              }}
            ></div>
            <div
              className="image bg-cover"
              style={{
                backgroundImage:
                  "url('https://vikram-hegde.github.io/ui-animation/images/image4.png')",
              }}
            ></div>
          </div>
          <div className="navigation justify-between w-full absolute bottom-0 xs:bottom-1/2 sm:top-1/2 md:bottom-1/2 lg:top-1/2 xl:bottom-1/2 transform -translate-y-1/2 flex gap-5">
            <div
              className="left flex items-center justify-center w-16 h-16 border bg-n-8 border-gray-700 rounded-full cursor-pointer hover:bg-gray-700 hover:text-white transition-transform"
              onClick={handleLeftClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-left"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
            </div>
            <div
              className="right flex items-center justify-center w-16 h-16 border border-gray-700 bg-n-8 rounded-full cursor-pointer hover:bg-gray-700 hover:text-white transition-transform"
              onClick={handleRightClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-right"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none" />
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </div>
          </div>
        </div>
      </main>
    </Section>
  );
};

export default BelowHero;
