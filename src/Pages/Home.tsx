import React from "react"
import {ResponsiveLineBreak} from "../Components/ResponsiveLineBreak"
import {Banner} from "../Components/Banner"
import {ContainerLayout} from "../Layouts/ContainerLayout"
import {Card} from "../Components/Card"
import {useLogements} from "../Hooks/useLogements"

export function Home() {
	const {logements} = useLogements()!

	return (
		<main className={"main main-home"}>
			<Banner>
				<p>
					Chez vous,
					<ResponsiveLineBreak text={"partout et ailleurs"} />
				</p>
			</Banner>
			<ContainerLayout>
		{/*		<Card
					key={`card-123`}
					data={MOCK_FAKE_DATA}
				/>*/}
				{logements.map(data => {
					return (
						<Card
							key={`card-${data.id}`}
							data={data}
						/>
					)
				})}
			</ContainerLayout>
		</main>
	)
}

