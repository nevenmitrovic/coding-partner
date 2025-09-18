'use client'

import { ISearchInput } from '@/types'

export default function SearchInput({ placeholder, name, value, onChange }: ISearchInput) {
	return (
		<div>
			<input
				value={value}
				onChange={onChange}
				className='inputContainer'
				name={name}
				id='input'
				type='text'
				placeholder={placeholder}
			/>
		</div>
	)
}
