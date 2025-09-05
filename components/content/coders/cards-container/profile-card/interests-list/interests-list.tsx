import { memo } from 'react'

import styles from './interests-list.module.css'

interface InterestsListProps {
	list: string[]
}

export default memo(function InterestsList({ list }: InterestsListProps) {
	return (
		<div className={styles.interestsContainer}>
			<h4>$ interests:</h4>
			<ul>
				{list.map((item, index) => (
					<li key={item}>{item + (index !== list.length - 1 ? ', ' : '')}</li>
				))}
			</ul>
		</div>
	)
})
