import { useState } from "react";

export default function AddToDo () {

const [items, setItems] = useState([]);
const [inputText, setTextContent] = useState("");

function handleSubmit(event) {
    setTextContent(event.target.value);
}

function addItem(event) {
    event.preventDefault();
    setItems([...items, inputText]);
    setTextContent("");
}

    return (
        <>
        <form onSubmit={addItem}>
        <input type="text" name="inputText" value={inputText}
          onChange={handleSubmit} />
        </form>
        <ul>
            {items.map((item,index) => <li key={index}>{item}</li>)}
        </ul>
        </>
    )
}

