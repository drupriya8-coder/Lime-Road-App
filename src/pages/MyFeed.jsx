import React, { useState } from "react";

const categories = [
  // { name: "MY FEED", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
  { name: "KURTAS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKMSqDHiQLJ3IXyOUhYcgRE0sVq3na1jlSQ&s" },
  { name: "TOPS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTte9uTx7b3L8eWAUHMUpszEMxChcrlnIm4iA&s" },
  { name: "SAREES", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSthbLtv8kGIuD7lQqVVNttxZYg2lNBWuLJqg&s" },
  { name: "SUITS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLqqj3r0TgasFMud_sSWYm4EAdsop6ukiQxA&s" },
  { name: "BAGS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfbS4GtFu417luMwEGk3gYXzpci-jEvoSbLA&s" },
  { name: "FOOTWEAR", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbbFdgirkTPb-8U40ts5zq792949noxT2aRg&s" }
];

export default function MyFeed() {
  const [activeTab, setActiveTab] = useState("GIRLS"); // default active tab

  return (
    <section className="bg-gray-50 py-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Nav */}
        <div className="flex justify-center space-x-10 text-gray-500 font-medium mb-6">
          {["WOMEN", "MEN", "GIRLS", "BOYS"].map((tab) => (
            <span
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer hover:text-black ${activeTab === tab
                ? "text-black border-b-2 border-black"
                : ""
                }`}
            >
              {tab}
            </span>
          ))}
        </div>


        <div className="flex justify-center gap-6">

          <div className="flex flex-col items-center text-center cursor-pointer">
            <div className="w-15 h-15 text-black text-3xl font-bold rounded-full overflow-hidden border-2 bg-fuchsia-200 border-transparent hover:border-green-500 flex items-center justify-center">
              MY
            </div>
            <span className="mt-2 text-sm font-medium text-gray-700 hover:text-black">
              MY FEED
            </span>
          </div>

          <div class=" min-h-0 w-0.5 bg-gray-500">

          </div>

          {/* Category Circles */}
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center cursor-pointer"
              >
                <div className="w-15 h-15 rounded-full overflow-hidden border-2 border-transparent hover:border-green-500 flex items-center justify-center">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-center"
                  />
                </div>
                <span className="mt-2 text-sm font-medium text-gray-700 hover:text-black">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
