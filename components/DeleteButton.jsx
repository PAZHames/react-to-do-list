export default function  DeleteButton({ targetId, setItems }) {

    const handleDelete = (targetId) => {
       setItems(prevState => 
        prevState.filter(item => item.id !== targetId)
       )
    }

    return (
    <button className="inline-button" onClick={() => handleDelete(targetId)}>❌</button>
    );
}