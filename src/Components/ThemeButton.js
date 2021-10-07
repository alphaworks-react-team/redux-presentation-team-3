import React from "react";
import styled from "styled-components";
import { changeTheme } from "./../Redux/Actions/index";
import { useSelector, useDispatch } from "react-redux";

const Button = styled.button`
  background-color: ${(props) => (props.theme === true ? "black" : "white")};
  color: ${(props) => (props.theme === true ? "white" : "black")};
`;

const ThemeButton = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div>
      <Button theme={theme} onClick={() => dispatch(changeTheme())}>
        Click Me!
      </Button>
    </div>
  );
};

export default ThemeButton;
