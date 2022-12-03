import React from "react"
import {Banner} from "../Components/Banner"
import {Collapse} from "../Components/Collapse"
import {ContainerLayout} from "../Layouts/ContainerLayout"
import {ABOUT_PAGE_CONTENT} from "../Constants/ABOUT_PAGE_CONTENT"
import {useSelectedLogement} from "../Hooks/useSelectedLogement"

export function About() {
	return (
		<main className="main main-about">
			<Banner />
			<ContainerLayout>
				{ABOUT_PAGE_CONTENT.map(({txt, title}) => (
					<Collapse
						key={title.toLowerCase()}
						txt={[txt]}
						title={title}
					/>
				))}
			</ContainerLayout>
		</main>
	)
}
