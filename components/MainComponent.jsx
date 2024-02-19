import { useState } from "react";
import AddToDo from './AddToDo';
import DeleteButton from './DeleteButton';
import Search from "./Search";

export default function MainComponent () {

const [items, setItems] = useState([]);
const [originalItems, setOriginalItems] = useState([]);


const addItem = newItem => {
    const updatedItems = [...originalItems, newItem];
    setItems(updatedItems);
    setOriginalItems(updatedItems);
  };

  const deleteItem = itemId => {
    const updatedItems = originalItems.filter((_, index) => index !== itemId);
    setItems(updatedItems);
    setOriginalItems(updatedItems);
  };

//   const editItem = itemId => {

//   }
    const searchForItem = searchInput => {
        if (!searchInput.trim()) {
        setItems(originalItems);
        } else {
        const filtered = originalItems.filter(item => 
            item.toLowerCase().includes(searchInput.toLowerCase()));
        setItems(filtered);
        }
    };

  return (
    <div>
      <AddToDo onAdd={addItem} />
      <Search onSearch={searchForItem} />
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <DeleteButton onDelete={deleteItem} itemId={index} />
          </li>
        ))}
      </ul>
    </div>
  );
}

