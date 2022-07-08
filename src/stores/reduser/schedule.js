const initialState = {
  isLoading: false,
  isError: false,
  data: []
};
const schedule = (state = initialState, action) => {
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
        data: action.payload.data.data
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
    case "GET_SCHEDULE_BY_MOVIE_ID_PENDING": {
      console.log(action.payload);
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case "GET_SCHEDULE_BY_MOVIE_ID_FULFILLED": {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        data: [...action.payload.data.data]
      };
    }
    case "GET_SCHEDULE_BY_MOVIE_ID_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: []
      };
    }
    case "GET_SCHEDULE_BY_ID_PENDING": {
      console.log(action.payload);
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case "GET_SCHEDULE_BY_ID_FULFILLED": {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data
      };
    }
    case "GET_SCHEDULE_BY_ID_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data
      };
    }
    case "UPDATE_SCHEDULE_PENDING": {
      console.log(action.payload);
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case "UPDATE_SCHEDULE_FULFILLED": {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg
      };
    }
    case "UPDATE_SCHEDULE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data,
        msg: action.payload.data.msg
      };
    }
    case "DELETE_SCHEDULE_PENDING": {
      console.log(action.payload);
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case "DELETE_SCHEDULE_FULFILLED": {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        msg: action.payload.data.msg
      };
    }
    case "DELETE_SCHEDULE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.data.msg
      };
    }
    case "CREATE_SCHEDULE_PENDING": {
      console.log(action.payload);
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case "CREATE_SCHEDULE_FULFILLED": {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        msg: action.payload.msg
      };
    }
    case "CREATE_SCHEDULE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.msg
      };
    }
    default: {
      return state;
    }
  }
};

export default schedule;
