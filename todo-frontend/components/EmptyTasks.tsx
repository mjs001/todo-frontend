import "../styles/app.css";
import line from "../public/croppedLine.svg";
import notepad from "../public/notepad.svg";
import Image from "next/image";

const EmptyTasks = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<Image priority src={line} alt="curved line" />
			<Image
				priority
				src={notepad}
				alt="notepad graphic"
				className="notepad pt-3 ml-3"
			/>
			<p className="emptyTodoTopText font-bold pb-4 pt-1 text-md">
				You don't have any tasks registered yet.
			</p>
			<p className="emptyTodoBottomText text-md">
				Create tasks and organize your to-do items.
			</p>
		</div>
	);
};

export default EmptyTasks;
