import Button from '@/components/common/ui/button'
import styles from './form-submit.module.css'

export default function FormSubmit() {
	return (
		<div className={styles.formSubmit}>
			<div className={styles.execute}>EXECUTE TEAM FORMATION</div>
			<Button text='> deploy_team --broadcast' type='submit' />
		</div>
	)
}
