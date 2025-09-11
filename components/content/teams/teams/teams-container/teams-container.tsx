import TeamCard from './team-card/team-card'
import { teamsData } from '@/mocks'
import styles from './teams-container.module.css'

export default function TeamsContainer() {
	return (
		<div className={styles.teamsContainer}>
			{teamsData.map((team) => (
				<TeamCard key={team.project} {...team} />
			))}
		</div>
	)
}
