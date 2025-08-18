import { ArrowRight } from "lucide-react";
import bgImage from "../Assests/young-tailor-thoughtfully-drawing-with-soap-textile-working-modern-sewing-workshop.jpg";

import { Check } from "lucide-react";

export default function Checkdiscount() {
  return (
    <section className="px-6 py-10">
      <div
        className="w-full h-96 bg-cover bg-bottom  w-full rounded-3xl overflow-hidden bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 flex flex-col md:flex-row items-center justify-end text-white"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Left Content */}
        <div className="p-8 flex flex-col justify-center items-center">
          <span className="bg-white text-red-500 text-xs font-semibold px-4 py-1 rounded-full uppercase">
            Trending Products
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-4">
            Get 10% Discount On All Traditional Lehenga!
          </h2>

          {/* Categories */}
          <div className="flex flex-wrap gap-4 mt-6 text-sm font-medium">
            <span className="flex items-center gap-1 text-white">
              <Check size={16} className="text-white" /> ReadyMades
            </span>

            <span className="flex items-center gap-1">
              <Check size={16} className="text-white" /> UnStitch
            </span>
            <span className="flex items-center gap-1">
              <Check size={16} className="text-white" /> Designer
            </span>
          </div>

          {/* Button */}
          <button className="mt-8 flex items-center gap-2 border border-white px-6 py-2 rounded-full hover:bg-white hover:text-red-500 transition">
            Check Discount <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
