const initialState = {
  isLoading: false,
  isError: false,
  data: {}
};

const booking = (state = initialState, action) => {
  switch (action.type) {
    case "POST_BOOKING_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case "POST_BOOKING_FULFILLED": {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        data: { ...action.payload.data.data }
      };
    }
    case "POST_BOOKING_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: {}
      };
    }
    default: {
      return state;
    }
  }
};

export default booking;
