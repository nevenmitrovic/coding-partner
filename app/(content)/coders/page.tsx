import CardsContainer from '@/components/content/coders/cards-container/cards-container'
import styles from './page.module.css'
import CodersHeader from '@/components/content/coders/header/coders-header'

export default function Home() {
	return (
		<main className={styles.codersContent}>
			<CodersHeader />
			<CardsContainer />
		</main>
	)
}
