const initialState = {
  isLogin: false
};
const setIsLogin = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IS_LOGIN":
      console.log(action, "STATE");
      return {
        isLogin: action.payload
      };

    default:
      return state;
  }
};

export default setIsLogin;
