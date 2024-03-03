import Dropdown from "../Components/Dropdown";
import loginSvg from "../assets/header/loginvector.svg";
import shopCardSvg from "../assets/header/shopCardSvg.svg";
import searchSvg from "../assets/header/searchBar.svg";
import favsSvg from "../assets/header/favs.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Navbar() {
  return (
    <>
      <div className="flex w-full justify-center flex-wrap sm:flex-col sm:gap-5">
        <div className="flex w-3/4 justify-center">
          <div className="text-[#252B42] flex items-center flex-grow gap-24 sm:flex-col sm:gap-3">
            <h3 className="font-2xl font-bold">Bandage</h3>
            <nav className="flex text-sm font-bold text-gray-400">
              <Dropdown />
            </nav>
          </div>
          <div className="text-[#23A6F0] text-sm flex items-center gap-2 flex-grow justify-end sm:flex-wrap sm:justify-center sm:flex-col">
            <img alt="login stuff" src={loginSvg} />
            <a className="font-bold" href="https://google.com">
              Login /
            </a>
            <Link to="/signup" className="font-bold" href="https://google.com">
              Register
            </Link>
            <div className="flex items-center gap-2 sm:flex-col">
              <a href="https://google.com">
                <img alt="login stuff" src={searchSvg} />
              </a>
              <a href="https://google.com">
                <img alt="login stuff" src={shopCardSvg} />
              </a>
              <p>1</p>
              <a href="https://google.com">
                <img alt="login stuff" src={favsSvg} />
              </a>
              <p>1</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
