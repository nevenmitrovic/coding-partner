import CardsContainer from '@/components/content/coders/cards-container/cards-container'
import styles from './page.module.css'
import CodersHeader from '@/components/content/coders/header/coders-header'
import CodersFooter from '@/components/content/coders/coders-footer/coders-footer'
import { CodersProvider } from '@/contexts/coders-context'

export default function Home() {
	return (
		<CodersProvider>
			<main className={styles.codersContent}>
				<CodersHeader />
				<CardsContainer />
				<CodersFooter />
			</main>
		</CodersProvider>
	)
}
