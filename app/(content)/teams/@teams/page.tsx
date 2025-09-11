import styles from './page.module.css'
import TeamsHeader from '@/components/content/teams/teams/teams-header/teams-header'
import TeamsContainer from '@/components/content/teams/teams/teams-container/teams-container'

export default function Teams() {
	return (
		<section className={styles.teamsSection}>
			<TeamsHeader />
			<TeamsContainer />
		</section>
	)
}
