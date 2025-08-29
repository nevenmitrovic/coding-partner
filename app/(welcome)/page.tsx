import BrowseSection from '@/components/welcome/browse-section/browse-section'
import InfoTerminal from '@/components/welcome/info-terminal/info-terminal'
import WelcomeHeader from '@/components/welcome/welcome-header/welcome-header'

export default function Home() {
	return (
		<main id='page'>
			<WelcomeHeader />
			<InfoTerminal />
			<BrowseSection />
		</main>
	)
}
