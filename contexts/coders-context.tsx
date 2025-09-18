'use client'

import { createContext, useContext, ReactNode } from 'react'
import useCoders from '@/hooks/useCoders'

const CodersContext = createContext<ReturnType<typeof useCoders> | undefined>(undefined)

export function CodersProvider({ children }: { children: ReactNode }) {
	const codersData = useCoders()

	return <CodersContext.Provider value={codersData}>{children}</CodersContext.Provider>
}

export function useCodersContext() {
	const context = useContext(CodersContext)
	if (!context) {
		throw new Error('useCodersContext must be used within CodersProvider')
	}
	return context
}
