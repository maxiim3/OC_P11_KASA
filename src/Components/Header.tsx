import {NavLink} from "react-router-dom"
import {PATHS} from "../Routes"

export function Header() {
	return (
		<header>
			<nav>
				<ul>
					{PATHS.map(path => {
						if (!path.inMenu) return
						return <NavLink to={path.path}>{path.title}</NavLink>
					})}
				</ul>
			</nav>
		</header>
	)
}
