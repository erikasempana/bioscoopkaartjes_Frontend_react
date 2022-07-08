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
    payload: axios.get(`schedule/movie/${id}`)
  };
};
export const getScheduleById = (id) => {
  return {
    type: "GET_SCHEDULE_BY_ID",
    payload: axios.get(`schedule/${id}`)
  };
};
export const createSchedule = (body) => {
  return {
    type: "CREATE_SCHEDULE",
    payload: axios.post("schedule/", body)
  };
};
export const deleteSchedule = (id) => {
  return {
    type: "DELETE_SCHEDULE",
    payload: axios.delete(`schedule/${id}`)
  };
};
export const updateSchedule = (id, body) => {
  return {
    type: "UPDATE_SCHEDULE",
    payload: axios.patch(`schedule/${id}`, body)
  };
};

export const dataOrder = (body) => {
  return {
    type: "DATA_ORDER",
    payload: body
  };
};
