import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import image1 from "../Assests/image13.jpg";

export default function Allproducts() {
  const products = [
    { id: 1, name: "Designer Lehenga", price: 2500, category: "Designer", image: image1 },
    { id: 2, name: "Readymade Kurti", price: 1200, category: "Readymade", image: "https://via.placeholder.com/300" },
    { id: 3, name: "Unstitched Suit", price: 1800, category: "Unstitched", image: "https://via.placeholder.com/300" },
    { id: 4, name: "Readymade Saree", price: 2000, category: "Readymade", image: "https://via.placeholder.com/300" },
    { id: 5, name: "Designer Gown", price: 3500, category: "Designer", image: "https://via.placeholder.com/300" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleBuyNow = (product) => {
    alert(`You clicked Buy Now for ${product.name} - ₹${product.price}`);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {["All", "Readymade", "Unstitched", "Designer"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
              ${selectedCategory === cat ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-pink-100"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow p-4 flex flex-col">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover rounded-xl mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">₹{product.price}</p>

            <button
              onClick={() => handleBuyNow(product)}
              className="mt-auto flex items-center justify-center gap-2 bg-green-500 text-white py-2 px-4 rounded-xl hover:bg-green-600 transition"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
