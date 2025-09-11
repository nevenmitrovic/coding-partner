import Link from 'next/link'

import Button from '@/components/common/ui/button'
import styles from './team-card.module.css'

interface TeamCardProps {
	teamName: string
	project: string
	requiredSkills: string[]
	projectTimeline: string
	description: string
	whatsappGroupLink?: string
}

export default function TeamCard({
	teamName,
	project,
	requiredSkills,
	projectTimeline,
	description,
	whatsappGroupLink,
}: TeamCardProps) {
	return (
		<div className={styles.teamCard}>
			<header className={styles.header}>
				<h3 className={styles.teamName}>{teamName}</h3>
				<span className={styles.project}>{project}</span>
			</header>

			<div className={styles.skills}>
				<p>Required Skills:</p>
				<div className={styles.skillsList}>
					{requiredSkills.map((skill, index) => (
						<span key={index} className={styles.skill}>
							{skill}
						</span>
					))}
				</div>
			</div>

			<div className={styles.timeline}>
				<span className={styles.label}>Timeline:</span>
				<span className={styles.timelineValue}>{projectTimeline}</span>
			</div>

			<div className={styles.description}>
				<span className={styles.label}>Description:</span>
				<p className={styles.descriptionText}>{description}</p>
			</div>

			{whatsappGroupLink && (
				<div className={styles.actions}>
					<Link href={whatsappGroupLink} target='_blank'>
						<Button text='Join Team' type='button' />
					</Link>
				</div>
			)}
		</div>
	)
}
