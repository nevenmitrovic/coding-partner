import styles from './form-content.module.css'
import FormCard from '@/components/common/form/form-card/form-card'
import { TEAM_FORM_CARDS } from '@/constants'

export default async function FormContent() {
	return (
		<div className={styles.formContent}>
			{TEAM_FORM_CARDS.map((item) => (
				<FormCard key={item.title} {...item} />
			))}
		</div>
	)
}
