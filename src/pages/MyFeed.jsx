import React from "react";

const categories = [
  { name: "MY FEED", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
  { name: "FROCKS", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
  { name: "TWIN SETS", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
  { name: "TOPS", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
  { name: "ETHNIC WEAR", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
  { name: "BOTTOM", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
  { name: "WINTERWEAR", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
  { name: "LOUNGEWEAR", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
  { name: "INFANTS", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
  { name: "FOOTWEAR", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
  { name: "ACCESSORIES", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
];

export default function MyFeed() {
  return (
    <section className="bg-gray-50 py-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Nav */}
        <div className="flex justify-center space-x-10 text-gray-500 font-medium mb-6">
          <span className="hover:text-black cursor-pointer">WOMEN</span>
          <span className="hover:text-black cursor-pointer">MEN</span>
          <span className="text-black border-b-2 border-black cursor-pointer">GIRLS</span>
          <span className="hover:text-black cursor-pointer">BOYS</span>
        </div>

        {/* Category Circles */}
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-transparent hover:border-green-500 flex items-center justify-center">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-700 hover:text-black">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
