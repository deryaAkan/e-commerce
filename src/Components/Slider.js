import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import HomePageHero1 from "../assets/homepage/shop-hero-1-product-slide-1.png";
import { Link } from "react-router-dom";

const ChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 hover:h-10 hover:w-10"
    fill="none"
    viewBox="0 0 24 24"
    stroke="white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 hover:h-10 hover:w-10"
    fill="none"
    viewBox="0 0 24 24"
    stroke="white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

export default function Slider({
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const slides = [
    {
      img: HomePageHero1,
      dateHero: "SUMMER 2020",
      title: "NEW COLLECTION",
      description:
        "We know how large objects will act, but things on a small scale.",
      button: "SHOP NOW",
    },
    {
      img: HomePageHero1,
      dateHero: "SUMMER 2020",
      title: "NEW COLLECTION",
      description:
        "We know how large objects will act, but things on a small scale.",
      button: "SHOP NOW",
    },
  ];
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative font-Montserrat bg-[#01B6DD] flex flex-col items-center">
      <div className="flex justify-center w-full">
        <button onClick={prev} className="p-1 text-gray-800 self-center">
          <ChevronLeft />
        </button>
        <div
          className="flex transition-transform ease-out duration-500 h-[640px] overflow-hidden w-full"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex justify-center flex-shrink-0 relative"
            >
              <img
                src={slide.img}
                alt={`Slide ${index}`}
                className="w-full overflow-hidden sm:object-cover sm:w-fit"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-items-start sm:justify-center sm:items-center pl-16 sm:pl-0 ">
                <div className="text-white sm:items-center text-left sm:text-center flex flex-col gap-8 sm:px-0 px-40">
                  <h2 className="font-bold text-xl">{slide.dateHero}</h2>
                  <h1 className="font-bold sm:text-center text-[58px]">
                    {slide.title}
                  </h1>
                  <p className="font-normal text-[20px] w-3/5 sm:w-4/6 sm:text-center">
                    {slide.description}
                  </p>
                  <Link
                    to="/shop"
                    className="py-[15px] px-[10px] flex border-solid border-[1px] bg-green rounded-md w-40 justify-center text-lg font-bold tracking-normal"
                  >
                    SHOP NOW
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={next} className="p-1 text-gray-80self-center">
          <ChevronRight />
        </button>
      </div>
      <div className="flex items-center justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`transition-all w-20 h-3 bg-white ${
              curr === i ? "p-2" : "bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
