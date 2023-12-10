import "./MyLabel.css";

interface Props {
	/**
	 * Text to display
	 */
	label: string;
	/**
	 * Label Size
	 */
	size?: "Normal" | "h1" | "h2" | "h3";
	/**
	 * All caps option
	 */
	allCaps?: boolean;
	/**
	 * Background color
	 */
	color?: "text-primary" | "text-secondary" | "text-tertiary";
	/**
	 * Font color
	 */
	fontColor?: string;
	/**
	 * Bg color
	 */
	backgroundColor?: string;
}

export const MyLabel = ({
	label,
	size = "Normal",
	fontColor,
	color = "text-primary",
	allCaps = false,
	backgroundColor = "transparent",
}: Props) => {
	return (
		<span
			className={`${size} ${color}`}
			style={{
				color: fontColor,
				textTransform: allCaps ? "uppercase" : "none",
                backgroundColor
			}}
		>
			{label}
		</span>
	);
};
