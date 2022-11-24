import React from "react"
import {useSelectedLogement} from "../../Hooks/UseSelectedLogement"

export function Logement() {
	const {logement} = useSelectedLogement()

	return (
		<>
			<h1>Logement</h1>
			<h2>{logement?.title}</h2>
		</>
	)
}
