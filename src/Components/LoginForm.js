import React from "react";
import { connect } from "react-redux";
import { logIn, logOut } from "../Redux/Actions";
import {
  Container,
  Form,
  Input,
  Button,
} from "../StyledComponents/Container.js";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    theme: state.theme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (e) => dispatch(logIn(e)),
    logout: () => dispatch(logOut()),
  };
};

const LoginForm = ({ login, logout, theme }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    logout();
  };

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
      <Form theme={theme} onSubmit={(e) => onSubmit(e)}>
        <Input
          theme={theme}
          height={"20px"}
          border={"1px solid #DFE1E5"}
          color={"#DFE1E5"}
          onChange={login}
          type="text"
          name="username"
          placeholder="Enter Name"
        />
        <Input
          theme={theme}
          height={"20px"}
          border={"1px solid #DFE1E5"}
          color={"#DFE1E5"}
          onChange={login}
          type="password"
          name="password"
          placeholder="Enter Password"
        />
        <Button
          type="submit"
          theme={theme}
          width={"100%"}
          color={"#F99245"}
          color2={"#4384F4"}
          border={"1px solid #DFE1E5"}
          borderRadius={"10px"}
          marginTop={"5px"}
          padding={"3px"}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
