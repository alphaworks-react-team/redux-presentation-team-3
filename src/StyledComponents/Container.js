import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => (props.theme === true ? "black" : "white")};
  color: ${(props) => (props.theme === true ? "white" : "black")};
`;

export default Container;
