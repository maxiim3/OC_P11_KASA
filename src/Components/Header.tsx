import {NavLink} from "react-router-dom"

import React, {MutableRefObject, useEffect, useRef} from "react"
import {KasaLogo} from "./KasaLogo"
import {GET_PATHS} from "../Constants/GET_PATHS"
// todo JSDOC
export function Header() {
	// const navRef = useRef() as MutableRefObject<HTMLUListElement>
	//
	// useEffect(() => {
	// 	const observer = new MutationObserver(mutations => {
	// 		const homeLinkIndex = 1
	// 		const aboutLinkIndex = 3
	//
	// 		const $homeLink: HTMLAnchorElement = mutations[homeLinkIndex]
	// 			.target as HTMLAnchorElement
	// 		const $aboutLink: HTMLAnchorElement = mutations[aboutLinkIndex]
	// 			.target as HTMLAnchorElement
	// 		const aboutClassList = [...$aboutLink.classList] as string[]
	// 		const isOnAboutPage = !!aboutClassList.find(i => i === "active")
	//
	// 		const setActive = (active: HTMLAnchorElement, inactive: HTMLAnchorElement) => {
	// 			active.classList.add("underline")
	// 			inactive.classList.remove("underline")
	// 		}
	// 		isOnAboutPage ? setActive($aboutLink, $homeLink) : setActive($homeLink, $aboutLink)
	// 	})
	//
	// 	observer.observe(navRef.current, {attributes: true, childList: true, subtree: true})
	// }, [])

	return (
		<header className={"header"}>
			<nav className={"nav"}>
				<span
					aria-describedby={"Kasa Logo"}
					aria-hidden={"true"}
					className="logo"
					tabIndex={-1}>
					<KasaLogo />
				</span>
				<ul
					className={"nav__items"}
					/*ref={navRef}*/>
					<li
						className={"mav__items__item"}
						key={`link-${GET_PATHS.HOME.label}`}>
						<NavLink to={GET_PATHS.HOME.path}>{GET_PATHS.HOME.title}</NavLink>
					{/*	todo on Navigate : reset scroll position*/}
					</li>
					<li
						className={"mav__items__item"}
						key={`link-${GET_PATHS.ABOUT.label}`}>
						<NavLink to={GET_PATHS.ABOUT.path}>{GET_PATHS.ABOUT.title}</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}
