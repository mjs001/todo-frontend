import React from "react";
import { useRouter } from "next/navigation";
import { Task } from "@/types/task";
import RoundCheckbox from "./RoundCheckbox";
import "../styles/components.css";
import Image from "next/image";
import trash from "../public/trash.svg";

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
			className={`p-4 rounded mb-2 cursor-pointer w-[100%] taskCard`}
			onClick={handleEditTodo}
		>
			<div className="flex justify-between items-center checkmarkTextContainer w-[100%]">
				<div
					className="flex justify-center checkmarkTextContainer"
					onClick={(e) => e.stopPropagation()}
				>
					<RoundCheckbox task={task} onToggle={onToggle} />
					<h3
						className={`ml-4 taskText ${
							task.completed ? "completed" : "notCompleted"
						}`}
						onClick={handleEditTodo}
					>
						{task.title}
					</h3>
				</div>
				<button
					onClick={(e) => onDelete(task.id!, e)}
					className="relative deleteBtn"
				>
					<Image
						src={trash}
						alt="trash bin icon"
						className="w-[24px] max-w-[24px]"
					/>
				</button>
			</div>
		</div>
	);
};

export default TaskCard;
