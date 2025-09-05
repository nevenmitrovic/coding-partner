'use client'

import { useState } from 'react'

import { useIsMobile } from '@/hooks/useIsMobile'
import styles from './header.module.css'
import Navigation from './navigation/navigation'
import BlinkingCursor from '@/components/common/ui/blinking-cursor'
import ClientOnly from '@/components/common/client-only/client-only'
import { RxHamburgerMenu } from 'react-icons/rx'
import MobileNavigation from './mobile-navigation/mobile-navigation'

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const isMobile = useIsMobile()
	const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)
	const closeMobileMenu = () => setIsMobileMenuOpen(false)

	return (
		<div className={styles.headerContainer}>
			<header>
				<div className={`${styles.logo} typing-animation`}>
					$ Coding_Partner
					<BlinkingCursor />
				</div>
				<ClientOnly>
					{!isMobile && <Navigation />}
					{isMobile && (
						<button onClick={toggleMobileMenu}>
							<RxHamburgerMenu size={25} />
						</button>
					)}
					{isMobile && <MobileNavigation isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />}
				</ClientOnly>
			</header>
		</div>
	)
}
