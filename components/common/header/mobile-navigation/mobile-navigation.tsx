import styles from './mobile-navigation.module.css'
import { NAVIGATION } from '@/constants/index'
import NavLink from '@/components/common/header/common/nav-link/nav-link'
import { RxCross1 } from 'react-icons/rx'
import BlinkingCursor from '@/components/common/ui/blinking-cursor'
import { authClient } from '@/auth/auth-client'

interface MobileNavigationProps {
	isOpen: boolean
	onClose: () => void
}

export const MobileNavigation = ({ isOpen, onClose }: MobileNavigationProps) => {
	const { data, error } = authClient.useSession()

	const handleSignOut = async () => {
		await authClient.signOut()
		onClose()
	}

	return (
		<nav className={`${styles.mobileNavigation} ${isOpen ? styles.open : ''}`}>
			<button className={styles.closeButton} onClick={onClose}>
				<RxCross1 size={24} />
			</button>
			<div className={styles.logo}>
				$ Coding_Partner
				<BlinkingCursor />
			</div>
			<ul>
				{NAVIGATION.map((item) => {
					if (item.label === '[Login]' && data) {
						return (
							<li key={item.label}>
								<button className={styles.signOut} onClick={handleSignOut}>
									Logout
								</button>
							</li>
						)
					}
					return <NavLink key={item.label} {...item} onClose={onClose} />
				})}
			</ul>
		</nav>
	)
}

export default MobileNavigation
