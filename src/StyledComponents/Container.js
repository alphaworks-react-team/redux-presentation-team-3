import styled from "styled-components";

export const Container = styled.div`
  // min-width: ${(props) =>
  //   props.size === "sm"
  //     ? "275px"
  //     : props.size === "md"
  //     ? "550px"
  //     : props.size === "lrg"
  //     ? "825px"
  //     : "100%"};
  // max-width: ${(props) =>
  //   props.size === "sm"
  //     ? "275px"
  //     : props.size === "md"
  //     ? "550px"
  //     : props.size === "lrg"
  //     ? "825px"
  //     : "100%"};
  height: ${(props) => (props.height ? props.height : "auto")};
  width: ${(props) => (props.width ? props.width : "auto")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0")};
  margin-bottom: ${(props) => (props.marginBt ? props.marginBt : "0")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "0")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0")};
  display: ${(props) => (props.display ? props.display : "flex")};
  flex-wrap: ${(props) => {
    if (props.reverseWrap) return "wrap-reverse";
    else if (props.noWrap) return "noWrap";
    return "wrap";
  }};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) => {
    if (props.justifyContent) return props.justifyContent;
    if (props.justifyCenter) return "center";
    else if (props.justifyAround) return "space-around";
    else if (props.justifyBetween) return "space-between";
    else if (props.justifyEnd) return "flex-end";
    return "flex-start";
  }};
  align-items: ${(props) => {
    if (props.alignItems) return props.alignItems;
    if (props.alignCenter) return "center";
    else if (props.alignEnd) return "flex-end";
    return "flex-start";
  }};
  align-content: ${(props) =>
    props.contentAlign ? props.contentAlign : "none"};
  border-bottom: ${(props) => (props.borderBt ? props.borderBt : "none")};
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "none"};
  box-sizing: "border-box";
  background-color: ${(props) =>
    props.theme === true ? props.color || "#212024" : props.color2 || "white"};
  color: ${(props) => (props.theme === true ? "white" : "black")};
`;

export const Form = styled.form`
  height: ${(props) => (props.height ? props.height : "auto")};
  width: ${(props) => (props.width ? props.width : "auto")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  margin-bottom: ${(props) => (props.marginBt ? props.marginBt : "0")};
  display: ${(props) => (props.display ? props.display : "flex")};
  flex-wrap: ${(props) => {
    if (props.reverseWrap) return "wrap-reverse";
    else if (props.noWrap) return "noWrap";
    return "wrap";
  }};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) => {
    if (props.justifyContent) return props.justifyContent;
    if (props.justifyCenter) return "center";
    else if (props.justifyAround) return "space-around";
    else if (props.justifyBetween) return "space-between";
    else if (props.justifyEnd) return "flex-end";
    return "flex-start";
  }};
  align-items: ${(props) => {
    if (props.alignItems) return props.alignItems;
    if (props.alignCenter) return "center";
    else if (props.alignEnd) return "flex-end";
    return "flex-start";
  }};
  align-content: ${(props) =>
    props.contentAlign ? props.contentAlign : "none"};
  border-bottom: ${(props) => (props.borderBt ? props.borderBt : "none")};
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "none"};
  box-sizing: "border-box";
  background-color: ${(props) =>
    props.theme === true ? props.color || "#303134" : props.color2 || "white"};
  color: ${(props) => (props.theme === true ? "black" : "white")};
`;

export const Input = styled.input`
  height: ${(props) => (props.height ? props.height : "auto")};
  width: ${(props) => (props.width ? props.width : "auto")};
  color: ${(props) => (props.theme === true ? "white" : "black")};
  background-color: ${(props) =>
    props.theme === true ? props.color || "#303134" : props.color2 || "white"};
  color: ${(props) => (props.theme === true ? "black" : "black")};
  border: ${(props) => (props.border ? props.border : "auto")};
`;

export const Button = styled.button`
  height: ${(props) => (props.height ? props.height : "auto")};
  width: ${(props) => (props.width ? props.width : "auto")};
  color: ${(props) => (props.theme === true ? "white" : "white")};
  background-color: ${(props) =>
    props.theme === true ? props.color || "#303134" : props.color2 || "white"};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "none"};
`;
