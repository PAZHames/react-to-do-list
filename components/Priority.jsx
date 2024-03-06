export default function PrioritySelector({ priority, setItems, targetId }) {

  const updatePriority = (targetId, newPriority) => {
    setItems(prevState => 
      prevState.map(item =>
      item.id === targetId ? { ...item, priority: newPriority } : item
    )
    )
  };

    return (
      <select value={priority} onChange={e => updatePriority(targetId, e.target.value)}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    );
  }