import { useState } from "react";
import AddToDo from './AddToDo'; 
import DeleteButton from './DeleteButton'; 
import Search from "./Search"; 
import PrioritySelector from "./Priority"; 

export default function MainComponent() {
  const [items, setItems] = useState([]);
  const [originalItems, setOriginalItems] = useState([]);

  const addItem = (text) => {
    const newItem = { text, priority: 'medium' }; 
    const updatedItems = [...originalItems, newItem];
    setItems(updatedItems);
    setOriginalItems(updatedItems);
  };

  const deleteItem = (itemId) => {
    const updatedItems = originalItems.filter((_, index) => index !== itemId);
    setItems(updatedItems);
    setOriginalItems(updatedItems);
  };

  const searchForItem = (searchInput) => {
    if (!searchInput.trim()) {
      setItems(originalItems);
    } else {
      const filtered = originalItems.filter(item =>
        item.text.toLowerCase().includes(searchInput.toLowerCase()));
      setItems(filtered);
    }
  };

  const updatePriority = (index, newPriority) => {
    const updatedOriginalItems = originalItems.map((item, i) =>
      i === index ? { ...item, priority: newPriority } : item
    );
    setOriginalItems(updatedOriginalItems);

    setItems(updatedOriginalItems);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'red';
      case 'medium': return 'orange';
      case 'low': return 'green';
      default: return 'inherit';
    }
  };

  return (
    <div>
      <AddToDo onAdd={addItem} />
      <Search onSearch={searchForItem} />
      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ color: getPriorityColor(item.priority) }}>
            {item.text} 
            <PrioritySelector
              priority={item.priority}
              onChange={(newPriority) => updatePriority(index, newPriority)}
            />
            <DeleteButton onDelete={() => deleteItem(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
}
