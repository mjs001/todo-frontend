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
		<div className="flex flex-wrap gap-4">
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
						className="w-[52px] h-[52px] inline-block rounded-full colorPaletteBtn"
						style={{
							backgroundColor: color,
							border: `2px solid ${
								selectedColor === color ? "#FFFFFF" : "transparent"
							}`,
						}}
					></span>
				</label>
			))}
		</div>
	);
};

export default ColorPicker;
