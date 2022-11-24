import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Home} from "./Pages/Home/Home"
import {Logement} from "./Pages/Logement/Logement"
import {About} from "./Pages/About/About"
import {NotFound} from "./Pages/NotFound/NotFound"
import React from "react"
import MainLayout from "./Layouts/MainLayout"

export function Router() {
	return (
		<BrowserRouter>
			<MainLayout>
				<Routes>
					{PATHS.map(path => (
						<Route
							key={`routes${path.label}`}
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
		path: "/logement/:logementId",
		title: "Logement",
		label: "logement",
		component: <Logement />,
		inMenu: false,
	},
	{
		path: "*",
		title: "NotFound",
		label: "NotFound",
		component: <NotFound />,
		inMenu: false,
	},
]
