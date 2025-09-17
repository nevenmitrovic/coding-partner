import { IToast } from '@/types'
import styles from './toast.module.css'

export default function Toast({ message, id }: IToast) {
	return <div className={styles.toastContainer}>{message}</div>
}
