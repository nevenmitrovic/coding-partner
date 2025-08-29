import styles from './welcome-footer.module.css'

export default function WelcomeFooter() {
	return (
		<div className={styles.welcomeFooter}>
			<div></div>
			<div>
				<p>System Status: ONLINE</p>
				<p>Active Users: 127</p>
				<p>Last Updated: 2:48:29 PM</p>
			</div>
		</div>
	)
}
