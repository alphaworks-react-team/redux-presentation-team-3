const initialState = {};

const userReducer = (state = initialState, action) => {
  if (action.type === "LOG_IN")
    return {
      ...state,
      [action.payload.target.name]: action.payload.target.value,
    };
  else if (action.type === "LOG_OUT") {
    return { username: "", password: "" };
  } else {
    return state;
  }
};

export default userReducer;
