const initialState = {
  isLoading: false,
  isError: false,
  data: []
};

const postMovie = (state = initialState, action) => {
  switch (action.type) {
    case "POST_MOVIE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case "POST_MOVIE_FULFILLED": {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        data: [...action.payload.data.data]
      };
    }
    case "POST_MOVIE_REJECTED": {
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

export default postMovie;
