import {useCarousel} from "../Hooks/UseCarousel"
import React from "react"

export function Carousel(props: {pictures: string[]; title: string}) {
	const {pictures, title} = props

	const {currentIndex, decrease, increase} = useCarousel(pictures)

	if (pictures.length === 1)
		return (
			<section className={"carousel"}>
				<div className={"carousel__container"}>
					<img
						className={"carousel__container__picture"}
						data-state={"current"}
						data-index={pictures[0]}
						src={pictures[0]}
						alt={title}
					/>
				</div>
			</section>
		)

	return (
		<section className={"carousel"}>
			<svg
				onClick={decrease}
				aria-label={"Image Précédente"}
				onKeyDown={({key}) => key === "Enter" && decrease()}
				tabIndex={0}
				className={"carousel__arrow carousel__arrow--left"}
				width="80"
				height="100"
				viewBox="5 -10 96 120"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M70.04 15.7831L62.92 8.70312L23.36 48.3031L62.96 87.9031L70.04 80.8231L37.52 48.3031L70.04 15.7831Z"
					fill="white"
				/>
			</svg>
			<div className={"carousel__container"}>
				<img
					className={"carousel__container__picture"}
					data-state={"current"}
					data-index={currentIndex}
					src={pictures[currentIndex]}
					alt={title}
				/>
				<p className={"carousel__container__counter"}>{currentIndex+1}/{pictures.length}</p>
			</div>
			<svg
				onClick={increase}
				onKeyDown={({key}) => key === "Enter" && increase()}
				aria-label={"Image Suivante"}
				tabIndex={0}
				className={"carousel__arrow carousel__arrow--right"}
				width="80"
				height="100"
				viewBox="-5 -10 96 120"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M25.96 81.3458L33.04 88.4258L72.64 48.8258L33.04 9.22583L25.96 16.3058L58.48 48.8258L25.96 81.3458Z"
					fill="white"
				/>
			</svg>
		</section>
	)
}
