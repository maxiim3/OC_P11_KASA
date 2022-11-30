import React from "react"
import {Banner} from "../Components/Banner"
import {useSelectedLogement} from "../Hooks/useSelectedLogement"
import {ContainerLayout} from "../Layouts/ContainerLayout"
import {Collapse} from "../Components/Collapse"
import {Ratings} from "../Components/Ratings"
import {Tag} from "../Components/Tag"
import {Navigate, redirect} from "react-router-dom"
import {GET_PATHS} from "../Constants/GET_PATHS"

// todo JSDOC

export function Logement() {
	const {logement} = useSelectedLogement()!

	if (!logement) return <Navigate to={GET_PATHS.PAGE_NOT_FOUND.path} />

	return (
		<main className="main main-logement">
			<Banner>
				<img
					className={"carousel"}
					src={logement?.pictures[0]}
					alt={logement?.title}
				/>
			</Banner>

			<ContainerLayout>
				<header className="header">
					<div className="header__title">
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
					</div>
					<aside className="header__aside">
						<div className="owner">
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
