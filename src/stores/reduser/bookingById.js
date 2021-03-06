const initialState = {
  isLoading: false,
  isError: false,
  data: {},
  msg: ""
};

const bookingById = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BOOKING_BY_ID_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    }
    case "GET_BOOKING_BY_ID_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        data: { ...action.payload.data.data },
        msg: action.payload.data.msg
      };
    }
    case "GET_BOOKING_BY_ID_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: {},
        msg: action.payload.response.data.msg
      };
    }
    default: {
      return state;
    }
  }
};

export default bookingById;
