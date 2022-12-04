import {NavLink} from "react-router-dom"

import React from "react"
import {KasaLogo} from "./KasaLogo"
import {GET_PATHS} from "../Constants/GET_PATHS"

export function Header() {
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
				>
					<li
						className={"mav__items__item"}
						key={`link-${GET_PATHS.HOME.label}`}>
						<NavLink to={GET_PATHS.HOME.path}>{GET_PATHS.HOME.title}</NavLink>
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
