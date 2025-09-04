'use client'

import { useState } from 'react'

import { useIsMobile } from '@/hooks/useIsMobile'
import { useIsHydrated } from '@/hooks/useIsHydrated'
import styles from './header.module.css'
import Navigation from './navigation/navigation'
import BlinkingCursor from '@/components/common/ui/blinking-cursor'
import { RxHamburgerMenu } from 'react-icons/rx'
import MobileNavigation from './mobile-navigation/mobile-navigation'

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const isMobile = useIsMobile()
	const isHydrated = useIsHydrated()

	const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)
	const closeMobileMenu = () => setIsMobileMenuOpen(false)

	return (
		<div className={styles.headerContainer}>
			<header>
				<div className={`${styles.logo} typing-animation`}>
					$ Coding_Partner
					<BlinkingCursor />
				</div>
				{!isMobile && isHydrated && <Navigation />}
				{isMobile && isHydrated && (
					<button onClick={toggleMobileMenu}>
						<RxHamburgerMenu size={25} />
					</button>
				)}
				{isMobile && isHydrated && (
					<MobileNavigation isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
				)}
			</header>
		</div>
	)
}
