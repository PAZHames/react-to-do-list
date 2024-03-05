export default function MarkCompleted({ setItems, onComplete, itemId }) {
    
    const handleMarkComplete = () => {
        onComplete(itemId);
        
        setItems(prevState => 
            prevState.map(item => 
                item.id === itemId ? { ...item, completed: true } : item
            )
        );
    };

    return (
        <button className="inline-button" onClick={handleMarkComplete}>✅</button>
    );
}
