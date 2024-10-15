import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { useTodoReducer } from "./Hooks/useTodoReducer";
import "./App.css";

export const App = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleAddTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useTodoReducer();

  return (
    <div className="card-to-do">
      <h1>To-Do List App</h1>
      <div className="counter-todos">
        <h3>
          N° Tareas: <span>{todosCount}</span>
        </h3>
        <h3>
          Pendientes: <span>{pendingTodosCount}</span>
        </h3>
      </div>

      <div className="add-todo">
        <h3>Agregar Tarea</h3>
        <TodoForm handleAddTodo={handleAddTodo} />
      </div>

      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onCompleteTodo={handleCompleteTodo}
        onUpdateTodo={handleUpdateTodo}
      />
    </div>
  );
};
