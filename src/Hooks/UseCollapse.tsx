import {MutableRefObject, useEffect, useState} from "react"

interface IUseCollapse {
	arrowIconRef: MutableRefObject<SVGSVGElement>
	contentRef: MutableRefObject<HTMLDivElement>
}

export function useCollapse({arrowIconRef, contentRef}: IUseCollapse) {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	useEffect(() => {
		if (isOpen) {
			arrowIconRef.current.style.rotate = "0deg"
			contentRef.current.style.display = "block"
			contentRef.current.style.translate = " 0 -6px"
		}
		else {
			arrowIconRef.current.style.rotate = "180deg"
			contentRef.current.style.display = "none"
			contentRef.current.style.translate = " 0 -100%"
		}
	}, [isOpen])

	const toggleIsOpen = () => setIsOpen(b => !b)
	return {toggleIsOpen}
}