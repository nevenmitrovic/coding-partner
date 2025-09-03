import styles from './header.module.css'
import Navigation from './navigation/navigation'
import BlinkingCursor from '@/components/common/blinking-cursor'

export default function Header() {
	return (
		<div className={styles.headerContainer}>
			<header>
				<div className={`${styles.logo} typing-animation`}>
					$ Coding_Partner
					<BlinkingCursor />
				</div>
				<Navigation />
			</header>
		</div>
	)
}
