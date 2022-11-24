import {useEffect, useState} from "react"
import {ILogementType} from "../Interface/ILogement"

export function useDataSource() {
	const [logements, setLogements] = useState<ILogementType[]>([])
	useEffect(() => {
		fetch("/logements.json")
			.then(resp => resp.json())
			.then(data => setLogements(data))
	}, [])

	return {logements}
}
