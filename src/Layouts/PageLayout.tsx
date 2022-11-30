import React from "react"
import {Header} from "../Components/Header"
import ContextProvider from "../Context/ContextProvider"
import {Footer} from "../Components/Footer"


/**
 * # Global Page Layout
 * @description Provides Layout to all pages :
 * - Context Provider to hydrate Data from Logement api
 * - Header and Footer
 * @param {{children?: React.ReactNode}} props
 * @return {JSX.Element}
 * @requires Header
 * @requires Footer
 * @requires ContextProvider
 * @constructor
 */
const PageLayout = (props: {children: React.ReactNode}) => {
	return (
		<>
			<Header />
			<ContextProvider>
				{props.children}
			</ContextProvider>
			<Footer />
		</>
	)
}
export default PageLayout