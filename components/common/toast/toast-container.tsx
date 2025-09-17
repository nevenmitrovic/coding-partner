'use client'

import { useToast } from '@/contexts/toast-context'
import Toast from './toast'
import styles from './toast-container.module.css'

export default function ToastContainer() {
	const { toasts } = useToast()
	const firstToast = toasts[0]

	const renderToast = () => {
		if (!firstToast) {
			return null
		}

		return (
			<div className={styles.container}>
				<Toast id={firstToast.id} message={firstToast.message} />
			</div>
		)
	}

	return renderToast()
}
