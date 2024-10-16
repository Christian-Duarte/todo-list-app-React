export const reducerFunction = (initialState, action) => {
  switch (action.type) {
    case "Add Todo":
      return [...initialState, action.payload];

    case "Delete Todo":
      return initialState.filter((todo) => todo.id !== action.payload);

    case "Complete Todo":
      return initialState.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );

    case "Update Todo":
      return initialState.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, description: action.payload.description }
          : todo
      );

    default:
      return initialState;
  }
};
