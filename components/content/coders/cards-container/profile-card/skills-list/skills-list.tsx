import { memo } from 'react'

import styles from './skills-list.module.css'

interface SkillsListProps {
	list: string[]
}

export default memo(function SkillsList({ list }: SkillsListProps) {
	return (
		<div className={styles.skillsContainer}>
			<h4>$ skills.list{'()'}:</h4>
			<ul>
				{list.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	)
})
