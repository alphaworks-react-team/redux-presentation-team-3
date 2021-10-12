const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "LOG_OUT":
      return { username: "", password: "" };
    default:
      return state;
  }
};

export default userReducer;
