export default function  DeleteButton({ onDelete, itemId }) {
    return (
    <button onClick={() => onDelete(itemId)}>x</button>
    );
}