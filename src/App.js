import React, { useReducer } from "react";
import { reducer, initialState } from "reducers/reducer";
import TodoList from "components/TodoList";
import TodoForm from "components/TodoForm";

function App() {
  const [todoState, dispatch] = useReducer(reducer, initialState.todos);
  return (
    <div className="App">
      <header>
        <h1>Todo List:</h1>
        <TodoForm dispatch={dispatch} />
      </header>
      <TodoList todoState={todoState} dispatch={dispatch} />
    </div>
  );
}

export default App;
