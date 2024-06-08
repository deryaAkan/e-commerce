import React, { useEffect, useState } from "react";
import Companies from "../Layouts/Companies";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store/actions/globalActions";
import {
  getProducts,
  getProductsByFilter,
  getSortedProducts,
  getProductsByCategory,
} from "../store/actions/productActions";
import Filter from "../Components/Filter";

const Shop = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dispatch = useDispatch();
  const categoriesData = useSelector((store) => store.global.categories);
  const sortByRating = categoriesData.sort((a, b) => b.rating - a.rating);

  const products = useSelector((store) => store.product.productList);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleFilterChange = (filterParams) => {
    dispatch(getProductsByFilter(filterParams));
    console.log("FILTER PARAMS THING", filterParams);
  };

  const handleSortChange = (sortParams) => {
    dispatch(getSortedProducts(sortParams, selectedCategory));
    console.log("SORTEEED", sortParams);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    dispatch(getProductsByCategory(categoryId));
  };

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      dispatch(getCategories());
      dispatch(getProducts());
      setLoading(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const totalPages = Math.ceil(products?.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const displayedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  if (loading) {
    return (
      <div className="relative py-40 flex items-center justify-center">
        <div className="absolute bg-white bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
          <div className="flex items-center">
            <span className="text-3xl">Loading</span>
            <svg
              className="animate-spin h-8 w-8 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex w-3/4 px-4 justify-between flex-wrap items-center py-6 sm:gap-3 sm:justify-center sm:flex-col">
        <div className="text-[#252B42] flex items-center gap-24 sm:justify-center">
          <h3 className="text-2xl font-bold">Shop</h3>
        </div>
        <div className="flex text-sm text-gray-700 font-bold">
          {" "}
          <Link to="/" className="text-gray-400">
            Home
          </Link>{" "}
          <svg
            className="h-5 w-5 text-gray-900"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            {" "}
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
              transform="rotate(-90 10 10)"
            />
          </svg>
          <Link to="/shop"> Shop </Link>
        </div>
      </div>
      <span
        className="flex flex-row flex-wrap justify-center gap-4 sm:flex-col sm:items-center"
        id="box-cards"
      >
        {sortByRating.slice(0, 4).map((box, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(box.id)}
            className="relative shadow-lg sm:justify-center shadow-gray flex items-center sm:flex-col sm:w-fit cursor-pointer"
          >
            <img className="object-cover w-[250px] h-[250px]" src={box.img} />
            <button
              id="center"
              className="absolute t-1/2 w-full text-center text-lg sm:text-xl text-white font-bold"
            >
              <p className="drop-shadow-4xl">{box.title}</p>
              <p className="drop-shadow-4xl">Rating : {box.rating}</p>
              <p className="drop-shadow-4xl">
                {box.gender === "e" ? "Erkek" : "Kadın"}
              </p>
            </button>
          </div>
        ))}
      </span>

      <div className="flex w-3/4 justify-between flex-wrap items-center py-6">
        <div className="text-[#252B42] w-full px-4 flex items-center justify-between flex-grow sm:flex-col sm:gap-5">
          <h3 className="text-sm text-gray-400 font-bold">
            Showing all {products?.length} results
          </h3>
          <div className="flex items-center gap-10">
            <select
              defaultValue="popularity"
              onChange={(e) => handleSortChange(e.target.value)}
              className="text-sm max-w-fit text-[#737373] shadow-sm py-2 px-4"
            >
              <option value="">Sort</option>
              <option value="price:asc">Price low to high</option>
              <option value="price:desc">Price high to low</option>
              <option value="rating:asc">Rating low to high</option>
              <option value="rating:desc">Rating high to low</option>
            </select>
            <form>
              <input
                className="text-sm max-w-fit text-[#737373] shadow-sm py-2 px-4"
                placeholder="search"
                onChange={(e) => handleFilterChange(e.target.value)}
              ></input>
            </form>
          </div>
          <Filter />
        </div>
      </div>
      <div className="flex w-3/4 justify-center flex-wrap py-10 gap-10">
        {displayedProducts.map((product) => (
          <Link to="/products" key={product.id}>
            <div className="flex flex-col max-w-xs bg-white overflow-hidden font-bold gap-5">
              <img src={product.images[0].url} alt="Ürün Resmi" />
              <div className="flex flex-col gap-3 text-sm">
                <h3 className="text-base text-[#252B42]">{product.name}</h3>
                <p className="text-[#737373]">{product.category}</p>
                <div className="flex justify-center font-bold text-[#BDBDBD] gap-1">
                  <span>{product.price}</span>
                  <span>{product.rating}</span>
                  <span>{product.sell_count}</span>
                  <span>{product.stock}</span>
                  <span>{product.store_id}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1 py-3 w-3 h-3 rounded-full">
              <div className="bg-[#23A6F0]"></div>
              <div className="bg-[#23856"></div>
              <div className="bg-[#E77C40]"></div>
              <div className="bg-black"></div>
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
