import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@emotion/react";

import DragAndDrop from "./components/DragAndDrop/DragAndDrop";
import Header from "./components/Header/Header";
import TodoInput from "./components/TodoInput/TodoInput";
import ActionsContainer from "./components/ActionsButtons/ActionsContainer";
import TodoProvider from "./context/todoContext";

import {
  lightTheme,
  darkTheme,
  MainStyles,
  ContainerStyles,
  ListaStyles,
  Span,
  FooterStyles,
} from "./styles/index";

function App() {
  let themeInicial = JSON.parse(localStorage.getItem("darktheme")) || false;
  const [darktheme, setDarkTheme] = useState(themeInicial);
  useEffect(() => {
    localStorage.setItem("darktheme", JSON.stringify(darktheme));
  }, [darktheme]);

  return (
    <TodoProvider>
      <ThemeProvider theme={darktheme ? darkTheme : lightTheme}>
        <MainStyles>
          <ContainerStyles>
            <Header darktheme={darktheme} setDarkTheme={setDarkTheme} />
            <TodoInput />
            <ListaStyles>
              <DragAndDrop />
              <ActionsContainer />
            </ListaStyles>

            <Span>Drag and drop to reorder list</Span>
          </ContainerStyles>
        </MainStyles>
        <FooterStyles>
          <div className="attribution">
            Challenge by
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor
            </a>
            . Coded by
            <a
              href="https://github.com/AgustinLeg"
              target="_blank"
              rel="noreferrer"
            >
              AgustinLeg
            </a>
            .
          </div>
        </FooterStyles>
      </ThemeProvider>
    </TodoProvider>
  );
}

export default App;
