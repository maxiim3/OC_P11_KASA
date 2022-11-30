import React from "react"
import {LogementsContext} from "./LogementsContext"
import {useDataSource} from "../Hooks/useDataSource"

/**
 * # Context Provider
 * @description Component that Provides Logement Context to all its children
 * @requires LogementsContext
 * @requires useDataSource
 * @see useDataSource
 * @see LogementsContext
 * @param {{children: React.ReactNode}} props
 * @return {JSX.Element}
 * @constructor
 */
const ContextProvider = (props: {children: React.ReactNode}) => {
	return (
		<LogementsContext.Provider value={useDataSource()}>
			{props.children}
		</LogementsContext.Provider>
	)
}

export default ContextProvider
