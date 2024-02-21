import Companies from "../Layouts/Companies";
import aboutimg2 from "../assets/aboutpage/unsplash_vjMgqUkS8q8aboutpage.png";
import aboutimg1 from "../assets/aboutpage/technology 1ellipse.svg";
import aboutSvg1 from "../assets/aboutpage/Ellipse-LP.svg";
import aboutSvg2 from "../assets/aboutpage/Ellipse-MP.svg";
import aboutSvg3 from "../assets/aboutpage/Ellipse SP.svg";
import aboutSvg4 from "../assets/aboutpage/Ellipse 26ellipse-3.svg";
import aboutSvg5 from "../assets/aboutpage/Ellipse 26ellipse-4.svg";
import videoAbout from "../assets/aboutpage/Video cardvideoAbout.svg";
import aboutTeam from "../assets/aboutpage/mediateamAbout.png";
import TeamCard from "../Components/TeamCard";

const AboutPage = () => {
  const meetOurTeam = [
    {
      name: "John Doe",
      duty: "IBU",
      profession: "profession",
      img: aboutTeam,
    },
    {
      name: "Jane Smith",
      duty: "eBay",
      profession: "profession",
      img: aboutTeam,
    },
    {
      name: "David Johnson",
      duty: "Amazon",
      profession: "profession",
      img: aboutTeam,
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-4/5 flex flex-col py-10">
        <div className="text-black flex justify-between items-center">
          <div className=" flex flex-col w-1/3 gap-5">
            <div className="font-bold text-[#252B42] text-left flex flex-col">
              <h5 className="text-2xl">ABOUT COMPANY</h5>
              <h1 className="text-[58px]">ABOUT US</h1>
              <h4 className="font-normal text-[#737373]">
                We know how large objects will act, but things on a small scale.
              </h4>
            </div>
            <button className="bg-[#23A6F0] text-white font-bold text-sm py-2 px-4 rounded hover:bg-blue-300">
              Get Quote Now
            </button>
          </div>
          <div className="relative pb-40">
            <img
              className="absolute mb-[45rem] ml-[6rem] mt-0"
              src={aboutimg1}
              alt="imggg"
            />{" "}
            <div className="flex flex-wrap">
              <img
                className="mt-0 ml-0 mb-[26rem]"
                src={aboutSvg2}
                alt="imggg"
              />{" "}
              <img className="ml-0 mt-[26rem]" src={aboutSvg4} alt="imggg" />{" "}
              <img className="mb-4" src={aboutSvg1} alt="imggg" />{" "}
              <img className="mb-4 ml-4" src={aboutSvg3} alt="imggg" />{" "}
              <img className="mb-[14rem]" src={aboutSvg5} alt="imggg" />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-4/5 items-center text-left justify-between">
        <div className="flex flex-col w-1/3 gap-5">
          <p className="text-[#E74040] text-sm font-normal]">problem trying</p>
          <h2 className="text-[#252B42] text-2xl font-bold">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h2>
        </div>
        <div className="w-1/2">
          <p className="text-sm font-normal text-[#737373]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>
      <div className="flex w-4/5 items-center text-left justify-between font-bold py-10">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[58px] text-[#252B42]">15K</h2>
          <p className="text-[#737373] text-base">Happy Customers</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[58px] text-[#252B42]">150K</h2>
          <p className="text-[#737373] text-base"> Monthly Visitors</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[58px] text-[#252B42]">15</h2>
          <p className="text-[#737373] text-base"> Countries Worldwide</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[58px] text-[#252B42]">100+</h2>
          <p className="text-[#737373] text-base">Top Partners</p>
        </div>
      </div>
      <div className="py-20">
        <img src={videoAbout} />
      </div>

      <div className="flex flex-col w-4/5 justify-between py-20 gap-5">
        <h2 className="text-[40px] font-bold text-[#252B42]">Meet Our Team</h2>
        <p className="text-sm text-[#737373] font-bold">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <TeamCard className="justify-between" members={meetOurTeam} />
      </div>

      <div className="flex flex-col w-full justify-center items-center py-10 text-gray-600 bg-[#FAFAFAFA]">
        <div className="flex flex-col w-4/5 gap-5">
          <h2 className="text-[40px] font-bold">Big Companies Are Here</h2>
          <p className="text-sm">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          <Companies />
        </div>
      </div>
      <div className="bg-[#2A7CC7] w-full flex justify-between items-center">
        <div className="flex w-2/3 justify-center">
          <div className="flex flex-col text-left w-[400px] gap-5">
            <h5 className="text-base font-bold">WORK WITH US</h5>
            <h2 className="text-[40px] font-bold">Now Let's grow Yours</h2>
            <p className="text-base font-normal">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th{" "}
            </p>
            <button className=" border-2 border-white text-white font-bold py-2 px-4 rounded">
              Button
            </button>
          </div>
        </div>
        <img src={aboutimg2} alt="imgg" />
      </div>
    </div>
  );
};

export default AboutPage;
