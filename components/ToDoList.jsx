// import { useState } from 'react';
import PrioritySelector from './Priority';
import MarkCompleted from './MarkCompleted';
import DeleteButton from './DeleteButton';

export default function DisplayToDoList ({ items, setItems, getPriorityColor, updatePriority}) {
    console.log(items);
    return (
        <ul>
        {items
        .filter((item) => !item.completed)
        .map((item, index) => (
          <li key={index} style={{ color: getPriorityColor(item.priority) }}>
            
            {item.text} 

            <PrioritySelector
              priority={item.priority}
              onChange={(newPriority) => updatePriority(index, newPriority)}
            />

            <MarkCompleted setItems={setItems} />

            <DeleteButton itemId={item.id} setItems={setItems}/>
          </li>
        ))}
      </ul>
    )
}