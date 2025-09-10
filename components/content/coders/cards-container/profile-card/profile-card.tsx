import Link from 'next/link'

import Button from '@/components/common/ui/button'
import InterestsList from './interests-list/interests-list'
import styles from './profile-card.module.css'
import SkillsList from './skills-list/skills-list'
import { getWatsAppMe } from '@/utils'
import { ICoder } from '@/types'

export default function ProfileCard({
	id,
	full_name,
	skills,
	interests,
	active,
	year,
	whatsApp,
}: ICoder) {
	return (
		<div className={styles.profileCard}>
			<header>
				<div>
					<h4>{full_name}</h4>
					<p>#{id}</p>
				</div>
				<div>
					<p>Year: {year}</p>
					<p>Active: {active}</p>
				</div>
			</header>
			<div className={styles.profileInfo}>
				<SkillsList list={skills} />
				<InterestsList list={interests} />
				<Link href={getWatsAppMe(whatsApp)}>
					<Button text='> WatsApp' type='button' />
				</Link>
			</div>
			<div className={styles.profileStatus}>
				<div />
				<p>STATUS: ONLINE</p>
			</div>
		</div>
	)
}
