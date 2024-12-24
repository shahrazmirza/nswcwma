"use client";
import React, { useState } from "react";
import Image from "next/image";

function DubboMultiCulturalGala2024Photos() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const totalSlides = 42;

  const goToSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides ? 1 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? totalSlides : prev - 1));
  };

  return (
    <div className="">
      <h1
        data-translate
        className="capitalize md:text-3xl text-xl md:font-medium font-semibold md:tracking-wide text-white pb-10"
      >
        Gallery
      </h1>
      <div className="carousel md:w-[600px] w-80 h-[600px] relative overflow-hidden">
        {Array.from({ length: totalSlides }, (_, i) => (
          <div
            key={i}
            className={`carousel-item absolute top-0 left-0 transition-opacity duration-500 ease-in-out ${
              currentSlide === i + 1 ? "opacity-100" : "opacity-0"
            }`}
            style={{
              width: "100%",
              height: "100%",
              display: currentSlide === i + 1 ? "block" : "none",
            }}
          >
            <Image
              src={`/assets/images/DubboMultiCulturalGala2024/${i + 1}.jpeg`}
              width={600}
              height={600}
              className=""
              alt={`Multicultural Gala Image ${i + 1}`}
            />
            <div className="absolute left-5 right-5 md:top-52 top-28 flex -translate-y-1/2 transform justify-between">
              <button onClick={prevSlide} className="btn btn-circle opacity-75">
                ❮
              </button>
              <button onClick={nextSlide} className="btn btn-circle opacity-75">
                ❯
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DubboMultiCulturalGala2024Photos;
