import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getProductsByFilter,
  getSortedProducts,
  setActivePage,
} from "../store/actions/productActions";
import Companies from "../Layouts/Companies";
import { Pagination } from "../Components/Pagination";
import Categories from "../Components/ShopPage/Categories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faList } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.product.productList);
  const productPerPage = useSelector((store) => store.product.productPerPage);
  const activePage = useSelector((store) => store.product.activePage);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(15);
  const totalPages = Math.ceil(products?.length / productPerPage);

  const onPageChange = (page) => {
    dispatch(setActivePage(page));
  };

  const handleFilterChange = (filterParams) => {
    dispatch(getProductsByFilter(filterParams));
  };

  const handleSortChange = (sortParams) => {
    dispatch(getSortedProducts(sortParams, selectedCategory));
  };

  useEffect(() => {
    setLoading(true);
    dispatch(getProducts(limit, (currentPage - 1) * limit)).finally(() => {
      setLoading(false);
    });
  }, [dispatch, limit, currentPage]);

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
          <Link to="/" className="text-gray-400">
            Home
          </Link>
          <svg
            className="h-5 w-5 text-gray-900"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
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
      <Categories />
      <div className="flex w-3/4 justify-between flex-wrap items-center py-6">
        <div className="text-[#252B42] w-full flex-wrap px-4 flex items-center justify-between flex-grow sm:flex-col sm:gap-5">
          <h3 className="text-sm text-gray-400 font-bold">
            Showing all {products?.length} results
          </h3>
          <div className="flex flex-wrap items-center gap-10 sm:justify-center">
            <div className="flex items-center gap-7">
              <FontAwesomeIcon className="h-6 w-6" icon={faBorderAll} />
              <FontAwesomeIcon className="h-6 w-6" icon={faList} />
            </div>
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
            <button className="bg-[#23A6F0] text-sm text-white px-6 py-2">
              Filter
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-3/4 justify-center flex-wrap py-10 gap-10">
        {products?.map((product) => (
          <Link to={`/product/${product.id}/${product.name}`} key={product.id}>
            <div className="flex flex-col max-w-xs bg-white overflow-hidden font-bold gap-5">
              <img src={product.images[0].url} alt="Ürün Resmi" />
              <div className="flex flex-col gap-3 text-sm">
                <h3 className="text-base text-[#252B42]">{product.name}</h3>
                <div className="flex flex-col justify-center font-bold text-[#BDBDBD] gap-1">
                  <span className="text-lg text-green-600">
                    {product.price}$
                  </span>
                  <div className="flex justify-center gap-7">
                    <span> rating: {product.rating}/5</span>
                    <span> stock: {product.stock}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>{" "}
      <span id="pagination" className="sm:py-10 text-black">
        <Pagination
          totalPages={totalPages}
          currentPage={activePage}
          onPageChange={onPageChange}
        />
      </span>
      <Companies />
    </div>
  );
};

export default Shop;
