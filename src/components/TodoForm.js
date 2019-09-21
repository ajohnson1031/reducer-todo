import React, { useState } from "react";

const TodoForm = ({ dispatch }) => {
  const [itemText, setItemText] = useState("");

  const handleClick = e => {
    e.preventDefault();
    if (itemText === "") {
    } else {
      dispatch({
        type: "ADD_ITEM",
        payload: { item: itemText, completed: false, id: new Date().getTime() }
      });
    }
  };

  const handleChange = e => {
    setItemText(e.target.value);
  };

  return (
    <form action="">
      <input
        type="text"
        name="itemText"
        placeholder="Enter item to add..."
        value={itemText}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleClick}>
        Add Item
      </button>
    </form>
  );
};

export default TodoForm;
