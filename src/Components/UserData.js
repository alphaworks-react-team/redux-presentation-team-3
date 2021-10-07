import React from "react";
import { useSelector } from "react-redux";

const UserData = () => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <div>username:{user.username}</div>
      <div>password:{user.password}</div>
    </div>
  );
};

export default UserData;
