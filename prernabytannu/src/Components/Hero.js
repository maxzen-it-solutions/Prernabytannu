import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "https://i.ibb.co/7JfqXxB/fashion1.jpg",
  "https://i.ibb.co/7nJZ9LQ/fashion2.jpg",
  "https://i.ibb.co/8cL7b1s/fashion3.jpg",
  "https://i.ibb.co/9qP3ZJf/fashion4.jpg",
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
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-10">
      {/* Main container with sliding track */}
      <div className="relative rounded-3xl h-[500px] overflow-hidden shadow-xl">
        <motion.div
          className="flex h-full"
          animate={{ x: `-${activeIndex * 100}%` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="min-w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              {/* Overlay */}
              <div className="w-full h-full bg-gradient-to-t from-black/70 to-transparent flex items-center p-10 text-white">
                <div className="max-w-lg">
                  <p className="text-pink-300 uppercase tracking-[4px] text-sm mb-2">
                    Perfect for Summer Evenings
                  </p>
                  <h1 className="text-5xl font-bold leading-tight mb-4">
                    Casual and Stylish for <br /> All Seasons
                  </h1>
                  <p className="text-sm mb-6">
                    Starting From{" "}
                    <span className="text-pink-400 font-bold">$129</span>
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
      <div className="flex flex-row gap-4 overflow-y-auto h-[500px] scrollbar-thin scrollbar-thumb-gray-300">
        {images.map((img, i) => (
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
              className="w-[150px] h-[150px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
