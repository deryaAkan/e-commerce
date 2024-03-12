import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import HomePageHero1 from "../assets/homepage/shop-hero-1-product-slide-1.png";

const ChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-16 w-16"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
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
    className="h-16 w-16"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
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
  const history = useHistory();

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
    <div className="overflow-hidden relative bg-[#23856D] pt-20 sm:pt-0">
      <div
        className="flex transition-transform ease-out duration-500 h-[640px]"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex flex-shrink-0 relative justify-center"
          >
            <span
              id="slider-container"
              className="flex justify-around flex-row-reverse items-center sm:flex-col-reverse"
            >
              <span id="container-1">
                {" "}
                <img src={slide.onImg} />
              </span>
              <span id="container-2" className="flex justify-center sm:py-10">
                {" "}
                <div className="flex flex-col text-white gap-8 items-start sm:items-center">
                  <h2 className="font-bold text-xl flex justify-start">
                    {slide.dateHero}
                  </h2>
                  <h1 className="font-bold text-left text-[58px] sm:text-center">
                    {slide.title}
                  </h1>
                  <p className="font-normal text-lg text-left w-2/3 flex">
                    {slide.description}
                  </p>
                  <div className="flex gap-3 items-center sm:flex-col">
                    <p className="font-bold text-2xl">{slide.price}</p>
                    <button className="bg-[#2DC071] hover:bg-white cursor-pointer text-white font-bold py-2 px-5 max-w-fit text-xl rounded">
                      {slide.button}
                    </button>
                  </div>
                </div>
              </span>
            </span>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4 text-6xl">
        <button onClick={prev} className="p-1 text-white/80">
          <ChevronLeft />
        </button>
        <button onClick={next} className="p-1 text-white/80">
          <ChevronRight />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0 sm:hidden">
        <div className="flex items-center justify-center gap-[2px]">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
                transition-all w-16 h-2 bg-white 
                ${curr === i ? "pt-1 pb-1" : "bg-opacity-50"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
