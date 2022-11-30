import {useEffect, useState} from "react"
import {IUseCollapse} from "../Interfaces/IUseCollapse"

/**
 * # useCollapse Custom Hook
 * @description Custom Hook :
 * - Hide / Show content based on Collapse element state
 * - Toggle Element to switch state
 * - Set animation on Arrow Icon
 * @param {React.MutableRefObject<SVGSVGElement>} arrowIconRef Reference to ArrowIcon Element
 * @param {React.MutableRefObject<HTMLDivElement>} contentRef Reference to Content Element
 * @see IUseCollapse
 * @return {{toggleIsOpen: () => void}}
 */
export function useCollapse({arrowIconRef, contentRef}: IUseCollapse) {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	useEffect(() => {
		if (isOpen) {
			arrowIconRef.current.style.rotate = "180deg"
			contentRef.current.style.display = "block"
			contentRef.current.style.translate = " 0 -6px"
		} else {
			arrowIconRef.current.style.rotate = "0deg"
			contentRef.current.style.display = "none"
			contentRef.current.style.translate = " 0 -100%"
		}
	}, [isOpen])

	const toggleIsOpen = () => setIsOpen(b => !b)

	return {toggleIsOpen}
}
