import { IInput } from '@/types'

export default function Input({ type, placeholder, name, label, info }: IInput) {
	return (
		<div>
			{label && <label htmlFor={name}>{label}</label>}
			<input
				className='inputContainer'
				name={name}
				id='input'
				type={type}
				placeholder={placeholder}
			/>
			{info && <span className='infoFormText'>{info}</span>}
		</div>
	)
}
