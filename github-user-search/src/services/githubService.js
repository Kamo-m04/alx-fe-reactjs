import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

export const fetchUsersAdvanced = async (username, location, minRepos) => {
  let query = "";
  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(query)}`);
  
  // Now we need to get extra details for each user (like location & public_repos)
  const detailedUsers = await Promise.all(
    response.data.items.map(async (user) => {
      const userDetails = await axios.get(user.url);
      return userDetails.data;
    })
  );

  return detailedUsers;
};
