import { connect } from "react-redux";
import "./App.css";
import ApiUsers from "./Components/ApiUsers";
import LoginForm from "./Components/LoginForm";
import ThemeButton from "./Components/ThemeButton.js";
import UserData from "./Components/UserData";
import Container from "./StyledComponents/Container.js";

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};

function App({ theme }) {
  return (
    <Container theme={theme}>
      <ThemeButton />
      <LoginForm />
      <UserData />
      <ApiUsers />
    </Container>
  );
}

export default connect(mapStateToProps)(App);
