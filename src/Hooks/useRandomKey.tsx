import {useRef} from "react"

/**
 * # useRandomKey Custom Hook
 * @description Custom Hook to generate random id
 * @return {string}
 */
export const useRandomKey = (): string => {
	const LETTERS_LOWER = "abcdefghijklmnopqrstuvwxyz".split("")
	const LETTERS_UPPER = LETTERS_LOWER.join("").toUpperCase().split("")
	const SYMBOLS = "!@#$*".split("")
	const RANDOM_NUMBER = Math.round(Math.random() * 1000)

	const getItem = (array: string[]) => {
		const i = array.length - 1
		let randomIndex = Math.round(Math.random() * i)
		return array[randomIndex]
	}

	const randomLowerLetter = () => getItem(LETTERS_LOWER)
	const randomUpperLetter = () => getItem(LETTERS_UPPER)
	const randomSymbol = () => getItem(SYMBOLS)

	const {current: output} = useRef(
		`${randomLowerLetter()}${randomSymbol()}${randomUpperLetter()}${randomSymbol()}${RANDOM_NUMBER}`
	)
	return output
}
