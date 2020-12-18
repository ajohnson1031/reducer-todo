import React from "react";
import TodoItem from "components/TodoItem";

const TodoList = ({ todoState, dispatch }) => {
  console.log(todoState);
  return (
    <div className="todo-list">
      {todoState.map(item => {
        return <TodoItem key={item.id} todo={item} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default TodoList;
