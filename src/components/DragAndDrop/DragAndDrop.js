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
import { useTodoContext } from "../../context/todoContext";

function DragAndDrop() {
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const { todosFilter, setTodos } = useTodoContext();

  const handleDragEnd = (e) => {
    const { active, over } = e;

    if (active.id !== over.id) {
      setTodos((todos) => {
        const oldIndex = todos.findIndex((i) => i.id === active.id);
        const newIndex = todos.findIndex((i) => i.id === over.id);

        return arrayMove(todos, oldIndex, newIndex);
      });
    }
  };
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={todosFilter} strategy={verticalListSortingStrategy}>
        {todosFilter.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </SortableContext>
    </DndContext>
  );
}

export default DragAndDrop;
