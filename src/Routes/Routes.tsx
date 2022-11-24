import {BrowserRouter, Route, Routes} from "react-router-dom"
import {PageNotFound} from "../Pages/NotFound/PageNotFound"
import React from "react"
import MainLayout from "../Layouts/MainLayout"
import {GET_PATHS} from "./Constants"

export function Router() {
	return (
		<BrowserRouter>
			<MainLayout>
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
			</MainLayout>
		</BrowserRouter>
	)
}

