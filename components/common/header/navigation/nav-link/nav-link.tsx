'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './nav-link.module.css'
import { INavLink } from '@/types'

export default function NavLink({ href, label }: INavLink) {
	const path = usePathname()

	return (
		<li>
			<Link href={href} className={path === label.toLowerCase() ? styles.active : styles.inactive}>
				{label}
			</Link>
		</li>
	)
}
