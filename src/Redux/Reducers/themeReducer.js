const initialState = {
  val : false
};

const themeReducer = (state = initialState, action) => {
  if (action.type === "THEME") return action.payload;
  else {
    return state;
  }
};

export default themeReducer;
