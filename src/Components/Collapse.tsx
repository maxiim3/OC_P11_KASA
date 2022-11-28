import React, {MutableRefObject, useRef} from "react"
import {useCollapse} from "../Hooks/UseCollapse"

export function Collapse(props: {title: string; txt: string[]}) {
	const arrowIconRef = useRef() as MutableRefObject<SVGSVGElement>
	const contentRef = useRef() as MutableRefObject<HTMLDivElement>

	const {toggleIsOpen} = useCollapse({arrowIconRef, contentRef})

	return (
		<article className={"collapse"}>
			<section
				onClick={toggleIsOpen}
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
					<p>{t}</p>
				))}
			</section>
		</article>
	)
}
