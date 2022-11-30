import React from "react"
import {KasaLogo} from "./KasaLogo"
// todo JSDOC
export function Footer() {
	return (
		<footer className={"footer"}>
			<span
				aria-describedby={"Kasa Logo"}
				aria-hidden={"true"}
				className="logo"
				tabIndex={-1}>
				<KasaLogo />
			</span>
			<p>© 2020 Kasa. All rights reserved</p>
		</footer>
	)
}
