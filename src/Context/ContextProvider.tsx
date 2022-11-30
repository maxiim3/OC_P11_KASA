import React from "react"
import {LogementsContext} from "./LogementsContext"
import {useFetchAPI} from "../Hooks/useFetchAPI"

/**
 * # Context Provider
 * @description Component that Provides Logement Context to all its children
 * @requires LogementsContext
 * @requires useFetchAPI
 * @see useFetchAPI
 * @see LogementsContext
 * @param {{children: React.ReactNode}} props
 * @return {JSX.Element}
 * @constructor
 */
const ContextProvider = (props: {children: React.ReactNode}) => {
	return (
		<LogementsContext.Provider value={useFetchAPI()}>
			{props.children}
		</LogementsContext.Provider>
	)
}

export default ContextProvider
