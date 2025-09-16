import { IToast } from '@/types'
import styles from './toast.module.css'
import { useToast } from '@/contexts/toast-context'

export default function Toast({ message, id }: IToast) {
	const { toasts } = useToast()

	return (
		<div
			className={`${styles.toastContainer} ${
				toasts.some((elem) => elem.id === id) ? styles.visible : styles.hidden
			}`}
		>
			{message}
		</div>
	)
}
