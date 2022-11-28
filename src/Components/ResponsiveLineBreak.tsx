import React from "react"

export const ResponsiveLineBreak = ({text}: {text: string}) => {
	return (
		<>
			{" "}
			<span className={"responsive-line-break"}>{text}</span>
		</>
	)
}