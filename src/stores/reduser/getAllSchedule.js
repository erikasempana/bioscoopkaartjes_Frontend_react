const initialState = {
  isLoading: false,
  isError: false,
  data: {}
};
const getAllSchedule = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_SCHEDULE_PENDING": {
      console.log(action.payload);
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case "GET_ALL_SCHEDULE_FULFILLED": {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        data: { ...action.payload.data.data[0] }
      };
    }
    case "GET_ALL_SCHEDULE_REJECTED": {
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

export default getAllSchedule;
