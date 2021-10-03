import React, { useState } from "react";
import shortid from "shortid";

import ButtonCheck from "../Stateless/Buttons/ButtonCheck";
import { FormularioStyle, SearchBar } from "./styles";

const Formulario = ({ todos, guardarTodos, setError }) => {
  const [texto, guardarTexto] = useState("");

  const handleChange = (e) => {
    guardarTexto(e.target.value);
  };

  const handleChangeChecked = e => {
    if(e.type === 'submit') e.preventDefault();
    if (texto.trim() === "") {
      setError(true);
      e.target.checked = false;
      setTimeout(() => {
        setError(false);
      }, 1500);
    } else {
      let todoStorage = JSON.parse(localStorage.getItem("todos"));
      if (todoStorage) {
        guardarTodos(todoStorage);
      }
      guardarTodos([
        ...todos,
        {
          id: shortid.generate(),
          texto,
          completado: false,
        },
      ]);
      guardarTexto("");
      setTimeout(() => {
        e.target.checked = false;
      }, 300);
    }
  };

  return (
    <FormularioStyle
      onSubmit={handleChangeChecked}
    >
      <SearchBar>
        <ButtonCheck action={handleChangeChecked} />
        <input
          type="text"
          name="searchTodo"
          id="searchTodo"
          placeholder="Create a new todo..."
          value={texto}
          onChange={handleChange}
        />
      </SearchBar>
    </FormularioStyle>
  );
};

export default Formulario;
