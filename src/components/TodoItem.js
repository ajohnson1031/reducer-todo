import React from "react";
import { dispatch } from "reducers/reducer";

const TodoItem = ({ todo }) => {
  return (
    <div
      className="todo-item"
      onClick={e =>
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
