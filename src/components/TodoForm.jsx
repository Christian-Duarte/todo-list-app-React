import { useState, useRef } from "react";

export function TodoForm({ handleAddTodo }) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      handleAddTodo(inputValue);
      setInputValue("");
      inputRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input-add"
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Escribir una tarea..."
      />
      <button className="btn-add" type="submit">
        Agregar
      </button>
    </form>
  );
}
