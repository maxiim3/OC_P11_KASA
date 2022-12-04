import React, {MutableRefObject, useRef} from "react"
import {useCollapse} from "../Hooks/useCollapse"
import {useRandomKey} from "../Hooks/useRandomKey"

// todo JSDOC
export function Collapse(props: {title: string; txt: string[]}) {
	const arrowIconRef = useRef() as MutableRefObject<SVGSVGElement>
	const contentRef = useRef() as MutableRefObject<HTMLDivElement>

	const {toggleIsOpen, isOpen} = useCollapse({arrowIconRef, contentRef})

	return (
		<article
			className={"collapse"}
			tabIndex={0}
			aria-label={`${props.title}. Naviguez pour ouvrir ou fermer l'élément`}>
			<section
				onClick={toggleIsOpen}
				onKeyDown={({key}) => key === "Enter" && toggleIsOpen()}
				aria-label={`Élément ${
					isOpen
						? "Ouvert. Sélectionnez pour fermer l'élément"
						: "Fermé. Sélectionnez pour ouvrir l'élément"
				}`}
				tabIndex={0}
				className="collapse__header">
				<h2>{props.title}</h2>
				<svg
					ref={arrowIconRef}
					width="18"
					height="20"
					id={"arrow"}
					viewBox="0 0 19 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M3.3705 5.76136L2.01209 7.13059L9.61002 14.7383L17.208 7.1229L15.8495 5.76136L9.61002 12.0152L3.3705 5.76136Z"
						fill="white"
					/>
				</svg>
			</section>
			<section
				ref={contentRef}
				className="collapse__content">
				{props.txt.map(t => (
					<p
						aria-hidden={!isOpen}
						aria-labelledby={props.title}
						aria-label={t}
						tabIndex={isOpen ? 0 : -1}
						key={useRandomKey()}>
						{t}
					</p>
				))}
			</section>
		</article>
	)
}
