import { combineReducers } from "redux";

// import counter from "./counter";
// import movie from "./movie";
import user from "./user";
import login from "./login";
import getAllMovie from "./getAllMovie";
// import postMovie from "./postMovie";
import setIsLogin from "./isLogin";
import getMovieByIdMovie from "./getMovieByIdMovie";
import schedule from "./schedule";
import dataOrder from "./dataOrder";
import postMovie from "./postMovie";
import booking from "./booking";
// import pathnya yg di reducer
//import (nama fungsi) from "./letak folder(namafile)"

export default combineReducers({
  //   counter, // counter: counter
  // nama fungsi yg di panggil di reducer
  user,
  login,
  getAllMovie,
  setIsLogin,
  getMovieByIdMovie,
  schedule,
  dataOrder,
  postMovie,
  booking
});
