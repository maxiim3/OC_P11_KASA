import React from "react"
import {ILogement} from "../Interfaces/ILogement"
import {useNavigate} from "react-router-dom"
// todo JSDOC

export const Card = (props: {data: ILogement}) => {
	const {title, id} = props.data
	const navigate = useNavigate()

	return (
		<article
			className="container__card"
			onClick={() => navigate(`/logement/${id}`)}>
			<section className="bg"></section>
			<section className="title">
				<p>{title}</p>
			</section>
		</article>
	)
}
