import React from "react"
import {LogementsContext} from "./LogementsContext"
import {useDataSource} from "../Hooks/useDataSource"

const ContextProvider = (props: {children: React.ReactNode}) => {
	return (
		<LogementsContext.Provider value={useDataSource()}>
			{props.children}
		</LogementsContext.Provider>
	)
}

export default ContextProvider
