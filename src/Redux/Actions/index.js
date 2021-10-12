import axios from "axios";

export const changeTheme = () => {
  return {
    type: "THEME",
  };
};

export const logIn = (e) => {
  return {
    type: "LOG_IN",
    payload: e,
  };
};

export const logOut = () => {
  return { type: "LOG_OUT" };
};

export const fetchUsersRequest = () => {
  return {
    type: "FETCH_USERS_REQUEST",
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: "FETCH_USERS_SUCCESS",
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: "FETCH_USERS_FAILURE",
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // response.data is the users
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        console.log("hi");
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message));
      });
  };
};
