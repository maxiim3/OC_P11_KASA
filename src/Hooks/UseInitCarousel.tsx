import {useEffect} from "react"

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