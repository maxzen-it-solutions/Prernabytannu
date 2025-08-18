import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import image1 from "../Assests/image13.jpg";
import image2 from "../Assests/image8.jpg";
import image3 from "../Assests/image15.jpg";
import image4 from "../Assests/image6.jpg";

export default function Shoppingeveryday() {
  const products = [
    { id: 1, name: "Slik Green Lehenga", price: "₹ 4990", discount: "8% Off", image: image1,context:"Step into elegance with our Silk Green Lehenga, designed for the woman who loves grace with a touch of glamour.Flowing Structure for picture-perfect Turns.Finished with a designer Banarasi blouse that exudes royal elegance. Intricate hand-finished detailing that tells a story." },
    { id: 2, name: "Pink Pattu Lehenga", price: "₹ 4999", discount: "13% Off", image: image2,context:"Grace wrapped in silk.This stunning pink Pattu lehenga is a blend of timeless tradition and modern grace. Vibrant pink hue make it a perfect choice for weddings, festivals, and all things celebratory.Paired with a contrast blouse and intricate jewelry, this look is every bit regal and radiant." },
    { id: 3, name: "Dola Slik Lehenga", price: "₹ 4999", discount: "15% Off", image: image3,context:"Draped in the timeless beauty of Ikkat artistry, this lehenga celebrates heritage with a refreshing modern flair. Every detail whispers elegance, every print tells a story - making it more than just an outfit, but a masterpiece you wear." },
    { id: 4, name: "Dola Slik Lehenga", price: "₹ 4999", discount: "18% Off", image: image4,context:"Dola Silk Lehenga Featuring intricate Maggam Work detailing with cutdana, pearl and sequence with silver touch at the bottom of lehenga that adds a touch of elegance and tradition.Perfect for Wedding & Celebration." },
  ];

  return (
    <section className="px-10 py-12 bg-pink-50">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <p className="text-pink-500 uppercase font-bold tracking-wide text-sm">Timeless Traditional Lehenga</p>
          <h2 className="text-3xl font-bold">Indian Ethnic Wear</h2>
        </div>
        <button className="mt-4 md:mt-0 flex items-center gap-2 border border-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition">
          More Collection <ArrowRight size={16} />
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-2xl transition p-4 flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }} // staggered effect
            whileHover={{ scale: 1.05 }} // card lift
            whileTap={{ scale: 0.95 }}   // card press
          >
            <div className="relative">
              {/* Animated Image */}
              <motion.img
                src={product.image}
                alt={product.name}
                className="rounded-lg w-full h-88 object-cover"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              />
              {/* Discount Badge */}
              <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full">
                {product.discount}
              </span>
            </div>
            {/* Product Info */}
            <div className="mt-4 flex-1">
              <p className="text-lg text-gray-600 font-semibold">Price: {product.price}</p>
              <p className="text-gray-600 font-semibold">Name: {product.name}</p>
              <p className="text-black font-semibold text-sm">{product.context}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
