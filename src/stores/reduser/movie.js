const initialState = {
  isLoading: false,
  isError: false,
  data: []
};

const getAllMovie = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_MOVIE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case "GET_ALL_MOVIE_FULFILLED": {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        data: [...action.payload.data.data]
      };
    }
    case "GET_ALL_MOVIE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: []
      };
    }

    default: {
      return state;
    }
  }
};

export default getAllMovie;
