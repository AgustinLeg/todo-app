import React, { useState } from "react";
import { Container, BotonesContainer, BotonesLinks } from "./styles";

const ActionsContainer = ({ todos, guardarTodos, setFilter, count }) => {
  const [filterstatus, setFilterStatus] = useState("all");

  const toggleFilter = (status) => {
    let filterContainer;
    if (status === "active") {
      filterContainer = todos.filter((todo) => !todo.completado);
    } else if (status === "completed") {
      filterContainer = todos.filter((todo) => todo.completado);
    } else {
      filterContainer = todos;
    }
    setFilterStatus(status);
    setFilter(filterContainer);
  };

  const clearCompleted = () => {
    let clearCompleted = todos.filter((todo) => !todo.completado);
    guardarTodos(clearCompleted);
  };

  return (
    <Container>
      <span>{count} items left</span>
      <BotonesContainer>
        <BotonesLinks
          onClick={() => toggleFilter("all")}
          className={filterstatus === "all" ? "active" : null}
        >
          All
        </BotonesLinks>
        <BotonesLinks
          onClick={() => toggleFilter("active")}
          className={filterstatus === "active" ? "active" : null}
        >
          Active
        </BotonesLinks>
        <BotonesLinks
          onClick={() => toggleFilter("completed")}
          className={filterstatus === "completed" ? "active" : null}
        >
          Completed
        </BotonesLinks>
      </BotonesContainer>
      <BotonesLinks onClick={() => clearCompleted()}>
        Clear Completed
      </BotonesLinks>
    </Container>
  );
};

export default ActionsContainer;
