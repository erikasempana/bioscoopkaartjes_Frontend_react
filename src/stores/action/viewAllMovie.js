import axios from "../../utils/axios";

export const getAllMovie = (page, limit) => {
  return {
    type: "GET_ALL_MOVIE",
    payload: axios.get(`movie?page=${page}&limit=${limit}`)
  };
};
