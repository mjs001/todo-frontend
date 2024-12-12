import "../styles/components.css";

const RoundCheckbox = ({ task, onToggle }) => {
	console.log("inside checkbox task", task);
	return (
		<div className="round flex">
			<input
				type="checkbox"
				id="checkbox"
				checked={task.completed}
				onChange={() => onToggle(task.id!, !task.completed)}
				className="cursor-pointer"
				style={{ backgroundColor: task.color }}
			/>
			<label htmlFor="checkbox"></label>
		</div>
	);
};

export default RoundCheckbox;
