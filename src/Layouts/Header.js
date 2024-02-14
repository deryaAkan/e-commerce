import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";


export default function Header() {
  return (
    <>
      <header className="CommonThings w-full flex flex-col">
        <div className="flex w-full bg-[#252B42] justify-around flex-wrap">
          <div className="flex gap-2">
            <div className="flex items-center text-sm font-bold gap-2">
              <FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff" }} />
              <h6>255 555-0118</h6>
            </div>
            <div className="flex items-center text-sm font-bold gap-2">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff" }} />
              <h6>michelle.rivera@example.com</h6>
            </div>
          </div>
          <div>
            {" "}
            <h6>Follow Us and get a chance to win 80% off</h6>
          </div>
          <div className="flex items-center text-sm font-bold gap-2">
            <h6>Follow Us:</h6>
            <div className="flex gap-2">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#ffffff" }}
              />
              <FontAwesomeIcon icon={faYoutube} style={{ color: "#ffffff" }} />
              <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff" }} />
              <FontAwesomeIcon icon={faTwitter} style={{ color: "#ffffff" }} />
            </div>
          </div>
        </div>
        <div className="flex justify-around w-4/5">
          <div className="text-[#252B42] flex items-center flex-grow">
            <h3 className="font-2xl font-bold">Bandage</h3>
            <nav className="flex text-sm">
            <Link to="/">Home</Link>
              <Link to="/products">Shop</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/pages">Pages</Link>
            </nav>
          </div>
          <div className="text-[#252B42] flex items-center gap-2 flex-grow justify-end">
            <p>Login</p>
            <p>Register</p>
            <p>o</p>
            <p>o</p>
            <p>o</p>
          </div>
        </div>
        <div>
          
        </div>
      </header>
    </>
  );
}
