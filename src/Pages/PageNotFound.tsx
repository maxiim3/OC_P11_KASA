import React from "react"
import {NavLink} from "react-router-dom"
import {ResponsiveLineBreak} from "../Components/ResponsiveLineBreak"
import {ContainerLayout} from "../Layouts/ContainerLayout"
import {useUnderlineHomeLink} from "../Hooks/UseUnderlineHomeLink"

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
