'use client'

import { memo } from 'react'

interface ButtonProps {
	text: string
	type: 'button' | 'submit'
	onClick?: () => void
}

export default memo(function Button({ text, type, onClick }: ButtonProps) {
	return (
		<button id='button' type={type} onClick={onClick}>
			{text}
		</button>
	)
})
