const initialState = {
  isLoading: false,
  isError: false,
  msg: ""
};

const deleteMovie = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_MOVIE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case "DELETE_MOVIE_FULFILLED": {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        msg: action.payload.data.msg
      };
    }
    case "DELETE_MOVIE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg
      };
    }

    default: {
      return state;
    }
  }
};

export default deleteMovie;
