const initialState = {
  isLoading: false,
  isError: false,
  data: []
};

const updateMovie = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_MOVIE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case "UPDATE_MOVIE_FULFILLED": {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        data: [...action.payload.data.data]
      };
    }
    case "UPDATE_MOVIE_REJECTED": {
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

export default updateMovie;
