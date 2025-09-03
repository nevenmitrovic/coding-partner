'use client'

import { useCallback, useEffect, useState } from 'react'

export const useIsMobile = (breakpoint = 768) => {
	const [isMobile, setIsMobile] = useState(() => window.innerWidth < breakpoint)

	const checkDevice = useCallback(() => {
		setIsMobile(window.innerWidth < breakpoint)
	}, [breakpoint])

	useEffect(() => {
		window.addEventListener('resize', checkDevice)
		return () => window.removeEventListener('resize', checkDevice)
	}, [checkDevice])

	return isMobile
}
