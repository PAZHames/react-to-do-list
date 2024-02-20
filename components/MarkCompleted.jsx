export default function MarkCompleted({ completed, onChange }) {
    return (
      <input type="checkbox" name="completed" value={completed} onChange={e => onChange(e.target.value)}/>
    );
  }