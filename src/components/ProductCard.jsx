// src/components/ProductCard.jsx
import React from "react";

const ProductCard = ({ image, category, name, price }) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-35 w-50 rounded overflow-hidden">
        <img
          alt={name}
          className="rounded-4xl object-center w-full h-full block"
          src={image}
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {category}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {name}
        </h2>
        <p className="mt-1">₹{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
