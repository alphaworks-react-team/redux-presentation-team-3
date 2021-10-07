import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { changeTheme } from './../Redux/Actions';
import styled from "styled-components";


const Button = styled.button`
  background-color: ${(props) => (props.theme === true ? "black" : "white")};
  color: ${(props) => (props.theme === true ? "white" : "black")};
`;

const ThemeButton = () => {
  const theme = useSelector(state=>state.theme)
  const dispatch = useDispatch();
  
  return (
    <div>
      <Button theme={theme} onClick={() => dispatch(changeTheme(!theme))}>
        Click Me!
      </Button>
    </div>
  );
}

export default ThemeButton
