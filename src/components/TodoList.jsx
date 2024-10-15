import { TodoItem } from "./TodoItem";

export function TodoList({
  todos,
  onUpdateTodo,
  onDeleteTodo,
  onCompleteTodo,
}) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleUpdateTodo={onUpdateTodo}
          handleDeleteTodo={onDeleteTodo}
          handleCompleteTodo={onCompleteTodo}
        />
      ))}
    </ul>
  );
}
