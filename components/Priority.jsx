export default function PrioritySelector({ priority, onChange }) {
    return (
      <select value={priority} onChange={e => onChange(e.target.value)}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    );
  }