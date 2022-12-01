import React, {MutableRefObject, useCallback, useEffect, useMemo, useRef, useState} from "react"
import {useSelectedLogement} from "../Hooks/useSelectedLogement"
import {ContainerLayout} from "../Layouts/ContainerLayout"
import {Collapse} from "../Components/Collapse"
import {Ratings} from "../Components/Ratings"
import {Tag} from "../Components/Tag"
import {Navigate} from "react-router-dom"
import {GET_PATHS} from "../Constants/GET_PATHS"
import {useUnderlineHomeLink} from "../Hooks/UseUnderlineHomeLink"
import {useRandomKey} from "../Hooks/useRandomKey"

// todo JSDOC

export function Logement() {
	useUnderlineHomeLink()
	const {logement} = useSelectedLogement()!

	if (!logement) return <Navigate to={GET_PATHS.PAGE_NOT_FOUND.path} />

	return (
		<main className="main main-logement">
			{logement?.pictures.length === 1 ? (
				<section className={"carousel"}>
					<div className={"carousel__container"}>
						<img
							className={"carousel__container__picture"}
							data-state={"current"}
							data-index={logement?.pictures[0]}
							src={logement?.pictures[0]}
							alt={logement?.title}
						/>
					</div>
				</section>
			) : (
				<Carousel
					title={logement?.title}
					pictures={logement?.pictures}
				/>
			)}

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

export const useInitCarousel = () => {
	useEffect(() => {
		const $carousel = document.querySelector(".carousel") as HTMLDivElement
		const $container = $carousel.querySelector(".carousel__container") as HTMLDivElement
		const $pics: HTMLImageElement[] = [...$container.querySelectorAll("img")]
		return () => {
			const numberOfPictures = 3
			const carouselWidth = $carousel.getBoundingClientRect().width
			const containerWidth = carouselWidth * numberOfPictures
			$container.style.width = `${containerWidth}px`
			$pics.forEach(pic => (pic.style.width = `${carouselWidth}px`))
		}
	}, [])
}

export const useScrollInCarousel = (props: {length: number}) => {
	useInitCarousel()
	const MAX_INDEX = useMemo(() => props.length - 1, [])
	const handleIndex = useCallback((i: number) => {
		if (i < 0) return MAX_INDEX
		else if (i > MAX_INDEX) return 0
		else return i
	}, [])

	const [index, setIndex] = useState<number>(0)
	const [currentIndex, setCurrentIndex] = useState<number>(0)
	const [previousIndex, setPreviousIndex] = useState<number>(() => handleIndex(currentIndex - 1))
	const [nextIndex, setNextIndex] = useState<number>(() => handleIndex(currentIndex + 1))

	useEffect(() => {
		setCurrentIndex(handleIndex(index))
		setPreviousIndex(handleIndex(index - 1))
		setNextIndex(handleIndex(index + 1))
	}, [index])

	const increase = useCallback(() => setIndex(i => handleIndex((i += 1))), [])

	const decrease = useCallback(() => setIndex(i => handleIndex((i -= 1))), [])

	return {increase, decrease, currentIndex, previousIndex, nextIndex}
}

function Carousel(props: {pictures: string[]; title: string}) {
	const {pictures, title} = props

	const {previousIndex, nextIndex, currentIndex, decrease, increase} =
		useScrollInCarousel(pictures)
	return (
		<section className={"carousel"}>
			{/*Todo add carousel*/}
			<svg
				onClick={decrease}
				className={"carousel__arrow carousel__arrow--left"}
				id={"arrow"}
				viewBox="0 0 19 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path d="M3.3705 5.76136L2.01209 7.13059L9.61002 14.7383L17.208 7.1229L15.8495 5.76136L9.61002 12.0152L3.3705 5.76136Z" />
			</svg>
			<div className={"carousel__container"}>
				{/*todo load prev and next image to make transition slide effect*/}
				<img
					className={"carousel__container__picture"}
					data-state={"prev"}
					data-index={previousIndex}
					src={pictures[previousIndex]}
					alt={title}
				/>
				<img
					className={"carousel__container__picture"}
					data-state={"current"}
					data-index={currentIndex}
					src={pictures[currentIndex]}
					alt={title}
				/>
				<img
					className={"carousel__container__picture"}
					data-state={"next"}
					data-index={nextIndex}
					src={pictures[nextIndex]}
					alt={title}
				/>
			</div>
			<svg
				onClick={increase}
				className={"carousel__arrow carousel__arrow--right"}
				id={"arrow"}
				viewBox="0 0 19 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path d="M3.3705 5.76136L2.01209 7.13059L9.61002 14.7383L17.208 7.1229L15.8495 5.76136L9.61002 12.0152L3.3705 5.76136Z" />
			</svg>
		</section>
	)
}
