'use client'

interface ButtonProps {
	text: string
	type: 'button' | 'submit'
	onClick: () => void
}

export default function Button({ text, type, onClick }: ButtonProps) {
	return (
		<button id='button' type={type} onClick={onClick}>
			{text}
		</button>
	)
}
