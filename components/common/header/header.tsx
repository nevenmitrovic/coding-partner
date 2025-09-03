import styles from './header.module.css'
import Navigation from './navigation/navigation'

export default function Header() {
	return (
		<div>
			<header>
				<div className={styles.logo}>$ Coding_Partner</div>
				<Navigation />
			</header>
		</div>
	)
}
