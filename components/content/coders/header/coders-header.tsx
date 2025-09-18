'use client'

import styles from './coders-header.module.css'
import SearchInput from '@/components/common/ui/search-input'
import { useCodersContext } from '@/contexts/coders-context'

export default function CodersHeader() {
	const { searchTerm, handleSearch, codersCount, totalCount } = useCodersContext()

	return (
		<header className={styles.codersHeader}>
			<h2>Browse Coders</h2>
			<div>
				<SearchInput
					name='coderSearch'
					placeholder='Search by name, skills and interests...'
					value={searchTerm}
					onChange={handleSearch}
				/>
			</div>
			<p>{`Found ${codersCount} of ${totalCount} active hackers`}</p>
		</header>
	)
}
