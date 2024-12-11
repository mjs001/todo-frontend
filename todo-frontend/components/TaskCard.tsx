import React from "react";
import { useRouter } from "next/navigation";
import { Task } from "@/types/task";

interface TaskCardProps {
	task: Task;
	onToggle: (id: number, completed: boolean) => void;
	onDelete: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onToggle, onDelete }) => {
	const router = useRouter();

	const handleEditTodo = () => {
		router.push(`/form?id=${task.id}`);
	};
	return (
		<div
			className={`p-4 border rounded mb-2 bg-white cursor-pointer`}
			onClick={handleEditTodo}
		>
			<div className="flex justify-between items-center">
				<div className="flex items-center" onClick={(e) => e.stopPropagation()}>
					<input
						type="checkbox"
						checked={task.completed}
						onChange={() => onToggle(task.id!, !task.completed)}
						className="cursor-pointer w-5 h-5 rounded"
						style={{ backgroundColor: task.color }}
					/>
					<h3 className="ml-4 font-bold">{task.title}</h3>
				</div>
				<button
					onClick={(e) => onDelete(task.id!, e)}
					className="text-red-500 bg-transparent border border-red-500 px-2 py-1 rounded hover:bg-red-500 hover:text-white"
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default TaskCard;
