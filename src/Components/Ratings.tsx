import React from "react"
import {useRandomKey} from "../Hooks/useRandomKey"
import {Star} from "./Star"

// todo JSDOC

export function Ratings(props: {rate: string}) {
	const MAX_RATING = 5
	const filledStars = parseInt(props.rate)
	const emptyStars = MAX_RATING - filledStars

	const getStars = () => {
		let output: React.ReactNode[] = []
		for (let i = 0; i < filledStars; i++) {
			output.push(
				<Star
					isEmpty={false}
					key={useRandomKey()}
				/>
			)
		}
		for (let i = 0; i < emptyStars; i++) {
			output.push(
				<Star
					isEmpty={true}
					key={useRandomKey()}
				/>
			)
		}
		return output
	}

	return (
		<article
			aria-label={`Note : ${filledStars} étoiles`}
			tabIndex={0}
			className="ratings">
			{getStars()}
		</article>
	)
}
