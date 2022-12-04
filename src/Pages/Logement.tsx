import React from "react"
import {useSelectedLogement} from "../Hooks/useSelectedLogement"
import {ContainerLayout} from "../Layouts/ContainerLayout"
import {Collapse} from "../Components/Collapse"
import {Ratings} from "../Components/Ratings"
import {Tag} from "../Components/Tag"
import {Navigate} from "react-router-dom"
import {GET_PATHS} from "../Constants/GET_PATHS"
import {useUnderlineHomeLink} from "../Hooks/UseUnderlineHomeLink"
import {Carousel} from "../Components/Carousel"

// todo JSDOC

export function Logement() {
	useUnderlineHomeLink()
	const {logement} = useSelectedLogement()!

	if (!logement) return <Navigate to={GET_PATHS.PAGE_NOT_FOUND.path} />

	return (
		<main className="main main-logement">
			<Carousel
				title={logement?.title}
				pictures={logement?.pictures}
			/>
			<ContainerLayout>
				<header className="header">
					<section
						tabIndex={0}
						aria-label={`${logement.title}, situé à ${logement.location}`}
						className="header__title">
						<h2>{logement?.title}</h2>
						<h3>{logement?.location}</h3>
						<div className="tags">
							{logement?.tags.map(tag => (
								<Tag
									key={tag}
									tag={tag}
								/>
							))}
						</div>
					</section>
					<aside className="header__aside">
						<div
							aria-label={`Propriétaire : ${logement.host.name}`}
							tabIndex={0}
							className="owner">
							<p>
								<span className="first">{logement?.host.name.split(" ")[0]}</span>
								<span className="last">{logement?.host.name.split(" ")[1]}</span>
							</p>
							<img
								className={"picture"}
								src={logement?.host.picture}
								alt={logement?.host.name}
							/>
						</div>
						<Ratings rate={logement.rating} />
					</aside>
				</header>
				<main className="content">
					<Collapse
						key={"description"}
						title={"Description"}
						txt={[logement.description]}
					/>
					<Collapse
						key={"equipements"}
						title={"Équipements"}
						txt={logement.equipments}
					/>
				</main>
			</ContainerLayout>
		</main>
	)
}
