import './index.css';

import UseLocalData from '../components/UseLocalData';
import Heading from "../components/Heading";
import InputElements from "../components/InputElements";
// import ShowCompleted from "../components/ShowCompleted";
import Loading from '../components/Loading';
import DisplayToDoList from "../components/ToDoList";
import getPriorityColor from '../components/SwitchPriorityColor';
import PrioritySelector from '../components/Priority';
import CompletedItems from "../components/CompletedItems";
import MarkCompleted from '../components/MarkCompleted';


export default function App() {
const {isPending, items, setItems} = UseLocalData();
    // const [items, setItems] = useState(() => {
    //     const savedItems = localStorage.getItem('todos');
    //     return savedItems ? JSON.parse(savedItems) :[];
    //   });
    // const [originalItems, setOriginalItems] = useState([]);
    // const [completedItems, setCompletedItems] = useState([]);
    // const [showCompleted, setShowCompleted] = useState(false);
    // const [isPending, setIsPending] = useState(true);
    

    return (
    
    <main>
    <Heading/>
    <InputElements setItems={setItems}/>
    {/* <ShowCompleted showCompleted={showCompleted} setShowCompleted={setShowCompleted}/> */}
    <Loading isPending={isPending}/>
    <DisplayToDoList setItems={setItems} items={items} getPriorityColor={getPriorityColor} updatePriority={PrioritySelector}  markComplete={MarkCompleted} />
    <CompletedItems items={items}/>
    </main>

    )
}