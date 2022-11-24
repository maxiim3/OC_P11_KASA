import React, {useMemo} from "react"
import {useParams} from "react-router-dom"
import {useLogements} from "../../Hooks/useLogements"

export function Logement() {
	const {logementId} = useParams()
	const {logements} = useLogements()!

	const logement = useMemo(() => {
		return logements.find(l => l.id === logementId)
	}, [])

	console.log(logement)
	return (
		<>
			<h1>Logement</h1>
			<h2>{logement?.title}</h2>
		</>
	)
}
