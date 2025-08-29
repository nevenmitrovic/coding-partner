import BrowseSection from '@/components/welcome/browse-section/browse-section'
import InfoTerminal from '@/components/welcome/info-terminal/info-terminal'
import WelcomeCards from '@/components/welcome/welcome-cards/welcome-cards'
import WelcomeHeader from '@/components/welcome/welcome-header/welcome-header'
import WelcomeFooter from '@/components/welcome/welcome-footer/welcome-footer'
import styles from './page.module.css'

export default function Home() {
	return (
		<main id={styles.welcomePage}>
			<WelcomeHeader />
			<InfoTerminal />
			<BrowseSection />
			<WelcomeCards />
			<WelcomeFooter />
		</main>
	)
}
