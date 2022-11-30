import {createContext} from "react"
import {useDataSource} from "../Hooks/useDataSource"

/**
 * # Create Context
 * @description Create Logement Context
 * @requires useDataSource
 * @see useDataSource
 * @type {React.Context<ReturnType<typeof useDataSource> | undefined>}
 */
export const LogementsContext = createContext<ReturnType<typeof useDataSource> | undefined>(
	undefined
)
