import React, {createContext, useEffect, useState} from "react"
import {Banner} from "./Components/Banner"
import {Container} from "./Components/Container"
import {ILogementType} from "../../Interface/ILogement"

export function Home() {

	return (
		<main className={"main main-home"}>
			<Banner />
			<Container />
		</main>
	)
}
