import BlinkingCursor from '@/components/common/blinking-cursor'
import styles from './page.module.css'

export default function Home() {
	return (
		<main id='page'>
			<div className={styles.header}>
				<h1>Coding Partner</h1>
				<p>Find your hack partner</p>
			</div>
			<section id='section' className={styles.infoTerminal}>
				<p>~/neven/hackathons $</p>
				<h3>
					<span className='typing-animation'>
						{'>'} find_your_hack_partner{'()'}
					</span>
					<BlinkingCursor />
				</h3>
				<p>// Find coding partners for hackathons and projects</p>
			</section>
		</main>
	)
}
