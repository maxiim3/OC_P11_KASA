import {createContext} from "react"
import {useDataSource} from "../Hooks/useDataSource"

export const LogementsContext = createContext<ReturnType<typeof useDataSource> | undefined>(undefined)
