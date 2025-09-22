import { getTeamsCount } from '@/services/teams'
import styles from './teams-footer.module.css'

export default async function TeamsFooter() {
	const teamsCount = await getTeamsCount()

	return (
		<footer className={styles.teamsFooter}>
			<p>Active teams: {teamsCount}</p>
			<p>Response rate: 92.1%</p>
		</footer>
	)
}
