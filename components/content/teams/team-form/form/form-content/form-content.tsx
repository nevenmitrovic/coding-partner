import styles from './form-content.module.css'
import FormCard from '@/components/common/form/form-card/form-card'
import { TEAM_FORM_CARDS } from '@/constants'
import { IFormContent } from '@/types'

export default function FormContent({ control }: IFormContent) {
	return (
		<div className={styles.formContent}>
			{TEAM_FORM_CARDS.map((item) => (
				<FormCard key={item.title} {...item} control={control} />
			))}
		</div>
	)
}
