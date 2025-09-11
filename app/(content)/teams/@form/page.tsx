import FormCard from '@/components/common/form/form-card/form-card'
import FormCardLoading from '@/components/common/form/form-card-loading/form-card-loading'
import FormHeader from '@/components/content/teams/form/form-header/form-header'
import styles from './page.module.css'

export default function Form() {
	return (
		<form className={styles.form}>
			<FormHeader />
		</form>
	)
}
