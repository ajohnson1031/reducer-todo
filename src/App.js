import React from "react";
import TodoList from "components/TodoList";
import TodoForm from "components/TodoForm";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo List:</h1>
        <TodoForm />
      </header>
      <TodoList />
    </div>
  );
}

export default App;
