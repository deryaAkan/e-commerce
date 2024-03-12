import Companies from "../Layouts/Companies";
import aboutimg2 from "../assets/aboutpage/unsplash_vjMgqUkS8q8aboutpage.png";
import aboutimg1 from "../assets/aboutpage/technology 1ellipse.svg";
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
      <div className="w-3/4 flex flex-col py-10">
        <div className="text-black flex justify-between text-left items-center sm:flex-wrap sm:justify-center sm:text-center">
          <div className=" flex flex-col w-1/3 gap-5 sm:w-full sm:items-center">
            <div className="font-bold text-[#252B42] flex flex-col sm:w-2/3 sm:pt-20">
              <h5 className="text-2xl sm:hidden">ABOUT COMPANY</h5>
              <h1 className="text-[58px] sm:text-[40px] sm:w-full">ABOUT US</h1>
              <h4 className="text-[#737373] font-bold sm:w-full">
                We know how large objects will act, but things on a small scale.
              </h4>
            </div>
            <div className="w-full flex justify-start sm:justify-center">
              <button className="bg-[#23A6F0] text-white font-bold text-sm py-4 px-14 rounded hover:bg-blue-300">
                Get Quote Now
              </button>
            </div>
          </div>
          <div className="relative pb-20">
            <img className="" src={aboutimg1} alt="imggg" />
          </div>
        </div>
      </div>
      <div className="flex w-3/4 items-center text-left justify-between px-20 sm:flex-col sm:gap-5 sm:w-full">
        <div className="flex flex-col w-1/3 gap-5 sm:w-full">
          <p className="text-[#E74040] text-sm font-normal]">problem trying</p>
          <h2 className="text-[#252B42] text-2xl font-bold">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h2>
        </div>
        <div className="w-1/2 sm:w-full">
          <p className="text-sm font-normal text-[#737373]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>
      <div className="flex w-3/4 items-center text-left justify-between font-bold py-10 px-20 sm:flex-col sm:gap-20">
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
      <div className="flex py-20 w-3/4 justify-center sm:py-10">
        <img src={videoAbout} />
      </div>

      <div className="flex flex-col w-3/4 py-20 gap-5">
        <h2 className="text-[40px] font-bold text-[#252B42]">Meet Our Team</h2>
        <p className="text-sm text-[#737373] font-bold">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <TeamCard members={meetOurTeam} />
      </div>

      <div className="flex flex-col w-full justify-center items-center py-10 text-gray-600 bg-[#FAFAFAFA]">
        <div className="flex flex-col w-3/4 gap-5">
          <h2 className="text-[40px] font-bold">Big Companies Are Here</h2>
          <p className="text-sm">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          <Companies />
        </div>
      </div>
      <div className="bg-[#2A7CC7] w-full flex justify-between items-center sm:justify-center sm:py-20">
        <div className="flex w-2/3 justify-center">
          <div className="flex flex-col text-left w-[400px] gap-5 sm:text-center">
            <h5 className="text-base font-bold">WORK WITH US</h5>
            <h2 className="text-[40px] font-bold">Now Let's grow Yours</h2>
            <p className="text-base font-normal">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th{" "}
            </p>
            <div className="w-full flex justify-start sm:justify-center">
              <button className=" border border-white text-white text-base hover:bg-[#FAFAFA] hover:text-[#2A7CC7] font-bold py-2 px-10 rounded">
                Button
              </button>
            </div>
          </div>
        </div>
        <img className="sm:hidden" src={aboutimg2} alt="imgg" />
      </div>
    </div>
  );
};

export default AboutPage;
