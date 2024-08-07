import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../store/actions/globalActions";
import { getProductsByCategory } from "../store/actions/productActions";

export default function Dropdown() {
  const [menuOpen, setMenuOpen] = useState(false);
  const categoriesData = useSelector((store) => store.global.categories);
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const categoryHandleClick = (categoryId) => {
    dispatch(getProductsByCategory(categoryId));
  };

  const closeMenu = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  return (
    <div className="relative flex gap-3 sm:flex-col" ref={dropdownRef}>
      <Link to="/">Home</Link>
      <div className="relative flex text-left">
        <Link to="/shop">
          <button
            className="inline-flex w-full justify-center gap-x-1.5 text-sm text-gray-900"
            id="menu-button"
            aria-expanded={menuOpen}
            aria-haspopup="true"
          >
            Shop
            <svg
              onClick={toggleMenu}
              className="h-5 w-5 text-gray-900"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </Link>
        {menuOpen && (
          <div
            className="flex items-center justify-center absolute left-0 z-10 mt-7 w-56 origin-top-right divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="flex">
              <div className="WOMEN flex flex-col px-2">
                <Link
                  onClick={toggleMenu}
                  to="/shop/kadin"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  WOMEN
                </Link>
                <hr className="border-gray-200"></hr>
                {categoriesData?.map(
                  (box, index) =>
                    box.gender === "k" && (
                      <Link
                        onClick={() => categoryHandleClick(box.id)}
                        key={index}
                        to={`/shop/${box.gender}/${box.title.toLowerCase()}`}
                        className="text-gray-400 block px-4 py-2 text-sm hover:text-[#00A1C1]"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                      >
                        {box.title}
                      </Link>
                    )
                )}
              </div>
              <div className="MEN flex flex-col">
                <Link
                  onClick={toggleMenu}
                  to="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  MEN
                </Link>
                <hr className="border-gray-200"></hr>
                {categoriesData?.map(
                  (box, index) =>
                    box.gender === "e" && (
                      <Link
                        onClick={() => categoryHandleClick(box.id)}
                        key={index}
                        to={`/shop/${box.gender}/${box.title.toLowerCase()}`}
                        className="text-gray-400 block px-4 py-2 text-sm hover:text-[#00A1C1]"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                      >
                        {box.title}
                      </Link>
                    )
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/team">Team</Link>
    </div>
  );
}
