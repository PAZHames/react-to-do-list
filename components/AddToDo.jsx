import { useState } from "react";

export default function AddToDo ({ items, setItems }) {

const [inputText, setInputText] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();
    if (inputText.trim()) {
      addItem(inputText);
      setInputText("");
    }
  };

  const addItem = (text) => {
    setItems([...items, { text, priority: 'medium', completed: false }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="toDoInput">Add:</label>
      <input
        type="text"
        name="toDoInput"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </form>
  );
}