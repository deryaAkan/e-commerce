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
import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export default function Header() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname.includes("/about") || pathname.includes("/contact") ? (
        <Navbar />
      ) : (
        <header className="CommonThings w-full flex flex-col">
          <div className="flex w-full px-16 bg-[#252B42] justify-center">
            <div className="flex w-3/4 justify-between flex-wrap sm:hidden pt-3 pb-3">
              <div className="flex gap-2">
                <div className="flex items-center text-sm font-bold gap-2">
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: "#ffffff" }}
                  />
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
          <Navbar />
        </header>
      )}
    </>
  );
}
