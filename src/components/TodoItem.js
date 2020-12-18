import React from "react";

const TodoItem = ({ todo, dispatch }) => {
  return (
    <div
      className={`todo-item ${todo.completed === true ? "completed" : ""}`}
      onClick={() =>
        dispatch({
          type: "TOGGLE_ITEM",
          payload: { completed: !todo.completed, id: todo.id }
        })
      }
    >
      <p>{todo.item}</p>
    </div>
  );
};

export default TodoItem;
