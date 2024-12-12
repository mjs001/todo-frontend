import "../styles/components.css";

const RoundCheckbox = ({ task, onToggle }) => {
	return (
		<div className="round flex">
			<input
				type="checkbox"
				id={`checkbox-${task.id}`}
				checked={task.completed}
				onChange={() => onToggle(task.id!, !task.completed)}
				className="cursor-pointer"
				style={{ backgroundColor: task.color }}
			/>
			<label htmlFor={`checkbox-${task.id}`}></label>
		</div>
	);
};

export default RoundCheckbox;
