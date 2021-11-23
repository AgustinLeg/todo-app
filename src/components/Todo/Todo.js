import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { Task } from "../Todo/styles";
import {ButtonCheck} from "../../styles/index";
import { useTodoContext } from "../../context/todoContext";

function Todo({todo}) {
  const { id, text, isCompleted } = todo;
  const {deleteTodo, todoCompleted} = useTodoContext()

  const { attributes, listeners, setNodeRef, transform, transition } =useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "pointer",
  };



  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Task>
        <ButtonCheck
          onClick={() => todoCompleted(id)}
          className={isCompleted ? "active" : null}
        />
        <span className={isCompleted ? "completed" : null}>{text}</span>
        <button onClick={() => deleteTodo(id)} className="btnDelete">
          <img src="./images/icon-cross.svg" alt="icon cross"/>
        </button>
      </Task>
    </div>
  );
}

export default Todo;
