// test commit

import './index.css';

import UseLocalData from '../components/UseLocalData';
import Heading from "../components/Heading";
import InputElements from "../components/InputElements";
// import ShowCompleted from "../components/ShowCompleted";
import Loading from '../components/Loading';
import DisplayLists from '../components/DisplayLists';
import DisplayToDoList from "../components/ToDoList";
import DisplayCompletedItems from "../components/DisplayCompletedItems";
import getPriorityColor from '../components/SwitchPriorityColor';
import PrioritySelector from '../components/Priority';
import MarkCompleted from '../components/MarkCompleted';


export default function App() {
const {isPending, items, setItems} = UseLocalData();
    
    return (
    
    <main>
        <Heading/>
        <InputElements setItems={setItems}/>
        {/* <ShowCompleted showCompleted={showCompleted} setShowCompleted={setShowCompleted}/> */}
        <Loading isPending={isPending}/>
        <DisplayLists DisplayToDoList={DisplayToDoList} DisplayCompletedItems={DisplayCompletedItems} setItems={setItems} items={items} getPriorityColor={getPriorityColor} updatePriority={PrioritySelector}  markComplete={MarkCompleted}/>
    </main>

    )
}