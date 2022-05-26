import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import "./App.css";
import StyledButton, {
  FancyButton,
  SubmitButton,
  DarkButton,
} from "./components/Button/Button";

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
};

const GlobalStyles = createGlobalStyle`
  button {
    font-family: "Roboto"
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <StyledButton>Button</StyledButton>
        <div>
          <br />
        </div>
        <StyledButton type="submit" variant="outline">
          Button
        </StyledButton>
        <div>
          <br />
        </div>
        <FancyButton as="a">Button</FancyButton>
        <div>
          <br />
        </div>
        <SubmitButton>Submit</SubmitButton>
        <div>
          <br />
        </div>
        <DarkButton>Dark button</DarkButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
