import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@emotion/react";

import DragAndDrop from "./components/DragAndDrop/DragAndDrop";
import Header from "./components/Header/Header";
import Formulario from "./components/Formulario/Formulario";
import Error from "./components/Error/Error";
import ActionsContainer from "./components/ActionsButtons/ActionsContainer";

import {
  lightTheme,
  darkTheme,
  MainStyles,
  ContainerStyles,
  ListaStyles,
  Span,
  FooterStyles
} from "./styles/index";

function App() {
  let todosInicial = JSON.parse(localStorage.getItem("todos"))|| []
  let themeInicial = JSON.parse(localStorage.getItem("darktheme")) || false

  const [darktheme, setDarkTheme] = useState(themeInicial);
  const [todos, guardarTodos] = useState(todosInicial);
  const [filter, setFilter] = useState(todosInicial);
  const [error, setError] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("darktheme", JSON.stringify(darktheme));
    setFilter(todos);
  }, [todos, darktheme]);

  return (
    <ThemeProvider theme={darktheme ? darkTheme : lightTheme}>
      <MainStyles>
        {error ? <Error msg="Error, Campo Vacio!" /> : null}
        <ContainerStyles>
          <Header darktheme={darktheme} setDarkTheme={setDarkTheme} />
          <Formulario
            todos={todos}
            guardarTodos={guardarTodos}
            setError={setError}
          />
          <ListaStyles>
            <DragAndDrop todos={filter} guardarTodos={guardarTodos} />
            <ActionsContainer
              todos={todos}
              guardarTodos={guardarTodos}
              setFilter={setFilter}
              count={filter.length}
            />
          </ListaStyles>

          <Span>Drag and drop to reorder list</Span>
        </ContainerStyles>
      </MainStyles>
      <FooterStyles>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/AgustinLeg" target="_blank" rel="noreferrer">AgustinLeg</a>.
        </div>
      </FooterStyles>
    </ThemeProvider>
  );
}

export default App;
