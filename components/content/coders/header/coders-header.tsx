import Input from '@/components/common/ui/input'
import styles from './coders-header.module.css'

export default function CodersHeader() {
	return (
		<header className={styles.codersHeader}>
			<h2>Browse Coders</h2>
			<div>
				<Input type='text' placeholder='Search by name, skills and interests...' />
			</div>
			<p>Found 31 active hackers</p>
		</header>
	)
}
