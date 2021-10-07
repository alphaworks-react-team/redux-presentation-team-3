import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const UserData = ({ user }) => {
  return (
    <div>
      <div>username:{user.username}</div>
      <div>password:{user.password}</div>
    </div>
  );
};

export default connect(mapStateToProps)(UserData);
