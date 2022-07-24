import { getMockData } from "../mock_api/mock_api";
import { useEffect, useState } from "react";
import TeamCard from "../components/TeamCard";
import ActivityCard from "../components/ActivityCard";

const Teams = ({ setUser }) => {
  const [totalTeams, setTotalTeams] = useState([]);
  const [teams, setTeams] = useState([]);
  const [filter, setFilter] = useState("all");
  const [activities, setActivities] = useState([]);

  const getTeams = async (constraint = null) => {
    const res = await getMockData({ constraints: constraint });
    setFilter(constraint);
    setTeams(res.teams);
    setUser(res.current_user);
    setActivities(res.activities);
    setTotalTeams(res.teams_length);
  };

  useEffect(() => {
    getTeams("all");
  }, []);

  return (
    <>
      <div className="flex bg-white w-full p-8 flex items-center">
        <svg
          width="30"
          height="34"
          viewBox="0 0 30 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.6875 17H21.25V8.5C21.25 7.8625 20.825 7.4375 20.1875 7.4375H18.0625V5.3125C18.0625 4.675 17.6375 4.25 17 4.25H15.9375V1.0625C15.9375 0.425 15.5125 0 14.875 0C14.2375 0 13.8125 0.425 13.8125 1.0625V4.25H12.75C12.1125 4.25 11.6875 4.675 11.6875 5.3125V7.4375H9.5625C8.925 7.4375 8.5 7.8625 8.5 8.5V20.1875H1.0625C0.425 20.1875 0 20.6125 0 21.25V32.9375C0 33.575 0.425 34 1.0625 34H9.5625H12.75H17H20.1875H28.6875C29.325 34 29.75 33.575 29.75 32.9375V18.0625C29.75 17.425 29.325 17 28.6875 17ZM6.375 29.75H3.1875V27.625H6.375V29.75ZM6.375 26.5625H3.1875V24.4375H6.375V26.5625ZM10.625 29.75H7.4375V27.625H10.625V29.75ZM10.625 26.5625H7.4375V24.4375H10.625V26.5625ZM15.9375 18.0625V31.875H13.8125V21.25C13.8125 20.6125 13.3875 20.1875 12.75 20.1875H10.625V9.5625H12.75C13.3875 9.5625 13.8125 9.1375 13.8125 8.5V6.375H15.9375V8.5C15.9375 9.1375 16.3625 9.5625 17 9.5625H19.125V17H17C16.3625 17 15.9375 17.425 15.9375 18.0625ZM22.3125 29.75H19.125V27.625H22.3125V29.75ZM22.3125 26.5625H19.125V24.4375H22.3125V26.5625ZM22.3125 23.375H19.125V21.25H22.3125V23.375ZM26.5625 29.75H23.375V27.625H26.5625V29.75ZM26.5625 26.5625H23.375V24.4375H26.5625V26.5625ZM26.5625 23.375H23.375V21.25H26.5625V23.375Z"
            fill="#A4A6A8"
          />
        </svg>
        <span className="pl-2 text-3xl font-bold">Teams</span>
        <div className="flex grow justify-end">
          <div className="w-42 bg-[#40D2BF] flex items-center text-white p-2 px-4 text-xs">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 0H6V6H0V10H6V16H10V10H16V6H10V0Z" fill="white" />
            </svg>
            <span className="pl-4">Create New Team</span>
          </div>
        </div>
      </div>
      <div className="pl-8 pr-8 bg-white w-full flex gap-3">
        <button
          className={`w-16 font-bold pb-2 border-b-[3px] border-[#0083E3]  ${
            filter === "all" ? "text-[#0083E3]" : "border-white"
          }`}
          onClick={() => {
            getTeams("all");
          }}
        >
          All
        </button>
        <button
          className={`w-24 font-bold pb-2 border-b-[3px] border-[#0083E3] ${
            filter === "fav" ? "text-[#0083E3]" : "border-white"
          }`}
          onClick={() => {
            getTeams("fav");
          }}
        >
          Favorites
        </button>
        <button
          className={`w-24 font-bold pb-2 border-b-[3px] border-[#0083E3] ${
            filter === "archived" ? "text-[#0083E3]" : "border-white"
          }`}
          onClick={() => {
            getTeams("archived");
          }}
        >
          Archived
        </button>
        <div className="flex grow justify-end">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.7415 10.3275L15.707 14.293L14.293 15.707L10.3275 11.7415C9.2525 12.529 7.9315 13 6.5 13C2.916 13 0 10.084 0 6.5C0 2.916 2.916 0 6.5 0C10.084 0 13 2.916 13 6.5C13 7.932 12.529 9.2525 11.7415 10.3275ZM6.5 1C3.4675 1 1 3.4675 1 6.5C1 9.5325 3.4675 12 6.5 12C9.5325 12 12 9.5325 12 6.5C12 3.4675 9.5325 1 6.5 1Z"
              fill="#999999"
            />
          </svg>
          <div className="w-48 pl-4 text-sm opacity-[0.5]">
            <input
              type="text"
              value="Search team name..."
              onChange={() => console.log("hello")}
            />
          </div>
        </div>
      </div>
      <div className="p-10 bg-[#E5E5E5] flex w-full h-auto">
        {/* Teams */}
        <div className="bg-white flex-grow mr-[32px] w-[75%]">
          <div className="flex items-center pl-8 pr-8 h-[70px] border-b-[1px] border-[#EFEFEF]">
            <div className="font-bold">All Teams</div>
            <div className="flex flex-grow justify-end opacity-[0.45] text-sm">
              Showing {teams.length} out of {totalTeams} teams
            </div>
          </div>
          <div className="justify-center p-6 gap-[15px] flex flex-wrap">
            {teams && teams.length > 0
              ? teams.map((team, index) => {
                  return <TeamCard team={team} key={index} />;
                })
              : ""}
          </div>
        </div>
        {/* Activity */}
        <div className="bg-white w-[25%] h-[460px]">
          <div className="flex pl-8 pr-8 items-center h-[70px] border-b-[1px] border-[#EFEFEF] font-bold">
            Activity
          </div>
          <div className="p-8">
            {activities && activities.length > 0
              ? activities.map((activity, index) => {
                  return <ActivityCard activity={activity} key={index} />;
                })
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
