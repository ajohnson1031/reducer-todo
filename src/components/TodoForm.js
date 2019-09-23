import React, { useState } from "react";

const TodoForm = ({ dispatch }) => {
  const [itemText, setItemText] = useState("");

  const handleClick = e => {
    e.preventDefault();

    if (e.target.name === "add") {
      if (itemText === "") {
      } else {
        dispatch({
          type: "ADD_ITEM",
          payload: {
            item: itemText,
            completed: false,
            id: new Date().getTime()
          }
        });
        setItemText("");
      }
    }

    if (e.target.name === "clear") {
      dispatch({ type: "CLEAR_ITEMS" });
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
      <button
        className="add-button"
        name="add"
        type="submit"
        onClick={handleClick}
      >
        Add Item
      </button>
      <button
        className="clear-button"
        name="clear"
        type="submit"
        onClick={handleClick}
      >
        Clear
      </button>
    </form>
  );
};

export default TodoForm;
