import { useContext, createContext, useState, useEffect } from "react";

const TodoContext = createContext();
export const useTodoContext = () => useContext(TodoContext);

const TodoProvider = ({ children }) => {
  let initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(initialState);
  const [todosFilter, setTodosFilter] = useState(todos);
  const [count, setCount] = useState(0)
  const [filterStatus, setFilterStatus] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    setTodosFilter(todos)
    setCount(todos.length)
    setFilterStatus('')
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const todoCompleted = (id) => {
    const completed = todos.map((todo) => {
      if (todo.id === id) todo.isCompleted = !todo.isCompleted;
      return todo;
    });
    setTodos(completed);
  };

  const filterTodos = (filter) => {
    let listFilter = []
    if (filter === "active") {
      listFilter = todos.filter((todo) => !todo.isCompleted);
    } else if (filter === "completed") {
      listFilter = todos.filter((todo) => todo.isCompleted);
    } else {
      listFilter = todos;
    }
    setTodosFilter(listFilter);
    setFilterStatus(filter)
    setCount(listFilter.length);

  };

  const clearCompleted = () => {
    let cleanList = todos.filter((todo) => !todo.isCompleted);
    setTodos(cleanList);
  };

  
  return (
    <TodoContext.Provider
      value={{
        todos,
        todosFilter,
        count,
        filterStatus,
        setTodos,
        addTodo,
        deleteTodo,
        todoCompleted,
        filterTodos,
        clearCompleted
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
