import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function ContactPage() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="flex justify-center items-center w-3/4 py-20">
          <div className="flex flex-col w-1/2 justify-center gap-10">
            <h2 className="text-[40px] font-bold text-[#252B42]">
              Get answers to all your questions.
            </h2>
            <p className="text-2xl text-[#737373] font-normal">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics:{" "}
            </p>
            <div className="flex w-full justify-center">
              <button className="bg-[#23A6F0] w-fit text-white font-bold py-2 px-4 rounded">
                Contact Our Company
              </button>
            </div>

            <div className="flex w-full justify-center gap-5">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#BDBDBD" }}
              />
              <FontAwesomeIcon icon={faFacebook} style={{ color: "#BDBDBD" }} />
              <FontAwesomeIcon icon={faTwitter} style={{ color: "#BDBDBD" }} />
              <FontAwesomeIcon icon={faLinkedin} style={{ color: "#BDBDBD" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
