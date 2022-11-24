import {PathModel} from "./PathModel"
import {Home} from "../Pages/Home/Home"
import {About} from "../Pages/About/About"
import {Logement} from "../Pages/Logement/Logement"
import React from "react"

export const GET_PATHS = {
	HOME: new PathModel({
							path: "/",
							title: "Accueil",
							label: "home",
							component: <Home />,
						}),
	ABOUT: new PathModel({
							 path: "/about",
							 title: "A Propos",
							 label: "about",
							 component: <About />,
						 }),
	LOGEMENT: new PathModel({
								path: "/logement/:logementId",
								title: "Logement",
								label: "logement",
								component: <Logement />,
							}),
}
export const PATHS_NAVIGATION = [GET_PATHS.HOME, GET_PATHS.ABOUT]