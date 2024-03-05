import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import aboutSvg1 from "../assets/aboutpage/Ellipse-LP.svg";
import aboutSvg2 from "../assets/aboutpage/Ellipse-MP.svg";
import aboutSvg3 from "../assets/aboutpage/Ellipse SP.svg";
import aboutSvg4 from "../assets/aboutpage/Ellipse 26ellipse-3.svg";
import aboutSvg5 from "../assets/aboutpage/Ellipse 26ellipse-4.svg";
import contactimg1 from "../assets/aboutpage/technology 1contacttt.png";
import contactSvg1 from "../assets/contactpage/Vectorcontact-1.svg";
import contactSvg2 from "../assets/contactpage/Vectorcontact.svg";
import contactSvg3 from "../assets/contactpage/icn settings .icn-xlcontact.svg";
import contactArrow from "../assets/contactpage/Arrow 2.svg";

export default function ContactPage() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-3/4 justify-center flex flex-col py-10  sm:justify-center">
          <div className="text-[#252B42] flex justify-between items-center sm:flex-col">
            <div className=" flex flex-col w-1/3 gap-5 sm:w-full">
              <div className="font-bold text-[#252B42] text-left flex flex-col gap-5 sm:text-center">
                <h5 className="text-2xl">CONTACT US</h5>
                <h1 className="text-[58px] sm:text-[40px]">
                  GET IN TOUCH TODAY
                </h1>
                <h4 className="font-normal text-[#737373]">
                  We know how large objects will act, but things on a small
                  scale.
                </h4>
                <div className="flex flex-col text-2xl font-bold text-[#252B42] gap-5 sm:text-l">
                  <p>Phone ; +451 215 215 </p>
                  <p>Fax : +451 215 215</p>
                </div>
                <div className="flex w-full gap-5 sm:justify-center">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ color: "#252B42" }}
                  />
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ color: "#252B42" }}
                  />
                  <FontAwesomeIcon
                    icon={faTwitter}
                    style={{ color: "#252B42" }}
                  />
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: "#252B42" }}
                  />
                </div>
              </div>
            </div>
            <div className="relative sm:justify-center">
              <img className="" src={contactimg1} alt="imggg" />{" "}
            </div>
          </div>
        </div>
        <div className="w-3/4 justify-center flex flex-col py-20 items-center gap-5 text-[#252B42] sm:bg-[#FAFAFA] sm:w-full">
          <div className="flex flex-col font-bold w-1/2">
            <p className="text-sm">VISIT OUR OFFICE</p>
            <p className="text-[40px]">
              We help small businesses with big ideas
            </p>
          </div>
          <div className="w-full justify-center gap-5 flex items-center text-[#252B42] font-bold text-sm sm:flex-col">
            <div className="flex flex-col bg-white items-center py-10 gap-5 px-10">
              <img src={contactSvg1} />
              <p>georgia.young@example.com</p>
              <p>georgia.young@example.com</p>
              <p className="text-2xl">Get Support</p>
              <button className="font-bold py-2 px-4 rounded-full border border-[#23A6F0] text-[#23A6F0] w-x-8">
                Submit Request
              </button>
            </div>
            <div className="flex flex-col items-center py-10 gap-5 bg-[#252B42] text-white px-10">
              <img src={contactSvg2} />
              <p>georgia.young@example.com</p>
              <p>georgia.young@example.com</p>
              <p className="text-2xl">Get Support</p>
              <button className="font-bold py-2 px-4 rounded-full border border-[#23A6F0] text-[#23A6F0] w-x-8">
                Submit Request
              </button>
            </div>
            <div className="flex flex-col bg-white items-center py-10 gap-5 px-10">
              <img src={contactSvg3} />
              <p>georgia.young@example.com</p>
              <p>georgia.young@example.com</p>
              <p className="text-2xl">Get Support</p>
              <button className="font-bold py-2 px-4 rounded-full border border-[#23A6F0] text-[#23A6F0] w-x-8">
                Submit Request
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-3/4 py-20">
          <div className="flex flex-col w-1/2 justify-center items-center gap-2 font-bold text-[#252B42]">
            <img src={contactArrow} className="w-[100px]" />
            <p className="text-2xl">We can't wait to meet you</p>
            <h2 className="text-[58px]">Let's Talk</h2>
            <div className="flex w-full justify-center">
              <button className="bg-[#23A6F0] w-fit text-white font-bold py-2 px-6 rounded text-sm">
                Try it free now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
