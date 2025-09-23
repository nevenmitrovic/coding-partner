import styles from './profile-form.module.css'
import { PROFILE_FORM_CARDS } from '@/constants'
import FormCard from '@/components/common/form/form-card/form-card'
import Button from '@/components/common/ui/button'

export default function ProfileForm() {
	return (
		<form className={styles.formContent}>
			{PROFILE_FORM_CARDS.map((item) => (
				<FormCard key={item.title} {...item} />
			))}
			<Button text='> save_profile --execute' type='submit' />
		</form>
	)
}
