import React from "react"
import {Header} from "../Components/Header"
import {Footer} from "../Components/Footer"
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
