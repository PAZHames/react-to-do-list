import { useState } from 'react';

export default function MarkCompleted({ onComplete, itemId }) {

    const [completedItems, setCompletedItems] = useState([]);

    setCompletedItems((prevState) => {
        // always use states to update - don't use variables - use prevState to ensure it is updating from the previous state 
        items.filter((item) => item.completed)
        // not working because items not sent in, prev state is 
    });

    return (
        <button className="inline-button" onClick={() => onComplete(itemId)}>✅</button>
        );
  }