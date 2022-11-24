import {NavLink} from "react-router-dom"

import React from "react"
import {KasaLogo} from "./KasaLogo"
import {PATHS_NAVIGATION} from "../Routes/Constants"

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
				<ul className={"nav__items"}>
					{PATHS_NAVIGATION.map(path => (
						<li
							className={"mav__items__item"}
							key={`link-${path.label}`}>
							<NavLink to={path.path}>{path.title}</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}
