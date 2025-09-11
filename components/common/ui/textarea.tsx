import { ITextarea } from '@/types'

export default function Textarea({ name, label, placeholder, info }: ITextarea) {
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<textarea id='textarea' className='inputContainer' name={name} placeholder={placeholder} />
			{info && <span className='infoFormText'>{info}</span>}
		</div>
	)
}
