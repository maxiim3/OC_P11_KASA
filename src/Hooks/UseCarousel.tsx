import {useInitCarousel} from "./UseInitCarousel"
import {useCallback, useEffect, useMemo, useState} from "react"

export const useCarousel = (props: {length: number}) => {
	const MAX_INDEX = useMemo(() => props.length - 1, [])
	const handleIndex = useCallback((i: number) => {
		if (i < 0) return MAX_INDEX
		else if (i > MAX_INDEX) return 0
		else return i
	}, [])

	const [currentIndex, setCurrentIndex] = useState<number>(0)

	const increase = useCallback(() => setCurrentIndex(i => handleIndex((i += 1))), [])

	const decrease = useCallback(() => setCurrentIndex(i => handleIndex((i -= 1))), [])

	return {increase, decrease, currentIndex}
}
