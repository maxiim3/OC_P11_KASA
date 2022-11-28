import React from "react"
import {ILogementType} from "../../../Interface/ILogement"
import {useNavigate} from "react-router-dom"

export const Card = (props: {data: ILogementType}) => {
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
