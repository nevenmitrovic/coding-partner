import { useState, useEffect, useMemo } from 'react'
import { ICoder } from '@/types'

export default function useCoders() {
	const [coders, setCoders] = useState<ICoder[]>([])
	const [loading, setLoading] = useState(false)
	const [searchTerm, setSearchTerm] = useState('')

	useEffect(() => {
		const fetchCoders = async () => {
			setLoading(true)
			try {
				const response = await fetch('/api/coders')
				const codersData = await response.json()
				setCoders(codersData)
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}

		fetchCoders()
	}, [])

	const filteredCoders = useMemo(() => {
		if (!searchTerm.trim()) {
			return coders
		}

		const searchLower = searchTerm.toLowerCase()

		return coders.filter(
			(coder) =>
				coder.full_name?.toLowerCase().includes(searchLower) ||
				coder.skills?.some((skill) => skill.toLowerCase().includes(searchLower)) ||
				coder.interests?.some((interest) => interest.toLowerCase().includes(searchLower))
		)
	}, [coders, searchTerm])

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}
	const clearSearch = () => {
		setSearchTerm('')
	}

	return {
		coders: filteredCoders,
		allCoders: coders,
		searchTerm,
		handleSearch,
		clearSearch,
		codersCount: filteredCoders.length,
		totalCount: coders.length,
		loading,
	}
}
