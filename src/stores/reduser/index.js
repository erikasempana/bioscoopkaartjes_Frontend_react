import { combineReducers } from "redux";

// import counter from "./counter";
// import movie from "./movie";
// import manageMovie from "./manageMovie";
import user from "./user";
import login from "./login";
import getAllMovie from "./getAllMovie";
import postMovie from "./postMovie";
// import pathnya yg di reducer
//import (nama fungsi) from "./letak folder(namafile)"

export default combineReducers({
  //   counter, // counter: counter
  // nama fungsi yg di panggil di reducer
  user,
  login,
  getAllMovie,
  postMovie
});
