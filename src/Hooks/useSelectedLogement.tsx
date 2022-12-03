import {Navigate, redirect, useParams} from "react-router-dom"
import {useLogements} from "./useLogements"
import React, {useMemo} from "react"
import {GET_PATHS} from "../Constants/GET_PATHS"

/**
 * # useSelectedLogement Custom Hook
 * @description On route "/logement" :
 * - Get the Active Logement data from URL Params
 * - Consume the Logement context to get Data using useLogements custom hook
 * @requires useLogements
 * @see useLogements
 * @return {{logement: ILogement}}
 */
export function useSelectedLogement() {
	const {logementId} = useParams()!
	const {logements} = useLogements()!

	const logement = useMemo(() => {
		return logements.find(l => l.id === logementId)
	}, [logementId, logements])
	return {logement}
}
