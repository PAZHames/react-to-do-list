import { useState } from "react";
import AddToDo from './AddToDo';
import DeleteButton from './DeleteButton';

export default function MainComponent () {

const [items, setItems] = useState([]);

  const addItem = newItem => {
    setItems([...items, newItem]);
  };

  const deleteItem = itemId => {
    setItems(items.filter((_, index) => index !== itemId));
  };

  return (
    <div>
      <AddToDo onAdd={addItem} />
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

