import { useEffect, useReducer } from "react";
import { reducerFunction } from "../reducerFunction";

export const useTodoReducer = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];

  const [todos, dispatch] = useReducer(reducerFunction, initialState);

  const todosCount = todos.length;
  const pendingTodosCount = todos.filter((todo) => !todo.done).length;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (description) => {
    const newTodo = {
      id: Date.now(),
      description,
      done: false,
    };
    dispatch({ type: "Add Todo", payload: newTodo });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: "Delete Todo", payload: id });
  };

  const handleCompleteTodo = (id) => {
    dispatch({ type: "Complete Todo", payload: id });
  };

  const handleUpdateTodo = (id, newDescription) => {
    dispatch({
      type: "Update Todo",
      payload: { id, description: newDescription },
    });
  };

  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleAddTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  };
};
