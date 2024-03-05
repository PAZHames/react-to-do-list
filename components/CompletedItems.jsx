import DeleteButton from "./DeleteButton";

export default function CompletedItems ({ items }) {
    return (
        <ul>
            {items
            .filter((item) => item.completed)
            .map((item, index) => (
            <li key={index}>
            {item.text} 
            <DeleteButton/>
          </li>
            ))}
        </ul>
    )
}