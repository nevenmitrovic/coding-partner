import BlinkingCursor from '@/components/common/ui/blinking-cursor'
import styles from './teams-header.module.css'

export default function TeamsHeader() {
	return (
		<header>
			<h2 className={styles.teamsHeader}>
				{`> active_teams.list()`}
				<BlinkingCursor />
			</h2>
		</header>
	)
}
