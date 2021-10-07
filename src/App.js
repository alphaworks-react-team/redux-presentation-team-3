import logo from "./logo.svg";
import { Provider, useSelector } from "react-redux";
import "./App.css";
import ThemeButton from "./Components/ThemeButton.js";
import Container from "./StyledComponents/Container.js"; 

function App() {

  const theme = useSelector(state=>state.theme)
  
  
  return (
    <Container theme={theme}>
      <ThemeButton />
    </Container>
  );
}

export default App;
