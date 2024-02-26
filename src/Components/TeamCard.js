import React from "react";

function TeamCard({ members }) {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {members.map((member, index) => (
        <div
          key={index}
          className="flex flex-col gap-5 member-card text-black text-left font-normal sm:text-center"
        >
          <img src={member.img} />
          <div className="flex flex-col gap-3">
            <h2 className="text-xl">{member.name}</h2>
            <p className="text-xs text-gray-500">{member.duty}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeamCard;
