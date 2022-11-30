import {createContext} from "react"
import {useFetchAPI} from "../Hooks/useFetchAPI"

/**
 * # Create Context
 * @description Create Logement Context
 * @requires useFetchAPI
 * @see useFetchAPI
 * @type {React.Context<ReturnType<typeof useFetchAPI> | undefined>}
 */
export const LogementsContext = createContext<ReturnType<typeof useFetchAPI> | undefined>(
	undefined
)
