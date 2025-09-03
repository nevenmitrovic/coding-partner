import styles from './header.module.css'
import Navigation from './navigation/navigation'

export default function Header() {
	return (
		<div className={styles.headerContainer}>
			<header>
				<div id='cursor' className={`${styles.logo} typing-animation`}>
					$ Coding_Partner
				</div>
				<Navigation />
			</header>
		</div>
	)
}
