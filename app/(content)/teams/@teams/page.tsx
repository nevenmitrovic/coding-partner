import { Suspense } from 'react'

import styles from './page.module.css'
import TeamsHeader from '@/components/content/teams/teams/teams-header/teams-header'
import TeamsContainer from '@/components/content/teams/teams/teams-container/teams-container'
import TeamCardLoading from '@/components/content/teams/teams/teams-container/team-card-loading/team-card-loading'

export default function Teams() {
	return (
		<section className={styles.teamsSection}>
			<TeamsHeader />
			<Suspense fallback={<TeamCardLoading />}>
				<TeamsContainer />
			</Suspense>
		</section>
	)
}
