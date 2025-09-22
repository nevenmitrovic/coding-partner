'use client'

import { authClient } from '@/auth/auth-client'
import NavLink from '@/components/common/header/common/nav-link/nav-link'
import { NAVIGATION } from '@/constants'

import styles from './navigation.module.css'

export default function Navigation() {
	const { data, error } = authClient.useSession()

	const handleSignOut = async () => {
		await authClient.signOut()
	}

	return (
		<nav className={styles.navigation}>
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
					return <NavLink key={item.label} {...item} />
				})}
			</ul>
		</nav>
	)
}
