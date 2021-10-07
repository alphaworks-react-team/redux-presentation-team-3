import React from "react";
import { logIn, logOut } from "../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";

const LoginForm = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(logOut());
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          onChange={(e) => dispatch(logIn(e))}
          type="text"
          name="username"
        />
        <input
          onChange={(e) => dispatch(logIn(e))}
          type="password"
          name="password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
