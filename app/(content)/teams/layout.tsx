import { ReactNode } from 'react'

import styles from './layout.module.css'

interface TeamsLayoutProps {
	form: ReactNode
	teams: ReactNode
}

export default function TeamsLayout({ form, teams }: TeamsLayoutProps) {
	return (
		<main className={styles.teamsMainLayout}>
			{form}
			{teams}
		</main>
	)
}
