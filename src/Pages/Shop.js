import React, { useState } from "react";
import ProductCard from "../Components/ProductCard";
import Categories from "../Components/Categories";
import Companies from "../Layouts/Companies";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import imageee from "../assets/homepage/product-cover-5productPage1.png";

const Shop = () => {
  const [products, setProducts] = useState([
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
    {
      id: 13,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 14,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 15,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 16,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 17,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 18,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 19,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 20,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 21,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 22,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 23,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 24,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filterOptions = [
    { value: "all", label: "All Products" },
    { value: "category1", label: "Category 1" },
    { value: "category2", label: "Category 2" },
  ];

  const filterProducts = () => {
    if (selectedFilter === "all") {
      return products;
    } else {
      return products.filter((product) => product.category === selectedFilter); // Filter products based on selected category
    }
  };

  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex w-3/4 px-12 justify-between flex-wrap items-center py-6 sm:gap-3 sm:justify-center sm:flex-col">
        <div className="text-[#252B42] flex items-center flex-grow gap-24 sm:justify-center">
          <h3 className="text-2xl font-bold">Shop</h3>
        </div>
        <p className="text-sm text-gray-300 font-bold ">Home -- Shop</p>
      </div>
      <Categories />
      <div className="flex w-3/4 justify-between flex-wrap items-center py-6">
        <div className="text-[#252B42] w-full flex items-center justify-between flex-grow sm:flex-col sm:gap-5">
          <h3 className="text-sm text-gray-600 font-bold">
            Showing all {products.length} results
          </h3>
          <div className="flex items-center gap-2">
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="border-gray-400 border px-2 py-2 rounded-md text-sm text-gray-400 bg-[#FAFAFA]"
            >
              {filterOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <button className="bg-[#23A6F0] text-sm text-white px-6 py-2 rounded-md">
              Filter
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-3/4 justify-center flex-wrap py-10 gap-10">
        {currentProducts.map((product) => (
          <Link to="/productpage" key={product.id}>
            <ProductCard product={product} />
            <div className="flex items-center justify-center gap-1 py-3">
              <div className="w-3 h-3 rounded-full bg-[#23A6F0]"></div>
              <div className="w-3 h-3 rounded-full bg-[#23856D]"></div>
              <div className="w-3 h-3 rounded-full bg-[#E77C40]"></div>
              <div className="w-3 h-3 rounded-full bg-black"></div>
            </div>
          </Link>
        ))}
      </div>
      <div>
        <ul className="flex justify-center space-x-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <li
              key={index}
              className="cursor-pointer"
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </div>
      <Companies />
    </div>
  );
};

export default Shop;
