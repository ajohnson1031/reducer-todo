import React, { useState } from "react";

const todos = [
  {
    item: "Learn all of coding",
    completed: false,
    id: new Date().getTime()
  },
  {
    item: "Build amazing app",
    completed: false,
    id: new Date().getTime()
  },
  {
    item: "Defeat Zuckerberg",
    completed: false,
    id: new Date().getTime()
  },
  {
    item: "Rule Earth",
    completed: false,
    id: new Date().getTime()
  }
];

export const [todosState] = useState(todos);

export const TodoReducer = (state, action) => {
  return state;
};
