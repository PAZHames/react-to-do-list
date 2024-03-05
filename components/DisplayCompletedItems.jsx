import DeleteButton from "./DeleteButton";

export default function DisplayCompletedItems ({ items, setItems }) {
    return (
        <>
        <h2>Complete</h2>
        <ul>
            {items
            .filter((item) => item.completed)
            .map((item, index) => (
            <li key={index}>
            {item.text} 
            <DeleteButton itemId={item.id} setItems={setItems}/>
          </li>
            ))}
        </ul>
        </>
    )
}