import styles from './welcome-cards.module.css'

export default function WelcomeCards() {
	return (
		<section className={styles.cardsSection}>
			<div>
				<h4>Skill Matching</h4>
				<p>Find coders with complementary skills for your projects</p>
			</div>
			<div>
				<h4>Team Building</h4>
				<p>Create and join teams for hackathons and projects</p>
			</div>
			<div>
				<h4>Easy Connect</h4>
				<p>Direct contact through WhatsApp and social platforms</p>
			</div>
		</section>
	)
}
