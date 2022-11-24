import React from "react"
import {Header} from "./Header"
import {Footer} from "./Footer"
import ContextProvider from "../Context/ContextProvider"

const MainLayout = (props: {children: React.ReactNode}) => {
	return (
		<>
			<Header />
			<ContextProvider>{props.children}</ContextProvider>
			<Footer />
		</>
	)
}

export default MainLayout
