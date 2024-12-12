import "./globals.css";
import "../styles/app.css";
import logo from "../public/Logo.svg";
import Image from "next/image";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<div className="w-full banner flex justify-center self-center h-[200px] relative">
					<Image
						priority
						src={logo}
						alt="Todo App logo"
						className="h-auto logo"
					/>
				</div>
				{children}
			</body>
		</html>
	);
}
