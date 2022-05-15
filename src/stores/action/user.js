import axios from "../../utils/axios";

export const getUserById = (id) => {
  console.log("action", id);
  return {
    type: "GET_USER_BY_ID",
    payload: axios.get(`user/${id}`)
  };
};
