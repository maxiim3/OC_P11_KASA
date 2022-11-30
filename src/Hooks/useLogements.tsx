import {LogementsContext} from "../Context/LogementsContext"
import {useContext} from "react"

/**
 * # useLogements Custom Hook
 * @description Custom Hook to Consume the Provided LogementContext
 * @requires LogementsContext
 * @see LogementsContext
 * @return {ReturnType<() => {logements: ILogement[]}> | undefined}
 */
export function useLogements() {
	return useContext(LogementsContext)
}
