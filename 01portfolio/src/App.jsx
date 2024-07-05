import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Skills from "./components/Skills";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Navbar></Navbar>
        <Body>
          <Hero></Hero>
          <Skills></Skills>
        </Body>
      </ThemeProvider>
    </>
  );
}

export default App;
