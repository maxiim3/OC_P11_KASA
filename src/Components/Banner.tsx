import React from "react"

// todo JSDOC
export function Banner(props: {children?: React.ReactNode}) {
	return (
		<section className="banner">
			<section className="bg" />
			{props?.children}
		</section>
	)
}