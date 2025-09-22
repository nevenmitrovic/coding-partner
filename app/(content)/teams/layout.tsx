import { ReactNode } from 'react'

import styles from './layout.module.css'
import TeamsFooter from '@/components/content/teams/teams-footer/teams-footer'

interface TeamsLayoutProps {
	form: ReactNode
	teams: ReactNode
}

export default function TeamsLayout({ form, teams }: TeamsLayoutProps) {
	return (
		<>
			<main className={styles.teamsMainLayout}>
				{form}
				{teams}
			</main>
			<TeamsFooter />
		</>
	)
}
