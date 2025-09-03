import styles from './mobile-navigation.module.css'
import { NAVIGATION } from '@/constants/index'
import NavLink from '@/components/common/header/common/nav-link/nav-link'
import { RxCross1 } from 'react-icons/rx'

interface MobileNavigationProps {
	isOpen: boolean
	onClose: () => void
}

export const MobileNavigation = ({ isOpen, onClose }: MobileNavigationProps) => {
	return (
		<nav className={`${styles.mobileNavigation} ${isOpen ? styles.open : ''}`}>
			<button className={styles.closeButton} onClick={onClose}>
				<RxCross1 size={24} />
			</button>
			<ul>
				{NAVIGATION.map((item) => (
					<NavLink key={item.label} {...item} />
				))}
			</ul>
		</nav>
	)
}

export default MobileNavigation
