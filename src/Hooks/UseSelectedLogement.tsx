import {useParams} from "react-router-dom"
import {useLogements} from "./useLogements"
import {useMemo} from "react"

export function useSelectedLogement() {
	const {logementId} = useParams()!
	const {logements} = useLogements()!

	const logement = useMemo(() => {
		return logements.find(l => l.id === logementId)
	}, [logementId, logements])

	return {logement}
}