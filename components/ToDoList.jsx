// import { useState } from 'react';
import PrioritySelector from './Priority';
import MarkCompleted from './MarkCompleted';
import DeleteButton from './DeleteButton';

export default function DisplayToDoList ({ items, setItems, getPriorityColor, updatePriority}) {
    console.log(items);
    return (
        <>
        <h2>To Dos</h2>
        <ul>
        {items
        .filter((item) => !item.completed)
        .map((item, index) => (
          <li key={index} style={{ color: getPriorityColor(item.priority) }}>
            
            {item.text} 

            
            <span className='to-do-buttons'>
                <PrioritySelector
                priority={item.priority}
                onChange={(newPriority) => updatePriority(index, newPriority)}
                />
                <MarkCompleted setItems={setItems} />
                <DeleteButton targetId={item.id} setItems={setItems}/>
            </span>

            
          </li>
        ))}
      </ul>
      </>
    )
}