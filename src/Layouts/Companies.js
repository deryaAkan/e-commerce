import shopSvg1 from "../assets/shoppage/fa-brands-1shopppsvg.svg";
import shopSvg2 from "../assets/shoppage/fa-brands-2shopppsvg.svg";
import shopSvg3 from "../assets/shoppage/fa-brands-3shopppsvg.svg";
import shopSvg4 from "../assets/shoppage/fa-brands-4shopppsvg.svg";
import shopSvg5 from "../assets/shoppage/fa-brands-5shopppsvg.svg";
import shopSvg6 from "../assets/shoppage/fa-brands-6shopppsvg.svg";

export default function Companies() {
  return (
    <>
      <div className="flex w-full justify-center bg-[#FAFAFA] gap-10 py-5 px-5">
        <div className="flex flex-wrap w-full justify-around sm:gap-5 sm:flex-col">
          <img src={shopSvg1}></img>
          <img src={shopSvg2}></img>
          <img src={shopSvg3}></img>
          <img src={shopSvg4}></img>
          <img src={shopSvg5}></img>
          <img src={shopSvg6}></img>
        </div>
      </div>
    </>
  );
}
