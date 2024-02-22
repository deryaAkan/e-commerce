import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Dropdown from "../Components/Navbar";
import loginSvg from "../assets/header/loginvector.svg";
import shopCardSvg from "../assets/header/shopCardSvg.svg";
import searchSvg from "../assets/header/searchBar.svg";
import favsSvg from "../assets/header/favs.svg";

export default function Header() {
  return (
    <>
      <header className="CommonThings w-full flex flex-col">
        <div className="flex w-full px-16 bg-[#252B42] justify-center">
          <div className="flex w-3/4 justify-between flex-wrap sm:hidden pt-3 pb-3">
            <div className="flex gap-2">
              <div className="flex items-center text-sm font-bold gap-2">
                <FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff" }} />
                <h6>255 555-0118</h6>
              </div>
              <div className="flex items-center text-sm font-bold gap-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#ffffff" }}
                />
                <h6>michelle.rivera@example.com</h6>
              </div>
            </div>
            <div className="flex">
              {" "}
              <h6 className="font-bold text-sm">
                Follow Us and get a chance to win 80% off
              </h6>
            </div>
            <div className="flex items-center text-sm font-bold gap-2">
              <h6>Follow Us:</h6>
              <div className="flex gap-2">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "#ffffff" }}
                />
                <FontAwesomeIcon
                  icon={faYoutube}
                  style={{ color: "#ffffff" }}
                />
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "#ffffff" }}
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ color: "#ffffff" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-3/4 px-12 justify-around flex-wrap">
          <div className="text-[#252B42] flex items-center flex-grow gap-24">
            <h3 className="font-2xl font-bold">Bandage</h3>
            <nav className="flex text-sm font-bold text-gray-400">
              <Dropdown />
            </nav>
          </div>
          <div className="text-[#23A6F0] text-sm flex items-center gap-2 flex-grow justify-end">
            <img src={loginSvg} />
            <a className="font-bold" href="#">
              Login /
            </a>
            <a className="font-bold" href="#">
              Register
            </a>
            <a href="#">
              <img src={searchSvg} />
            </a>
            <a href="#">
              <img src={shopCardSvg} />
            </a>
            <p>1</p>
            <a href="#">
              <img src={favsSvg} />
            </a>
            <p>1</p>
          </div>
        </div>
      </header>
    </>
  );
}
