import axios from "../../utils/axios";

export const postBooking = (body) => {
  console.log("BOOODY", body);
  return {
    type: "POST_BOOKING",
    payload: axios.post("booking", body)
  };
};
