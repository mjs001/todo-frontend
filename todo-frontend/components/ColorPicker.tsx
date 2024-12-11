import React from "react";

interface ColorPickerProps {
	selectedColor: string;
	onSelectColor: (color: string) => void;
}

const colors = [
	"#FF3B30",
	"#FF9500",
	"#FFCC00",
	"#34C759",
	"#007AFF",
	"#5856D6",
	"#AF52DE",
	"#FF2D55",
	"#A2845E",
];

const ColorPicker: React.FC<ColorPickerProps> = ({
	selectedColor,
	onSelectColor,
}) => {
	return (
		<div className="flex flex-wrap gap-2">
			{colors.map((color) => (
				<label key={color} className="cursor-pointer">
					<input
						type="radio"
						name="color"
						value={color}
						checked={selectedColor === color}
						onChange={() => onSelectColor(color)}
						className="hidden"
					/>
					<span
						className={`w-8 h-8 inline-block rounded-full border-2`}
						style={{
							backgroundColor: color,
							borderColor: selectedColor === color ? "black" : "transparent",
						}}
					></span>
				</label>
			))}
		</div>
	);
};

export default ColorPicker;
