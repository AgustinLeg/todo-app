import React from "react";
import { useTodoContext } from "../../context/todoContext";
import { Container, BotonesContainer, BotonesLinks } from "./styles";

const ActionsContainer = () => {
  const { count, filterStatus, filterTodos, clearCompleted } = useTodoContext();

  return (
    <Container>
      <span>{count} items left</span>
      <BotonesContainer>
        <BotonesLinks
          onClick={filterTodos}
          className={filterStatus === "" ? "active" : null}
        >
          All
        </BotonesLinks>
        <BotonesLinks
          onClick={() => filterTodos("active")}
          className={filterStatus === "active" ? "active" : null}
        >
          Active
        </BotonesLinks>
        <BotonesLinks
          onClick={() => filterTodos("completed")}
          className={filterStatus === "completed" ? "active" : null}
        >
          Completed
        </BotonesLinks>
      </BotonesContainer>
      <BotonesLinks onClick={clearCompleted}>Clear Completed</BotonesLinks>
    </Container>
  );
};

export default ActionsContainer;
