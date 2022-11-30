import React, {useEffect} from "react"
import {NavLink} from "react-router-dom"
import {ResponsiveLineBreak} from "../Components/ResponsiveLineBreak"
import {ContainerLayout} from "../Layouts/ContainerLayout"

export function PageNotFound() {
	useEffect(() => {
		const el: HTMLAnchorElement = document.querySelector(
			".nav a:first-of-type"
		) as HTMLAnchorElement
		el.classList.add("active")
	})

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
