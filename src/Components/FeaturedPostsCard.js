import React from "react";
import featured1 from "../assets/homepage/unsplash_hHdHCfAifHUhomePost1.png";
import featured2 from "../assets/homepage/unsplash_tVEqStC2uz8homePost2.png";
import featured3 from "../assets/homepage/unsplash_dEGu-oCuB1YhomePost3.png";
import dateIcon from "../assets/homepage/cooliconsaat.svg";
import comment from "../assets/homepage/Vectorcomment.svg";

const featuredCardInfo = [
  {
    img: featured1,
    links: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    dateIcon: dateIcon,
    date: "22 April 2021",
    commentInfoIcon: comment,
    commentInfo: "Comments",
    learnMore: "Learn More",
  },

  {
    img: featured2,
    links: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    dateIcon: dateIcon,
    date: "22 April 2021",
    commentInfoIcon: comment,
    commentInfo: "Comments",
    learnMore: "Learn More",
  },

  {
    img: featured3,
    links: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    dateIcon: dateIcon,
    date: "22 April 2021",
    commentInfoIcon: comment,
    commentInfo: "Comments",
    learnMore: "Learn More",
  },
];

function FeaturedCard() {
  return (
    <>
      <div className="flex w-4/5 gap-3 justify-center sm:w-full flex-wrap">
        {featuredCardInfo.map((item, index) => (
          <div
            key={index}
            className="max-w-xs bg-[#FAFAFA] shadow-md overflow-hidden"
          >
            <img className="w-full h-auto" src={item.img} alt="Product" />
            <p className="text-sm flex gap-2 text-black font-base">
              {item.links}
            </p>
            <div className="p-4">
              <p className="text-xl text-left text-gray-700 font-semibold mb-2">
                {item.title}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img src={item.dateIcon} alt="Date" />
                  <p className="text-sm text-gray-700">{item.date}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={item.commentInfoIcon} alt="Comment" />
                  <p className="text-sm text-gray-700">{item.commentInfo}</p>
                </div>
              </div>
              <p className="font-semibold text-black text-base text-left py-2 rounded mt-4">
                {item.learnMore}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FeaturedCard;
