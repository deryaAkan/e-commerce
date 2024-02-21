import React from "react";
import ProductImg1 from "../assets/homepage/product-cover-5productPage1.png";

function ProductCard() {
  return (
    <div className="max-w-xs bg-white overflow-hidden m-4">
      <img className="w-full h-auto" src={ProductImg1} alt="Product" />

      <div className="p-4">
        <p className="text-xl  text-gray-700 font-semibold mb-2">
          Graphic Design
        </p>
        <p className="text-sm text-gray-700 mb-2">English Department</p>
        <p className="text-lg  text-gray-700 font-semibold mb-2">$66,55</p>

        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-red-500"></div>
          <div className="w-4 h-4 rounded-full bg-blue-500"></div>
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
          <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
