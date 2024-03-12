import { useSelector } from "react-redux";
import Dropdown from "../Components/Dropdown";
import loginSvg from "../assets/header/loginvector.svg";
import shopCardSvg from "../assets/header/shopCardSvg.svg";
import searchSvg from "../assets/header/searchBar.svg";
import favsSvg from "../assets/header/favs.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const user = useSelector((state) => state.user);

  return (
    <>
      <div className="flex w-full justify-center flex-wrap sm:flex-col sm:gap-5 sm:items-center">
        <div className="flex w-3/4 justify-center  sm:flex-col sm:text-left">
          <div className="text-[#252B42] flex items-center flex-grow gap-24 sm:flex-col sm:gap-3">
            <h3 className="font-2xl font-bold">Bandage</h3>
            <nav className="flex text-sm font-bold text-gray-400">
              <Dropdown />
            </nav>
          </div>
          <div className="text-[#23A6F0] text-sm flex items-center gap-2 flex-grow justify-end sm:flex-wrap sm:justify-center sm:flex-col">
            {user.name ? (
              <>
                <p className="text-[#252B42] text-sm font-bold">{user.name}</p>{" "}
                <Link to="/login" className="font-bold">
                  Logout
                </Link>
              </>
            ) : (
              <>
                <img alt="login stuff" src={loginSvg} className="sm:hidden" />
                <Link to="/login" className="font-bold">
                  Login /
                </Link>
                <Link to="/signup" className="font-bold">
                  Register
                </Link>
              </>
            )}
            <div className="flex items-center gap-2 sm:flex-col">
              <Link to="https://google.com">
                <img alt="login stuff" src={searchSvg} />
              </Link>
              <Link to="https://google.com">
                <img alt="login stuff" src={shopCardSvg} />
              </Link>
              <p>1</p>
              <Link to="https://google.com">
                <img alt="login stuff" src={favsSvg} />
              </Link>
              <p>1</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
