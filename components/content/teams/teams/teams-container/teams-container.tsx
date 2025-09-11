import TeamCard from './team-card/team-card'
import styles from './teams-container.module.css'

export default function TeamsContainer() {
	return (
		<div className={styles.teamsContainer}>
			<TeamCard />
			<TeamCard />
		</div>
	)
}
