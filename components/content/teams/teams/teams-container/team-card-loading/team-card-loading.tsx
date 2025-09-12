import styles from './team-card-loading.module.css'

export default function TeamCardLoading() {
	return (
		<div className={styles.teamCardLoading}>
			<header className={styles.header}>
				<div className={`${styles.teamName} ${styles.skeleton}`}></div>
				<div className={`${styles.project} ${styles.skeleton}`}></div>
			</header>

			<div className={styles.skills}>
				<div className={`${styles.skillsLabel} ${styles.skeleton}`}></div>
				<div className={styles.skillsList}>
					<div className={`${styles.skill} ${styles.skeleton}`}></div>
					<div className={`${styles.skill} ${styles.skeleton}`}></div>
					<div className={`${styles.skill} ${styles.skeleton}`}></div>
				</div>
			</div>

			<div className={styles.timeline}>
				<div className={`${styles.timelineLabel} ${styles.skeleton}`}></div>
				<div className={`${styles.timelineValue} ${styles.skeleton}`}></div>
			</div>

			<div className={styles.description}>
				<div className={`${styles.descriptionLabel} ${styles.skeleton}`}></div>
				<div className={`${styles.descriptionText} ${styles.skeleton}`}></div>
				<div
					className={`${styles.descriptionText} ${styles.skeleton}`}
					style={{ width: '70%' }}
				></div>
			</div>

			<div className={styles.actions}>
				<div className={`${styles.button} ${styles.skeleton}`}></div>
			</div>
		</div>
	)
}
