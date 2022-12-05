import React from "react"
import {ILogement} from "../Interfaces/ILogement"
import {useNavigate} from "react-router-dom"
// todo JSDOC

export const Card = (props: {data: ILogement}) => {
	const {title, id, pictures} = props.data
	const navigate = useNavigate()

	const redirectToLogement = () => navigate(`/logement/${id}`)

	return (
		<article
			aria-label={title}
			tabIndex={0}
			className="container__card"
			onKeyDown={({key}) => {
				if (key === "Enter") {
					redirectToLogement()
				}
			}}
			onClick={() => redirectToLogement()}>
			<div className="bg" />
			<img
				src={pictures[0]}
				alt={title}
			/>
			<section className="title">
				<p>{title}</p>
			</section>
		</article>
	)
}
