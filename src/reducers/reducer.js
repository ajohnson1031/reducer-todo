export const initialState = {
  todos: [
    {
      item: "Learn all of coding",
      completed: false,
      id: 1
    },
    {
      item: "Build amazing app",
      completed: false,
      id: 2
    },
    {
      item: "Defeat Zuckerberg",
      completed: false,
      id: 3
    },
    {
      item: "Rule Earth",
      completed: false,
      id: 4
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_ITEM":
      state.map(item =>
        item.id === action.payload.id
          ? (item.completed = action.payload.completed)
          : null
      );
      return [...state];
    case "ADD_ITEM":
      return [...state, action.payload];
    default:
      break;
  }
};

// export const dispatch = action => {
//   initialState.todos = reducer(initialState.todos, action);
//   // console.log(initialState.todos);
// };
