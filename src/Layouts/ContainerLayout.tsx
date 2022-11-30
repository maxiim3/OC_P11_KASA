import React from "react"

/**
 * # Container Layout
 * @description Inside Main Content, container layout
 * @param {{children?: React.ReactNode}} props
 * @return {JSX.Element}
 * @constructor
 */
export function ContainerLayout(props: {children?: React.ReactNode}) {
	return (
		<section className="container">
			{props?.children}
		</section>
	)
}