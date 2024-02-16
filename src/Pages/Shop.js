import React from "react";
import ProductCard from "../Components/ProductCard";
import Categories from "../Components/Categories";
import shopSvg1 from '../assets/shoppage/fa-brands-1shopppsvg.svg'
import shopSvg2 from '../assets/shoppage/fa-brands-2shopppsvg.svg'
import shopSvg3 from '../assets/shoppage/fa-brands-3shopppsvg.svg'
import shopSvg4 from '../assets/shoppage/fa-brands-4shopppsvg.svg'
import shopSvg5 from '../assets/shoppage/fa-brands-5shopppsvg.svg'
import shopSvg6 from '../assets/shoppage/fa-brands-6shopppsvg.svg'

const Shop = () => {
  const products = Array.from({ length: 36 }, (_, index) => ({
    id: index + 1,
    name: `Ürün ${index + 1}`,
    category: "Graphic Design",
    department: "English Department",
    price: Math.floor(Math.random() * 100) + 10,
    color: ["red", "blue", "green", "yellow"][Math.floor(Math.random() * 4)],
  }));

  return (
    <div className="flex flex-col justify-center items-center w-full">
     
      <div className="flex w-4/5 justify-between flex-wrap items-center py-6">
        <div className="text-[#252B42] flex items-center flex-grow gap-24">
          <h3 className="text-2xl font-bold">Shop</h3>
        </div>
        <p className="text-sm text-gray-300 font-bold ">Home -- Shop</p>
      </div>
      <Categories/>
      <div className="flex w-4/5 justify-between flex-wrap items-center py-6">
        <div className="text-[#252B42] flex items-center flex-grow gap-24">
          <h3 className="text-sm  text-gray-600 font-bold">showing all 36 results</h3>
        </div>
      </div>
      <div className="CommonThings flex flex-wrap gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            category={product.category}
            department={product.department}
            price={product.price}
            color={product.color}
          />
        ))}
      </div>
      <div className="flex w-full justify-center">
      <div className="flex w-4/5 justify-between">
          <img src={shopSvg1}></img>
          <img src={shopSvg2}></img>
          <img src={shopSvg3}></img>
          <img src={shopSvg4}></img>
          <img src={shopSvg5}></img>
          <img src={shopSvg6}></img>
      </div>
      </div>
    </div>
  );
};

export default Shop;
