"use client";
import React, { useEffect, useState } from "react";
import { Task } from "@/types/task";
import TaskCard from "../components/TaskCard";
import Link from "next/link";
import { base_url } from "../utilities/url";
import "../styles/app.css";
import line from "../public/croppedLine.svg";
import Image from "next/image";
import plus from "../public/plus.svg";
import CountBadge from "../components/CountBadge";
import EmptyTasks from "../components/EmptyTasks";

const Home: React.FC = () => {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchTasks = async () => {
			const response = await fetch(`${base_url}/`);
			const data = await response.json();
			setTasks(data);
			setLoading(false);
		};

		fetchTasks();
	}, []);

	const toggleTaskCompletion = async (id: number, completed: boolean) => {
		await fetch(`${base_url}/${id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ completed }),
		});
		setTasks((prev) =>
			prev.map((task) => (task.id === id ? { ...task, completed } : task))
		);
	};

	const deleteTask = async (id: number, e) => {
		e.stopPropagation();
		await fetch(`${base_url}/${id}`, {
			method: "DELETE",
		});
		setTasks((prev) => prev.filter((task) => task.id !== id));
	};

	const completedCount = tasks.filter((task) => task.completed).length;

	return (
		<main className="flex flex-col items-center justify-center container mx-auto">
			<div className="flex flex-col md:w-[736px] w-[98vw]">
				<Link
					className="createTask h-[52px] md:w-[736px] w-[98%] rounded-lg flex self-center justify-center z-10 absolute"
					href="/form"
				>
					<button className="font-bold flex items-center justify-center">
						Create Task
						<span className="pl-2">
							<Image priority src={plus} alt="plus icon" />
						</span>
					</button>
				</Link>
				<div className="flex sm:flex-row flex-col sm:justify-between items-center justify-center sm:pt-[5.5em] pt-[3em] pb-5 w-[100%]">
					<div className="flex flex-row items-center sm:pb-0 pb-2">
						<p className="pr-2 font-bold text-md blueText">Tasks</p>
						<span>
							<CountBadge data={tasks.length} />
						</span>
					</div>
					<div className="flex flex-row items-center">
						<p className="pr-2 font-bold text-md purpleText">Completed</p>
						<span>
							<div className="countBadge w-auto h-[20px] text-center rounded-full py-2 px-2 text-sm font-bold flex justify-center items-center">
								{completedCount > 0
									? `${completedCount} of ${tasks.length}`
									: completedCount}
							</div>
						</span>
					</div>
				</div>

				{tasks.length === 0 ? (
					loading ? (
						<p className="loading">Loading...</p>
					) : (
						<EmptyTasks />
					)
				) : (
					<div className="flex flex-col items-center justify-center w-[100%]">
						{tasks.map((task) => (
							<TaskCard
								key={task.id}
								task={task}
								onToggle={toggleTaskCompletion}
								onDelete={deleteTask}
							/>
						))}
					</div>
				)}
			</div>
		</main>
	);
};
export default Home;
