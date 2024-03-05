import DisplayToDoList from "./ToDoList";
import DisplayCompletedItems from "./DisplayCompletedItems";

export default function DisplayLists({ items, setItems, getPriorityColor, PrioritySelector, MarkCompleted }) {
    return (
        <div className="flex-row">
            <div className='flex-col'>    
                <DisplayToDoList setItems={setItems} items={items} getPriorityColor={getPriorityColor} updatePriority={PrioritySelector}  markComplete={MarkCompleted} />
            </div>
            <div className='flex-col'>    
                <DisplayCompletedItems items={items} setItems={setItems}/>
            </div>
        </div>
    )
}