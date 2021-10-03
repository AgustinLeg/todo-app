import React from "react";

import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import Todo from "../Todo/Todo";

function DragAndDrop({ todos, guardarTodos }) {
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
  );
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={todos} strategy={verticalListSortingStrategy}>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            guardarTodos={guardarTodos}
            todos={todos}
          />
        ))}
      </SortableContext>
    </DndContext>
  );
  function handleDragEnd(e) {
    const { active, over } = e;

    if (active.id !== over.id) {
      guardarTodos((todos) => {
        const oldIndex = todos.findIndex((i) => i.id === active.id);
        const newIndex = todos.findIndex((i) => i.id === over.id);

        return arrayMove(todos, oldIndex, newIndex);
      });
    }
  }
}

export default DragAndDrop;
