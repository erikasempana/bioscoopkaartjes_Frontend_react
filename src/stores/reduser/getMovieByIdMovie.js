const initialState = {
  isLoading: false,
  isError: false,
  data: {}
};
const getMovieByIdMovie = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIE_BY_ID_MOVIE_PENDING": {
      console.log(action.payload);
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case "GET_MOVIE_BY_ID_MOVIE_FULFILLED": {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        data: { ...action.payload.data.data[0] }
      };
    }
    case "GET_MOVIE_BY_ID_MOVIE_REJECTED": {
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

export default getMovieByIdMovie;
