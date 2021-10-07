import { connect } from "react-redux";
import "./App.css";
import ApiUsers from "./Components/ApiUsers";
import LoginForm from "./Components/LoginForm";
import ThemeButton from "./Components/ThemeButton.js";
import UserData from "./Components/UserData";
import Container from "./StyledComponents/Container.js";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <Container theme={theme}>
      <ThemeButton />
      <LoginForm />
      <UserData />
      <ApiUsers />
    </Container>
  );
}

export default App;
