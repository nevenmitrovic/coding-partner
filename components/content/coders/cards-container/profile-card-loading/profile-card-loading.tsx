import styles from './profile-card-loading.module.css'

export default function ProfileCardLoading() {
	return (
		<div className={styles.profileCard}>
			<header className={styles.header}>
				<div className={styles.headerTop}>
					<div className={styles.nameLoading}></div>
					<div className={styles.idLoading}></div>
				</div>
				<div className={styles.headerBottom}>
					<div className={styles.yearLoading}></div>
					<div className={styles.activeLoading}></div>
				</div>
			</header>
			<div className={styles.profileInfo}>
				<div className={styles.skillsLoading}>
					<div className={styles.skillItem}></div>
					<div className={styles.skillItem}></div>
					<div className={styles.skillItem}></div>
				</div>
				<div className={styles.interestsLoading}>
					<div className={styles.interestItem}></div>
					<div className={styles.interestItem}></div>
				</div>
				<div className={styles.buttonLoading}></div>
			</div>
			<div className={styles.profileStatus}>
				<div className={styles.statusIndicator}></div>
				<div className={styles.statusTextLoading}></div>
			</div>
		</div>
	)
}
