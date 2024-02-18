import React from "react";


function TeamCard ({ members }) {
        return (
          <div className="team-members flex flex-wrap gap-10">
            {members.map((member, index) => (
              <div key={index} className="member-card text-black text-left font-normal">
                <img src={member.img}/>
                <h2 className="text-xl">{member.name}</h2>
                <p className="text-xs text-gray-500">{member.duty}</p>
              </div>
            ))}
          </div>
        );
      };

export default TeamCard;
