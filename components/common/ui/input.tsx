import { IInput } from '@/types'

export default function Input({ type, placeholder }: IInput) {
	return (
		<div>
			<input className='inputContainer' id='input' type={type} placeholder={placeholder} />
		</div>
	)
}
