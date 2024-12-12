"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Task } from "@/types/task";
import ColorPicker from "../../components/ColorPicker";
import { base_url } from "../../utilities/url";

const FormPage: React.FC = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const taskId = searchParams.get("id");

	const [task, setTask] = useState<Task>({
		title: "",
		color: "#FF3B30",
		completed: false,
	});

	useEffect(() => {
		if (taskId) {
			const fetchTask = async () => {
				const response = await fetch(`${base_url}/${taskId}`);
				const data = await response.json();
				setTask(data);
			};

			fetchTask();
		}
	}, [taskId]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const method = taskId ? "PUT" : "POST";
		const url = taskId ? `${base_url}/${taskId}` : `${base_url}/`;

		await fetch(url, {
			method,
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(task),
		});

		router.push("/");
	};

	const handleBackBtn = () => {
		router.push("/");
	};

	return (
		<main className="p-6">
			<div onClick={handleBackBtn} className="cursor-pointer">
				<svg
					className="h-8 w-8"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					strokeWidth="2"
					stroke="#FFFFFF"
					fill="none"
				>
					<path stroke="none" d="M0 0h24v24H0z" />{" "}
					<line x1="5" y1="12" x2="19" y2="12" />{" "}
					<line x1="5" y1="12" x2="11" y2="18" />{" "}
					<line x1="5" y1="12" x2="11" y2="6" />
				</svg>
			</div>

			<form onSubmit={handleSubmit} className="mt-4">
				<label className="block mb-2">
					Title:
					<input
						type="text"
						value={task.title}
						onChange={(e) => setTask({ ...task, title: e.target.value })}
						className="border p-2 w-full"
						required
					/>
				</label>
				<ColorPicker
					selectedColor={task.color}
					onSelectColor={(color) => setTask({ ...task, color })}
				/>
				<button
					type="submit"
					className="bg-blue-500 text-white px-4 py-2 rounded"
				>
					{taskId ? "Edit Task" : "Create Task"}
				</button>
			</form>
		</main>
	);
};

export default FormPage;
