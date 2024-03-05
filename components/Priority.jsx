export default function PrioritySelector({ priority, setItems }) {

  const updatePriority = (index, newPriority) => {
    setItems((prevState) => {
      prevState.map((item, i) =>
      i === index ? { ...item, priority: newPriority } : item
    );
    });
  };

    return (
      <select value={priority} onChange={e => updatePriority(e.target.value)}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    );
  }