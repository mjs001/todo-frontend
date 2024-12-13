import "../styles/app.css";
import line from "../public/croppedLine.svg";
import clipboard from "../public/Clipboard.svg";
import Image from "next/image";

const EmptyTasks = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<Image priority src={line} alt="curved line" />
			<Image
				priority
				src={clipboard}
				alt="notepad graphic"
				className="py-[15px]"
			/>
			<p className="emptyTodoTopText font-bold pb-4 pt-1 text-md text-center">
				You don't have any tasks registered yet.
			</p>
			<p className="emptyTodoBottomText text-md text-center">
				Create tasks and organize your to-do items.
			</p>
		</div>
	);
};

export default EmptyTasks;
