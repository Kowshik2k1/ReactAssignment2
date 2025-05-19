import React, { useState } from "react";

const ListAndEvents = () => {
  const [items, setItems] = useState(["React", "JavaScript", "CSS"]);
  const [newItems, setNewItems] = useState("");

  const addItem = () => {
    if (newItems.trim() !== "") {
      setItems([...items, newItems.trim()]);
      setNewItems("");
    }
  };

  const removeItem = (index) => {
    setItems([...items.slice(0, index), ...items.slice(index + 1)]);
  };

  return (
    <>
      <h1>To-Do-List</h1>
      <input
        value={newItems}
        onChange={(e) => setNewItems(e.target.value)}
      />{" "}
      <button
        onClick={() => {
          addItem();
        }}
      >
        Add new item
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => removeItem(index)}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListAndEvents;
