const data = require("../mock_data.json");

export const getMockData = ({ constraints = null }) => {
  if (constraints) {
    if (constraints === "fav") {
      const res = data;
      const teams = res.teams.filter((i) => i.is_favorited);
      return { ...res, teams, teams_length: res.teams.length };
    }
    if (constraints === "archived") {
      const res = data;
      const teams = res.teams.filter((i) => i.is_archived);
      return { ...res, teams, teams_length: res.teams.length };
    }
    if (constraints === "all") {
      return { ...data, teams_length: data.teams.length };
    }
  }
  return { ...data, teams_length: data.teams.length };
};
