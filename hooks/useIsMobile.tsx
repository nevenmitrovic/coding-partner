'use client'

import { useState, useLayoutEffect } from 'react'
import useWindowSize from './useWindowSize'

export function useIsMobile(breakpoint = 768) {
	const { width } = useWindowSize()
	const [isMobile, setMobile] = useState<null | boolean>(null)

	useLayoutEffect(() => {
		if (width !== null) {
			setMobile(width <= breakpoint)
		}
	}, [width, breakpoint])

	return isMobile
}
