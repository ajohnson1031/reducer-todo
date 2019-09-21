import React, { useReducer } from "react";
import { reducer, initialState } from "reducers/reducer";
import TodoItem from "components/TodoItem";

const TodoList = () => {
  const [todoState, dispatch] = useReducer(reducer, initialState.todos);
  console.log(todoState);
  return (
    <div className="todo-list">
      {todoState.map(item => {
        return <TodoItem key={item.id} todo={item} />;
      })}
    </div>
  );
};

export default TodoList;
