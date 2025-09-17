import { getTeams } from '@/services/teams'
import TeamCard from './team-card/team-card'
import styles from './teams-container.module.css'

export default async function TeamsContainer() {
	const teams = await getTeams()

	return (
		<div className={styles.teamsContainer}>
			{teams.map((team, index) => (
				<TeamCard key={`${team.project}-${index}`} {...team} />
			))}
		</div>
	)
}
