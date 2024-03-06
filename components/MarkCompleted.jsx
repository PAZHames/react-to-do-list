export default function MarkCompleted({ setItems, targetId }) {

    const handleMarkComplete = (targetId) => {
        
        setItems(prevState => 
            prevState.map(item => 
                item.id === targetId ? { ...item, completed: true } : item
            )
        );
    };

    return (
        <button className="inline-button" onClick={() => handleMarkComplete(targetId)}>✅</button>
    );
}
