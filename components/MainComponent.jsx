import { useState, useEffect } from "react";
import AddToDo from './AddToDo'; 
import DeleteButton from './DeleteButton'; 
import Search from "./Search"; 
import PrioritySelector from "./Priority"; 
import MarkCompleted from "./MarkCompleted";

export default function MainComponent() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('todos');
    return savedItems ? JSON.parse(savedItems) :[];
  });
  const [originalItems, setOriginalItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(items));
    setOriginalItems(items);
},[items]);


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

  const markCompleted = (completed) => {
    // add in higher function to mark item as completed - and move to completed items list?
  }


  return (
    <div>
      <AddToDo onAdd={addItem} />
      <Search onSearch={searchForItem} />
      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ color: getPriorityColor(item.priority) }}>
            <MarkCompleted 
            completed = {item.completed}
            onChange={(completed) => updateCompleted(completed)}
            />
            {/* check use of this! probably a bit dodgy! */}
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
