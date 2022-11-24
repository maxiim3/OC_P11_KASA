import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./Style/index.scss"
import {Header} from "./Components/Header"
import {Footer} from "./Components/Footer"

ReactDOM.createRoot(document.getElementById("header") as HTMLElement).render(
	<React.StrictMode>
		<Header />
	</React.StrictMode>
)

ReactDOM.createRoot(document.getElementById("main") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

ReactDOM.createRoot(document.getElementById("footer") as HTMLElement).render(
	<React.StrictMode>
		<Footer />
	</React.StrictMode>
)
