import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { Task } from "../Todo/styles";
import ButtonCheck from "../Stateless/Buttons/ButtonCheck";

function Todo({ todo, guardarTodos, todos }) {
  const { id, texto, completado } = todo;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "pointer",
  };
  const handleChangeChk = (e) => {
    const id = e.target.getAttribute("data-id");
    const completed = todos.map((todo) => {
      if (todo.id === id) todo.completado = !todo.completado;
      return todo;
    });
    guardarTodos(completed);
  };
  const eliminarTodo = (e) => {
    const id = e.target.getAttribute("data-id");
    const todosActualizado = todos.filter((todo) => todo.id !== id);
    guardarTodos(todosActualizado);
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Task>
        <ButtonCheck
          action={handleChangeChk}
          dataId={id}
          checked={completado}
        />
        <span className={completado ? "complete" : null}>{texto}</span>
        <button onClick={eliminarTodo}>
          <img src="./images/icon-cross.svg" alt="icon cross" data-id={id} />
        </button>
      </Task>
    </div>
  );
}

export default Todo;
