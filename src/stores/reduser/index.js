import { combineReducers } from "redux";

// import counter from "./counter";
// import movie from "./movie";
import manageMovie from "./manageMovie";
import user from "./user";
import login from "./login";
import getAllMovie from "./viewAllMovie";
// import register from "./register";

export default combineReducers({
  //   counter, // counter: counter
  manageMovie,
  user,
  login,
  getAllMovie
  // register
});
