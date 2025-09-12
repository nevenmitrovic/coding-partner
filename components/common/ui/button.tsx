'use client'

import { memo } from 'react'
import { useFormStatus } from 'react-dom'

interface ButtonProps {
	text: string
	type: 'button' | 'submit'
	onClick?: () => void
}

export default memo(function Button({ text, type, onClick }: ButtonProps) {
	const { pending } = useFormStatus()

	return (
		<button id='button' type={type} onClick={onClick} disabled={pending} aria-disabled={pending}>
			{pending ? 'Submitting...' : text}
		</button>
	)
})
