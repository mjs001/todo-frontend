import "../styles/components.css";

const CountBadge = ({ data }) => {
	return (
		<div className="countBadge w-auto h-[20px] py-2 px-2 text-center rounded-full text-sm font-bold flex justify-center items-center">
			{data}
		</div>
	);
};

export default CountBadge;
