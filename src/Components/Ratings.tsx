import React from "react"
import {useRandomKey} from "../Hooks/useRandomKey"
import {Star} from "./Star"
// todo JSDOC

export function Ratings(props: {rate: string}) {
	const MAX_RATING = 5
	const fullSTars = parseInt(props.rate)
	const emptyStars = MAX_RATING - fullSTars

	const getStars = () => {
		let output: React.ReactNode[] = []
		for (let i = 0; i < fullSTars; i++) {
			output.push(
				<Star
					isEmpty={false}
					key={useRandomKey()}
				/>,
			)
		}
		for (let i = 0; i < emptyStars; i++) {
			output.push(
				<Star
					isEmpty={true}
					key={useRandomKey()}
				/>,
			)
		}
		return output
	}

	return <article className="ratings">{getStars()}</article>
}