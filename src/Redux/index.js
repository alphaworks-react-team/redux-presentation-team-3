import { combineReducers } from "redux";
import userReducer from "./Reducers/userReducer";
import themeReducer from "./Reducers/themeReducer";
import apiUserReducer from "./Reducers/apiUserReducer.js";

const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
  apiUsers: apiUserReducer,
});

export default rootReducer;
