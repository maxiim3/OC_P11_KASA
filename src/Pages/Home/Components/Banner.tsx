import React from "react"
import {ResponsiveLineBreak} from "./ResponsiveLineBreak"

export const Banner = () => {
	return (
		<section className="banner">
			<section className="bg" />
			<p>
				Chez vous,
				<ResponsiveLineBreak text={"partout et ailleurs"} />
			</p>
		</section>
	)
}

