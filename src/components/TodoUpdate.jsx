import { useState, useRef } from "react";
import { FaEdit } from "react-icons/fa";
import { FaSave } from "react-icons/fa";

export function TodoUpdate({ todo, handleUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(null);
  const [newDescription, setNewDescription] = useState(todo.description);
  const [disabled, setDisabled] = useState(true);
  const focusInputRef = useRef();

  const onSubmitUpdate = (e) => {
    e.preventDefault();
    focusInputRef.current.focus();
  };

  const handleEditClick = (id) => {
    setIsEditing(id);
    setDisabled(!disabled);
  };

  const handleUpdate = (id) => {
    handleUpdateTodo(id, newDescription);
    setIsEditing(null);
    setDisabled(!disabled);
  };

  return (
    <form onSubmit={onSubmitUpdate}>
      <input
        type="text"
        className={`input-update ${todo.done ? "text-decoration-dashed" : ""}`}
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        placeholder="¿Como quieres editar la tarea?"
        ref={focusInputRef}
        readOnly={disabled}
      />

      {isEditing === todo.id ? (
        <button className="btn-save" onClick={() => handleUpdate(todo.id)}>
          <FaSave />
        </button>
      ) : (
        <button
          className="btn-edit"
          type="submit"
          onClick={() => handleEditClick(todo.id, todo.description)}
        >
          <FaEdit />
        </button>
      )}
    </form>
  );
}
