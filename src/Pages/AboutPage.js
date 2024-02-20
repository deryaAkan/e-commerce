import Companies from "../Layouts/Companies";
import aboutimg2 from '../assets/aboutpage/unsplash_vjMgqUkS8q8aboutpage.png';
import aboutimg1 from '../assets/aboutpage/technology 1ellipse.svg';
import Button from "../Components/Button";

const AboutPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#FAFAFA] gap-5">
       <div className="text-black flex justify-center items-center">
        <div>
          KADSJFNLADMFŞALFÖ
        </div>
        <img className="-z-0" src={aboutimg1} />
      </div>
      <div className="flex flex-col w-4/5 py-20 text-gray-600">
        <div className="flex flex-col">
          <h2 className="text-[40px] font-bold">Big Companies Are Here</h2>
          <p className="text-sm">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <Companies />
      </div>
      <div className="bg-[#2A7CC7] w-4/5 flex justify-between items-center">
        <div>
          KADSJFNLADMFŞALFÖ
        </div>
        <img src={aboutimg2} />
      </div>
    </div>
  );
};

export default AboutPage;
