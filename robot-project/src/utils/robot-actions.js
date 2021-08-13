import axios from "axios";
require("dotenv");
const BASEURL = "https://mondo-robot-art-api.herokuapp.com/";
let token = localStorage.getItem("token");

//GET ALL ROBOTS
export const getRobots = () => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  const result = axios.get(BASEURL + "robots", config);
  return result;
};

//CAST VOTE
export const castVote = (id) => {
  console.log("casting vote now running");

  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  let body = {
    robot: id,
  };
  const result = axios.post(BASEURL + "votes", body, config);
  console.log(result);
  return result;
};

//DELETE VOTE
export const deleteVote = (id) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const result = axios.delete(BASEURL + "votes/" + id, config);
  console.log(result);
  return result;
};

//GET SINGLE VOTE
export const getVotes = (id) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  let body = {
    robot: id,
  };
  const result = axios.post(BASEURL + "robots" + body + "/votes", config);
  console.log(result);
  return result;
};

//GET ALL VOTES
export const getAllVotes = () => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  const result = axios.get(BASEURL + "votes", config);
  console.log(result);
  return result;
};
