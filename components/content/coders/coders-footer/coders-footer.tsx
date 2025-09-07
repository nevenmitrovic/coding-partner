import styles from './coders-footer.module.css'

export default function CodersFooter() {
	return (
		<footer className={styles.codersFooter}>
			<p>Query executed in 0.517ms</p>
			<p>Memory usage: 45MB</p>
		</footer>
	)
}
