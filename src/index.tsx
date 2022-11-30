import React from "react"
import ReactDOM from "react-dom/client"
import "./Sass/main.scss"
import {Router} from "./Routes/Routes"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>
)
