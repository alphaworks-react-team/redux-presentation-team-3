import React from "react";
import { connect } from "react-redux";
import { Container } from "../StyledComponents/Container.js";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    theme: state.theme,
  };
};

const UserData = ({ user, theme }) => {
  return (
    <Container
      theme={theme}
      color={"#303134"}
      height={"200px"}
      width={"300px"}
      justifyCenter
      alignCenter
      border={"1px solid #DFE1E5"}
      borderRadius={"10px"}
    >
      <Container theme={theme} color={"#303134"} width={"50%"}>
        <div>User:{user.username}</div>
        <div>Password:{user.password}</div>
      </Container>
    </Container>
  );
};

export default connect(mapStateToProps)(UserData);
