import React from "react"
// todo JSDOC
export const ResponsiveLineBreak = ({text}: {text: string}) => {
	return (
		<>
			{" "}
			<span className={"responsive-line-break"}>{text}</span>
		</>
	)
}