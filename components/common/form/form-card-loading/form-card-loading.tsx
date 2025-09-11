import styles from './form-card-loading.module.css'

export default function FormCardLoading() {
	return (
		<div className={styles.formCard}>
			<header className={styles.formCardHeader}>
				<div className={styles.titleSkeleton}></div>
			</header>
			<div className={styles.formCardContent}>
				<div className={styles.skeleton}></div>
				<div className={styles.skeleton}></div>
				<div className={styles.skeleton}></div>
			</div>
		</div>
	)
}
