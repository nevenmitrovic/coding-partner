'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './nav-link.module.css'
import { INavLink } from '@/types'

export default function NavLink({ href, label, onClose }: INavLink) {
	const path = usePathname()

	return (
		<li>
			<Link
				href={href}
				className={path.startsWith(href) ? styles.active : styles.inactive}
				onClick={onClose}
			>
				{label}
			</Link>
		</li>
	)
}
