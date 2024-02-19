import { useState } from "react";

export default function AddToDo ({ onAdd }) {

const [inputText, setInputText] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();
    if (inputText.trim()) {
      onAdd(inputText);
      setInputText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="toDoInput">Add Item:</label>
      <input
        type="text"
        name="toDoInput"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </form>
  );
}

