import { Suspense } from 'react'

import CardsContainer from '@/components/content/coders/cards-container/cards-container'
import styles from './page.module.css'
import CodersHeader from '@/components/content/coders/header/coders-header'
import CodersFooter from '@/components/content/coders/coders-footer/coders-footer'
import ProfileCardLoading from '@/components/content/coders/cards-container/profile-card-loading/profile-card-loading'

export default function Home() {
	return (
		<main className={styles.codersContent}>
			<CodersHeader />
			<Suspense
				fallback={
					<section className={styles.cardsContainer}>
						{Array(3)
							.fill(0)
							.map((_, index) => (
								<ProfileCardLoading key={index} />
							))}
					</section>
				}
			>
				<CardsContainer />
			</Suspense>
			<CodersFooter />
		</main>
	)
}
