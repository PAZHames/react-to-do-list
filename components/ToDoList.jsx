// import { useState } from 'react';
import PrioritySelector from './Priority';
import MarkCompleted from './MarkCompleted';
import DeleteButton from './DeleteButton';

export default function DisplayToDoList ({items, setItems, getPriorityColor, updatePriority, markComplete}) {
    // destructured the props to access the specific one I need
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

            <MarkCompleted onComplete={() => markComplete(index)} />

            <DeleteButton itemId={item.id} setItems={setItems}/>
          </li>
        ))}
      </ul>
    )
}