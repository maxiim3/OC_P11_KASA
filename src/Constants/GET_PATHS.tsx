import {PathModel} from "../Models/PathModel"
import {Home} from "../Pages/Home"
import {About} from "../Pages/About"
import {Logement} from "../Pages/Logement"
import React from "react"

/**
 * # GET_PATHS
 * @constant
 * @requires PathModel
 * @description Object to provides Component, Label, Title and path to Routes
 * @type {{LOGEMENT: PathModel, HOME: PathModel, ABOUT: PathModel}}
 * @see PathModel
 */
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