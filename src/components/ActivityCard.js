const ActivityCard = ({ activity }) => {
  return (
    <>
      <div className="text-xs flex grid grid-cols-4 grid-rows-3 mb-2">
        <div className="object-cover mr-2 row-span-2 col-span-1">
          <img
            width={36}
            height={36}
            className="rounded-3xl"
            src={activity.person.avatar}
          />
        </div>
        <div className="row-span-2 col-span-3">
          <span className="font-bold">{activity.person.name} </span>
          {activity.action === "increased_quota" ? (
            <span>
              {" "}
              increased <span className="font-bold">{activity.target}</span>'s
              quota.
            </span>
          ) : activity.action === "added_leads" ? (
            <span>
              added new leads to{" "}
              <span className="font-bold">{activity.target}</span>.
            </span>
          ) : activity.action === "archived_team" ? (
            <span>
              archived the team{" "}
              <span className="font-bold">{activity.target}</span>.
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="row-start-3 col-start-2 col-span-3 text-xs opacity-[0.45]">
          {activity.created_at}
        </div>
      </div>
    </>
  );
};

export default ActivityCard;
