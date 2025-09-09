import Link from 'next/link'

import Button from '@/components/common/ui/button'
import InterestsList from './interests-list/interests-list'
import styles from './profile-card.module.css'
import SkillsList from './skills-list/skills-list'
import { getWatsAppMe } from '@/utils'
import { ICoderProfile } from '@/types'

export default function ProfileCard({
	id,
	fullName,
	skillsList,
	interests,
	active,
	year,
	whatsApp,
}: ICoderProfile) {
	return (
		<div className={styles.profileCard}>
			<header>
				<div>
					<h4>{fullName}</h4>
					<p>#{id}</p>
				</div>
				<div>
					<p>Year: {year}</p>
					<p>Active: {active}</p>
				</div>
			</header>
			<div className={styles.profileInfo}>
				<SkillsList list={skillsList} />
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
