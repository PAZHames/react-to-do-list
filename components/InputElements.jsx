import AddToDo from "./AddToDo";
import Search from "./Search";

export default function InputElements({ setItems }) {
    return (
    <div className="searches">
      <AddToDo onAdd={AddToDo} setItems={setItems} />
      <Search setItems={setItems} />
      </div>
    )
}