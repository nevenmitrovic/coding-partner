import styles from './cards-container.module.css'
import ProfileCard from './profile-card/profile-card'

export default function CardsContainer() {
	return (
		<section className={styles.cardsContainer}>
			<ProfileCard />
			<ProfileCard />
			<ProfileCard />
			<ProfileCard />
		</section>
	)
}
