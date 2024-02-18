import TeamCard from "../Components/TeamCard";
import Team1 from "../assets/teampage/mediateam.png";
import Team2 from "../assets/teampage/team-3-user-1team-1.png";
import Team3 from "../assets/teampage/team-3-user-1team.png";
import Team4 from "../assets/teampage/team-3-user-2team.png";
import Team5 from "../assets/teampage/team-3-user-3team-1.png";
import Team6 from "../assets/teampage/team-3-user-3team.png";
import Team7 from "../assets/teampage/team-3-user-4team-1.png";
import Team8 from "../assets/teampage/team-3-user-4team.png";

const TeamPage = () => {

    const teamMembers = [
      { name: 'John Doe', duty: 'IBU', img: Team1 },
      { name: 'Jane Smith', duty: 'eBay', img: Team2 },
      { name: 'David Johnson', duty: 'Amazon', img: Team3 },
      { name: 'John Doe', duty: 'IBU', img: Team4 },
      { name: 'Jane Smith', duty: 'eBay', img: Team5 },
      { name: 'David Johnson', duty: 'Amazon', img: Team6 },
      { name: 'John Doe', duty: 'IBU', img: Team7 },
      { name: 'Jane Smith', duty: 'eBay', img: Team8 },
    ];
  
    return (
      <div className="flex w-4/5 py-20">
        <h1>Our Team</h1>
        <TeamCard members={teamMembers} />
      </div>
    );
  };
  
  export default TeamPage;