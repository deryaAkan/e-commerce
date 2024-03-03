import React from "react";
import ProductCard from "../Components/ProductCard";
import Categories from "../Components/Categories";
import Companies from "../Layouts/Companies";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import imageee from "../assets/homepage/product-cover-5productPage1.png";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 2,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 3,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 4,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 5,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 6,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 7,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 8,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 9,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 10,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 11,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 13,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 12,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex w-3/4 px-12 justify-between flex-wrap items-center py-6 sm:gap-3 sm:justify-center">
        <div className="text-[#252B42] flex items-center flex-grow gap-24 sm:justify-center">
          <h3 className="text-2xl font-bold">Shop</h3>
        </div>
        <p className="text-sm text-gray-300 font-bold ">Home -- Shop</p>
      </div>
      <Categories />
      <div className="flex w-3/4 px-16 justify-between flex-wrap items-center py-6">
        <div className="text-[#252B42] flex items-center flex-grow gap-24">
          <h3 className="text-sm  text-gray-600 font-bold">
            showing all 36 results
          </h3>
        </div>
      </div>
      <div className="flex w-3/4 justify-center flex-wrap py-10 gap-10">
        {products.map((product) => (
          <Link to="/productpage" key={product.id}>
            <ProductCard product={product} />
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
              <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
              <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
              <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
            </div>
          </Link>
        ))}
      </div>
      <Companies />
    </div>
  );
};

export default Shop;
