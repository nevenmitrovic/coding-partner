import { getCoders } from '@/services/coders'
import styles from './cards-container.module.css'
import ProfileCard from './profile-card/profile-card'

export default async function CardsContainer() {
	const coders = await getCoders()

	return (
		<section className={styles.cardsContainer}>
			{coders.map((coder) => (
				<ProfileCard key={coder.id} {...coder} />
			))}
		</section>
	)
}
