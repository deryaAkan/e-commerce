import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import productPageSlider1 from "../assets/productpage/single-product-1-cover-2.png";

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
  const [curr, setCurr] = useState(0);
  const history = useHistory();

  const slides3 = [
    {
      img: productPageSlider1,
    },
    {
      img: productPageSlider1,
    },
  ];

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides3.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides3.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative font-Montserrat bg-[#01B6DD]  ">
      <div
        className="flex transition-transform ease-out duration-500 h-[640px]   "
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides3.map((slide, index) => (
          <div
            key={index}
            className="w-full flex justify-center flex-shrink-0 relative"
          >
            <img
              src={slide.img}
              alt={`Slide ${index}`}
              className="w-full object-cover sm:object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="p-1 text-white/80">
          <ChevronLeft />
        </button>
        <button onClick={next} className="p-1 text-white/80">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
