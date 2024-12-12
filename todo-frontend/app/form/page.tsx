"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Task } from "@/types/task";
import ColorPicker from "../../components/ColorPicker";
import { base_url } from "../../utilities/url";
import backArrow from "../../public/backArrow.svg";
import Image from "next/image";
import plus from "../../public/plus.svg";
import checkmark from "../../public/checkmark.svg";
import "../../styles/form.css";

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
		<main className="p-6 flex flex-col items-center justify-center container mx-auto">
			<div className="pt-[48px]">
				<div
					onClick={handleBackBtn}
					className="cursor-pointer flex self-start w-[100%]"
				>
					<Image priority src={backArrow} alt="back arrow" />
				</div>

				<form onSubmit={handleSubmit} className="mt-4 w-[736px] pt-[24px]">
					<label className="block pb-[12px]">
						<p className="formLabels pb-2">Title</p>
						<input
							type="text"
							value={task.title}
							onChange={(e) => setTask({ ...task, title: e.target.value })}
							className="p-2 w-[100%] textInput h-[52px]"
							required
						/>
					</label>
					<label className="block py-[12px]">
						<p className="formLabels pb-2">Color</p>
						<ColorPicker
							selectedColor={task.color}
							onSelectColor={(color) => setTask({ ...task, color })}
							required
						/>
					</label>
					<button
						type="submit"
						className="px-4 py-2 submitBtn w-[100%] h-[52px] font-bold mt-[24px]"
					>
						{!task.title || !task.color ? (
							<div className="flex items-center justify-center">
								<p>Add Task</p>
								<span className="pl-2">
									<Image priority src={plus} alt="plus icon" />
								</span>
							</div>
						) : (
							<div className="flex items-center justify-center">
								<p>Save</p>
								<span className="pl-2">
									<Image priority src={checkmark} alt="checkmark" />
								</span>
							</div>
						)}
					</button>
				</form>
			</div>
		</main>
	);
};

export default FormPage;
