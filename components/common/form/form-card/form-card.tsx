import Input from '@/components/common/ui/input'
import Select from '@/components/common/ui/select'
import Textarea from '@/components/common/ui/textarea'
import styles from './form-card.module.css'
import { IFormCard } from '@/types'

export default function FormCard({ title }: IFormCard) {
	return (
		<div className={styles.formCard}>
			<header className={styles.formCardHeader}>{title}</header>
			<div className={styles.formCardContent}></div>
		</div>
	)
}
