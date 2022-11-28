import {useSelectedLogement} from "../../../Hooks/UseSelectedLogement"
import React from "react"
import {Collapse} from "../../../Components/Collapse"

function Tag(props: {tag: string}) {
	return <article>{props.tag}</article>
}

export function Container() {
	const {logement} = useSelectedLogement()!

	if (logement)
		return (
			<section className="container">
				<div className="header">
					<div className="title">
						<h2>{logement?.title}</h2>
						<h3>{logement?.location}</h3>
						<div className="tags">
							{logement?.tags.map(tag => (
								<Tag tag={tag} />
							))}
						</div>
					</div>
					<aside className="aside">
						<div className="owner">
							<img
								src={logement?.host.picture}
								alt={logement?.host.name}
							/>
							<p>{logement?.host.name}</p>
						</div>
						<div className="ratings">{logement?.rating}</div>
					</aside>
				</div>
				<div className="content">
					<Collapse
						title={"Description"}
						txt={[logement.description]}
					/>
					<Collapse
						title={"Équipements"}
						txt={logement.equipments}
					/>
				</div>
			</section>
		)
	return <h2>Loading</h2>
}
