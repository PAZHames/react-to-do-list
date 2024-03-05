import { useState } from "react";

export default function AddToDo ({ setItems }) {

const [inputText, setInputText] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();
    if (inputText.trim()) {
      addItem(inputText);
      setInputText("");
    }
  };

  const addItem = (text) => {
    setItems((prevState) => {[...prevState, { text, priority: 'medium', completed: false }]});
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