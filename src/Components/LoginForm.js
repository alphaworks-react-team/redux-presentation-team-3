import React from "react";
import { connect } from "react-redux";
import { logIn, logOut } from "../Redux/Actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (e) => dispatch(logIn(e)),
    logout: () => dispatch(logOut()),
  };
};

const LoginForm = ({ login, logout }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input onChange={login} type="text" name="username" />
        <input onChange={login} type="password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
