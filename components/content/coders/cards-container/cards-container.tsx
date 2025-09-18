'use client'

import styles from './cards-container.module.css'
import ProfileCard from './profile-card/profile-card'
import ProfileCardLoading from './profile-card-loading/profile-card-loading'
import { useCodersContext } from '@/contexts/coders-context'

export default function CardsContainer() {
	const { coders, loading } = useCodersContext()

	if (loading) {
		return (
			<section className={styles.cardsContainer}>
				{Array(3)
					.fill(0)
					.map((_, index) => (
						<ProfileCardLoading key={index} />
					))}
			</section>
		)
	}

	if (coders.length === 0) {
		return <div className={styles.cardsContainer}>No coders found.</div>
	}

	return (
		<section className={styles.cardsContainer}>
			{coders.map((coder) => (
				<ProfileCard key={coder.id} {...coder} />
			))}
		</section>
	)
}
