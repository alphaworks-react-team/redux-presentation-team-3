const initialState = false;

const themeReducer = (state = initialState, action) => {
  if (action.type === "THEME") return !state;
  else {
    return state;
  }
};

export default themeReducer;
