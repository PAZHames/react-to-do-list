import AddToDo from "./AddToDo";
import Search from "./Search";

export default function InputElements({ items, setItems }) {
    return (
    <div className="searches">
      <AddToDo onAdd={AddToDo} items={items} setItems={setItems} />
      <Search setItems={setItems} />
      </div>
    )
}