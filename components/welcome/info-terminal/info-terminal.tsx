import BlinkingCursor from '@/components/common/blinking-cursor'
import styles from './info-terminal.module.css'

export default function InfoTerminal() {
	return (
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
	)
}
