import {LogementsContext} from "../Context/LogementsContext"
import {useContext} from "react"

export function useLogements() {
	return useContext(LogementsContext)
}
