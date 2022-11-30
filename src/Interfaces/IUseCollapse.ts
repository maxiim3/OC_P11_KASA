import {MutableRefObject} from "react"

/**
 * # useCollapse Custom Hooks' param Interfaces
 * @description Parameters for useCollapse Hook
 * @param {React.MutableRefObject<SVGSVGElement>} arrowIconRef Reference to ArrowIcon Element
 * @param {React.MutableRefObject<HTMLDivElement>} contentRef Reference to Content Element
 * @interface IUseCollapse
 */
export interface IUseCollapse {
	arrowIconRef: MutableRefObject<SVGSVGElement>
	contentRef: MutableRefObject<HTMLDivElement>
}