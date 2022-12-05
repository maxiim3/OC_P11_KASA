import {useEffect, useState} from "react"
import {ILogement} from "../Interfaces/ILogement"

/**
 * # useFetchAPI Custom Hook
 * @description Custom Hook to fetch data from API
 * @requires ILogement
 * @see ILogement
 * @return {{logements: ILogement[]}}
 */
export function useFetchAPI() {
	const [logements, setLogements] = useState<ILogement[]>([])
	useEffect(() => {
		fetch("/logements.json")
			.then(resp => resp.json())
			.then(data => setLogements(data))
	}, [logements])

	return {logements}
}
