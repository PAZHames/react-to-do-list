import UseLocalData from '../components/UseLocalData';
import Heading from "../components/Heading";
import InputElements from "../components/InputElements";
// import ShowCompleted from "../components/ShowCompleted";
import Loading from '../components/Loading';
import DisplayToDoList from "../components/ToDoList";
import CompletedItems from "../components/CompletedItems";

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
    <>
    <Heading/>
    <InputElements setItems={setItems}/>
    {/* <ShowCompleted showCompleted={showCompleted} setShowCompleted={setShowCompleted}/> */}
    <Loading isPending={isPending}/>
    <DisplayToDoList setItems={setItems} />
    <CompletedItems items={items}/>
    </>
    )
}