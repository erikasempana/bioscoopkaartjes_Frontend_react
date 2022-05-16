import axios from "../../utils/axios";

export const getAllSchedule = (limit, page) => {
  return {
    type: "GET_ALL_SCHEDULE",
    payload: axios.get(`schedule?limit=${limit}&page=${page}`)
  };
};

export const dataOrder = (body) => {
  return {
    type: "DATA_ORDER",
    payload: body
  };
};
