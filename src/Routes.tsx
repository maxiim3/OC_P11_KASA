import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Home} from "./Home"
import {Logement} from "./Logement"
import {About} from "./About"
import {NotFound} from "./NotFound"
import React from "react"
import MainLayout from "../Layouts/MainLayout"

export function Router() {
	return (
		<BrowserRouter>
			<MainLayout>
				<Routes>
					{PATHS.map(path => (
						<Route
							path={path.path}
							element={path.component}
						/>
					))}
				</Routes>
			</MainLayout>
		</BrowserRouter>
	)
}

export const PATHS = [
	{
		path: "/",
		title: "Accueil",
		label: "home",
		component: <Home />,
		inMenu: true,
	},
	{
		path: "/a-propos",
		title: "A Propos",
		label: "about",
		component: <About />,
		inMenu: true,
	},
	{
		path: "/logement",
		title: "Logement",
		label: "logement",
		component: <Logement />,
		inMenu: false,
	},
	{
		path: "*",
		title: "404",
		label: "404",
		component: <NotFound />,
		inMenu: false,
	},
]
