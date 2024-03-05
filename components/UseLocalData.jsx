import { useState, useEffect } from 'react';

export default function UseLocalData() {
    const [items, setItems] = useState(() => {
        const savedItems = localStorage.getItem('todos');
        return savedItems ? JSON.parse(savedItems) :[];
      });
      const [isPending, setIsPending] = useState(true);


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(items));
        setItems(items);
        setIsPending(false);
    },[items]);
    return {isPending, items, setItems};
}

