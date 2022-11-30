import React from "react"
// todo JSDOC

export function Tag(props: {tag: string}) {
	return (
		<article className={"tag"}>
			<p>{props.tag}</p>
		</article>
	)
}