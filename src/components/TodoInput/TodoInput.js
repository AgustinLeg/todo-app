import React, { useState } from "react";
import shortid from "shortid";
import { useTodoContext } from "../../context/todoContext";
import useForm from "../../hooks/useForm";

import { ButtonCheck } from "../../styles/index";
import { FormularioStyle, SearchContainer } from "./styles";

const TodoInput = () => {
  const { values, handleChange, reset } = useForm({
    text: "",
    id: "",
    isCompleted: false,
  });
  const [error, setError] = useState(false);
  const { addTodo } = useTodoContext();
  const { text } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      setError(true);
      return;
    }
    setError(false)
    addTodo({ ...values, id: shortid.generate() });
    reset();
  };

  return (
    <>
    <FormularioStyle onSubmit={handleSubmit} className={error ? "error" : "pass"}>
      <SearchContainer >
        <ButtonCheck type="submit" />
        <input
          type="text"
          name="text"
          id="searchTodo"
          placeholder="Create a new todo..."
          value={text}
          onChange={handleChange}
        />
        {error && <div className="error-container"><img src="../images/warning.svg" alt="error icon" /></div>}
      </SearchContainer>
    </FormularioStyle>
      
      </>
  );
};

export default TodoInput;
