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
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </form>
  );
}

