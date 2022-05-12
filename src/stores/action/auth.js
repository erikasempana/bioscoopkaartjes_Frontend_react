import axios from "../../utils/axios";

export const login = (form) => {
  return {
    type: "LOGIN",
    payload: axios.post("auth/login", form)
  };
};

export const register = (form) => {
  return {
    type: "REGISTER",
    payload: axios.post("auth/register", form)
  };
};
