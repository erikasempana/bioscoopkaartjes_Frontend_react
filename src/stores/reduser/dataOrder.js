const initialState = {
  dataOrder: {}
};
const dataOrder = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_ORDER":
      return {
        dataOrder: action.payload
      };

    default:
      return state;
  }
};

export default dataOrder;
