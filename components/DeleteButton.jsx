export default function  DeleteButton({ itemId, setItems }) {

    const handleDelete = (targetId) => {
       setItems(prevState => 
        prevState.filter(item => item.id !== targetId)
       )
    }

    return (
    <button className="inline-button" onClick={() => handleDelete(itemId)}>❌</button>
    );
}