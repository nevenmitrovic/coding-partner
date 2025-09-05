import Link from 'next/link'

import Button from '@/components/common/ui/button'
import InterestsList from './interests-list/interests-list'
import styles from './profile-card.module.css'
import SkillsList from './skills-list/skills-list'
import { getWatsAppMe } from '@/utils'

export default function ProfileCard() {
	return (
		<div className={styles.profileCard}>
			<header>
				<div>
					<h4>Neven Mitrovic</h4>
					<p>#331</p>
				</div>
				<div>
					<p>Year: N/A</p>
					<p>Active: 4 days ago</p>
				</div>
			</header>
			<div className={styles.profileInfo}>
				<SkillsList list={['React', 'JavaScript', 'Angular', 'Vue', 'NodeJS', 'TailwindCSS']} />
				<InterestsList list={['Web Development', 'UI/UX', 'Mobile Development']} />
				<Link href={getWatsAppMe('+381656196083')}>
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
