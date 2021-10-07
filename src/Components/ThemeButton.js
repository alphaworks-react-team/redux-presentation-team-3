import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { changeTheme } from "./../Redux/Actions/index";

const Button = styled.button`
  background-color: ${(props) => (props.theme === true ? "black" : "white")};
  color: ${(props) => (props.theme === true ? "white" : "black")};
`;

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTheme: () => dispatch(changeTheme()),
  };
};

const ThemeButton = ({ theme, changeTheme }) => {
  return (
    <div>
      <Button theme={theme} onClick={() => changeTheme()}>
        Click Me!
      </Button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeButton);
