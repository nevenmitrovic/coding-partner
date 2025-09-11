import FormHeader from '@/components/content/teams/form/form-header/form-header'
import FormContent from '@/components/content/teams/form/form-content/form-content'
import styles from './page.module.css'
import FormSubmit from '@/components/content/teams/form/form-submit/form-submit'

export default function Form() {
	return (
		<form className={styles.form}>
			<FormHeader />
			<FormContent />
			<FormSubmit />
		</form>
	)
}
