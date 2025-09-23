import Button from '@/components/common/ui/button'
import styles from './form-submit.module.css'

export default function FormSubmit() {
	return (
		<div className={styles.formSubmit}>
			<Button text='> save_profile --execute' type='submit' />
		</div>
	)
}
