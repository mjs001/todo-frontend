"use client";
import React, { useEffect, useState } from "react";
import { Task } from "@/types/task";
import TaskCard from "@/components/TaskCard";
import Link from "next/link";
import { base_url } from "../utilities/url";

const Home: React.FC = () => {
	const [tasks, setTasks] = useState<Task[]>([]);

	useEffect(() => {
		const fetchTasks = async () => {
			const response = await fetch(`${base_url}/`);
			const data = await response.json();
			setTasks(data);
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
		<main className="p-6">
			<h1 className="text-2xl font-bold">Todo List</h1>
			<p>
				{completedCount} of {tasks.length} tasks completed
			</p>
			<div className="mt-4">
				{tasks.map((task) => (
					<TaskCard
						key={task.id}
						task={task}
						onToggle={toggleTaskCompletion}
						onDelete={deleteTask}
					/>
				))}
			</div>
			<Link href="/form">
				<button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
					Add Task
				</button>
			</Link>
		</main>
	);
};
export default Home;
