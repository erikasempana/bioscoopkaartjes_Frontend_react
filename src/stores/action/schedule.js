import axios from "../../utils/axios";

export const getAllSchedule = (limit, page) => {
  return {
    type: "GET_ALL_SCHEDULE",
    payload: axios.get(`schedule?limit=${limit}&page=${page}`)
  };
};
export const getScheduleByMovieId = (id) => {
  return {
    type: "GET_SCHEDULE_BY_MOVIE_ID",
    payload: axios.get(`/schedule/movie/${id}`)
  };
};
export const getScheduleById = (id) => {
  return {
    type: "GET_SCHEDULE_BY_ID",
    payload: axios.get(`/schedule/${id}`)
  };
};

export const dataOrder = (body) => {
  return {
    type: "DATA_ORDER",
    payload: body
  };
};
