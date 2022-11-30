import {BrowserRouter, Route, Routes} from "react-router-dom"
import {PageNotFound} from "../Pages/PageNotFound"
import React from "react"
import {GET_PATHS} from "../Constants/GET_PATHS"
import PageLayout from "../Layouts/PageLayout"

/**
 * # Router
 * @description Router - redirect routes:
 * @requires GET_PATHS
 * @requires PageNotFound
 * @requires BrowserRouter
 * @requires Route
 * @requires Routes
 * @constructor
 */
export function Router() {
	return (
		<BrowserRouter>
			<PageLayout>
				<Routes>
					<Route
						key={`routes${GET_PATHS.HOME.label}`}
						path={GET_PATHS.HOME.path}
						element={GET_PATHS.HOME.component}
					/>
					<Route
						key={`routes${GET_PATHS.ABOUT.label}`}
						path={GET_PATHS.ABOUT.path}
						element={GET_PATHS.ABOUT.component}
					/>
					<Route
						key={`routes${GET_PATHS.LOGEMENT.label}`}
						path={GET_PATHS.LOGEMENT.path}
						element={GET_PATHS.LOGEMENT.component}
					/>
					<Route
						key={`routes-404`}
						path={"*"}
						element={<PageNotFound />}
					/>
				</Routes>
			</PageLayout>
		</BrowserRouter>
	)
}
