import {Card} from "./Card"
import React from "react"
import {useLogements} from "../../../Hooks/useLogements"

export function Container() {
	const {logements} = useLogements()!

	return (
		<section className="container">
			{logements.map(log => {
				return <Card key={`card-${log.id}`} data={log} />
			})}
		</section>
	)
}
