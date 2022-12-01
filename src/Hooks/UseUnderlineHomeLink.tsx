import {useEffect, useState} from "react"
import {BREAKPOINT} from "../Constants/BREAKPOINT"

/**
 * # useUnderlineHomeLink Custom Hook
 * @description Custom Hook that underlines the "Accueil" nav link when the window size is lower than the BREAKPOINT
 * @requires Window
 * @requires BREAKPOINT
 * @see BREAKPOINT
 */
export function useUnderlineHomeLink() {
	const [clientWidth, setClientWidth] = useState(window.screen.width)
	useEffect(() => {
		const el: HTMLAnchorElement = document.querySelector(
			".nav a:first-of-type"
		) as HTMLAnchorElement

		if (clientWidth < BREAKPOINT) {
			el.classList.add("active")
		} else {
			el.classList.remove("active")
		}
	}, [clientWidth])

	window.onresize = e => {
		const width = e.currentTarget as Window
		setClientWidth(width.screen.width)
	}
}
