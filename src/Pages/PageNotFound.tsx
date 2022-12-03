import React from "react"
import {Navigate, NavLink} from "react-router-dom"
import {ResponsiveLineBreak} from "../Components/ResponsiveLineBreak"
import {ContainerLayout} from "../Layouts/ContainerLayout"
import {useUnderlineHomeLink} from "../Hooks/UseUnderlineHomeLink"
import {GET_PATHS} from "../Constants/GET_PATHS"
import {useSelectedLogement} from "../Hooks/useSelectedLogement"

export function PageNotFound() {
	useUnderlineHomeLink()

	return (
		<main className={"main main-404"}>
			<ContainerLayout>
				<h1>404</h1>
				<h2>
					Oups! La page que
					<ResponsiveLineBreak text={"vous demandez n'existe pas."} />
				</h2>
			</ContainerLayout>
			<section className={"link"}>
				<NavLink to={"/"}>Retourner sur la page d’accueil</NavLink>
			</section>
		</main>
	)
}
