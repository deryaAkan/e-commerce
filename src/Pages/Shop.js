import React from "react";
import ProductCard from "../Components/ProductCard";

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
        <div className="flex gap-2"></div>
      </div>
      <div className="CommonThings flex flex-wrap gap-10">
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
    </div>
  );
};

export default Shop;
