import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import image1 from "../Assests/image1jpg.jpg"
import image2 from "../Assests/image10.jpg"
import image3 from "../Assests/image14.jpg"
import image4 from "../Assests/image16.jpg"


const imagesone = [
  image1,
  image2,
  image3,
  image4,
];

const imagestwo = [
  image1,
  image2,
  image3,

];
export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % imagesone.length);
  };

  // const handlePrev = () => {
  //   setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  // };

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-10">
      {/* Main container with sliding track */}
      <div className="relative rounded-3xl h-[500px] overflow-hidden shadow-xl">
        <motion.div
          className="flex h-full"
          animate={{ x: `-${activeIndex * 100}%` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {imagesone.map((img, i) => (
            <div
              key={i}
              className="min-w-full h-full bg-contain"
              style={{ backgroundImage: `url(${img})` }}
            >
              {/* Overlay */}
              <div className="w-full h-full bg-gradient-to-t from-black/70 to-transparent flex items-center p-10 text-white">
                <div className="max-w-lg flex flex-col  md:mt-44">
                  <p className="text-white uppercase font-semibold tracking-[4px] text-sm">
                    Timeless Traditional Lehenga
                  </p>
                  <h1 className="text-3xl w-full font-bold leading-tight mb-4" >
                    Traditional Lehenga Style
                  </h1>
                  <p className="text-sm mb-6">
                    Starting From{" "}
                    <span className="text-white font-bold">₹ 4999</span>
                  </p>
                  <button className="px-6 py-3 border border-white rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition w-fit">
                    SHOP NOW <span>↗</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Thumbnails */}
      <div className="flex flex-row gap-4 overflow-y-auto w-[600] h-[500px] scrollbar-thin scrollbar-thumb-gray-300">
        
        {imagestwo.map((img, i) => (
          
          <div
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`cursor-pointer rounded-2xl overflow-hidden border-2 transition ${
              activeIndex === i ? "border-pink-500" : "border-transparent"
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${i}`}
              className="w-[550px] h-[500px] object-cover "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
