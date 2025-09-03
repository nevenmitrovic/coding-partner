import NavLink from '@/components/common/header/common/nav-link/nav-link'
import styles from './navigation.module.css'
import { NAVIGATION } from '@/constants'

export default function Navigation() {
	return (
		<nav className={styles.navigation}>
			<ul>
				{NAVIGATION.map((item) => (
					<NavLink key={item.label} {...item} />
				))}
			</ul>
		</nav>
	)
}
