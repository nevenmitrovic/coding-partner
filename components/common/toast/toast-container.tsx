'use client'

import { useToast } from '@/contexts/toast-context'
import Toast from './toast'

export default function ToastContainer() {
	const { toasts } = useToast()
	const firstToast = toasts[0]

	const renderToast = () => {
		if (!firstToast) {
			return null
		}

		return <Toast id={firstToast.id} message={firstToast.message} />
	}

	return renderToast()
}
