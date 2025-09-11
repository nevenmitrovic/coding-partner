import { getTeams } from '@/services/teams'
import TeamCard from './team-card/team-card'
import styles from './teams-container.module.css'

export default async function TeamsContainer() {
	const teams = await getTeams()

	return (
		<div className={styles.teamsContainer}>
			{teams.map((team) => (
				<TeamCard key={team.project} {...team} />
			))}
		</div>
	)
}
