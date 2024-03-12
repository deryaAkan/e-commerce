import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Dropdown() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="relative flex gap-3 sm:flex-col" onBlur={closeMenu}>
        <Link to="/">Home</Link>
        <div className="relative flex text-left">
          <Link to="/products">
            <button
              onClick={toggleMenu}
              className="inline-flex w-full justify-center gap-x-1.5 text-sm text-gray-900"
              id="menu-button"
              aria-expanded={menuOpen}
              aria-haspopup="true"
            >
              Shop
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
                />
              </svg>
            </button>
          </Link>
        </div>
        {menuOpen && (
          <div
            className="absolute left-0 z-10 mt-7 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              <Link
                onClick={closeMenu}
                to="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                Edit
              </Link>
              <Link
                onClick={closeMenu}
                to="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
              >
                Duplicate
              </Link>
            </div>
            <div className="py-1" role="none">
              <Link
                onClick={closeMenu}
                to="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-2"
              >
                Archive
              </Link>
              <Link
                onClick={closeMenu}
                to="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-3"
              >
                Move
              </Link>
            </div>
            <div className="py-1" role="none">
              <Link
                onClick={closeMenu}
                to="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-4"
              >
                Share
              </Link>
              <Link
                onClick={closeMenu}
                to="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-5"
              >
                Add to favorites
              </Link>
            </div>
            <div className="py-1" role="none">
              <Link
                onClick={closeMenu}
                to="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-6"
              >
                Delete
              </Link>
            </div>
          </div>
        )}
        <Link to="/about" className="sm:hidden">About</Link>
        <Link to="/blog">Pricing</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/team" className="sm:hidden">Team</Link>
      </div>
    </>
  );
}
