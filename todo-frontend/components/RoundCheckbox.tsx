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
			/>
			<label
				htmlFor={`checkbox-${task.id}`}
				style={{
					backgroundColor: `${task.completed ? task.color : "transparent"}`,
					border: `2px solid ${task.color}`,
				}}
			></label>
		</div>
	);
};

export default RoundCheckbox;
