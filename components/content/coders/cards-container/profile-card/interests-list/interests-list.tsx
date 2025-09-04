import { memo } from 'react'

import styles from './interests-list.module.css'

interface InterestsListProps {
	list: string[]
}

export default memo(function InterestsList({ list }: InterestsListProps) {
	return (
		<>
			<h4>$ interests:</h4>
			<ul>
				{list.map((item, index) => (
					<li key={item}>{item + (index !== item.length - 1 ? ', ' : '')}</li>
				))}
			</ul>
		</>
	)
})
