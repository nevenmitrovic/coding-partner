'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { type IToast } from '@/types'

interface ToastContextType {
	toasts: IToast[]
	showToast: (message: string) => void
	hideToast: (id: string) => void
	clearAllToasts: () => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

interface ToastProviderProps {
	children: ReactNode
}

function getId(): string {
	return Math.random().toString(36).substring(2, 11)
}

export function ToastProvider({ children }: ToastProviderProps) {
	const [toasts, setToasts] = useState<IToast[]>([])

	const showToast = (message: string, id: string = getId()) => {
		const toast: IToast = {
			id,
			message,
		}

		setToasts((prev) => [...prev, toast])

		// Auto hide toast after duration
		setTimeout(() => {
			hideToast(id)
		}, 3000)
	}

	const hideToast = (id: string) => {
		setToasts((prev) => prev.filter((toast) => toast.id !== id))
	}

	const clearAllToasts = () => {
		setToasts([])
	}

	return (
		<ToastContext.Provider
			value={{
				toasts,
				showToast,
				hideToast,
				clearAllToasts,
			}}
		>
			{children}
		</ToastContext.Provider>
	)
}

export function useToast() {
	const context = useContext(ToastContext)
	if (context === undefined) {
		throw new Error('useToast must be used within a ToastProvider')
	}
	return context
}
