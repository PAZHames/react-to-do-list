import DeleteButton from "./DeleteButton";

export default function DisplayCompletedItems ({ items, setItems }) {
    return (
        <>
        <h2>Complete</h2>
        <ul >
            {items
            .filter((item) => item.completed)
            .map((item, index) => (
            <li key={index} className="completed-list-item">
            {item.text} 
            <span className="to-do-buttons">
                <DeleteButton itemId={item.id} setItems={setItems}/>
            </span>
          </li>
            ))}
        </ul>
        </>
    )
}