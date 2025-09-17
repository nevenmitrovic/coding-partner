import { FieldValues, useController } from 'react-hook-form'

import { ITextarea } from '@/types'

export default function Textarea<T extends FieldValues>({
	name,
	label,
	placeholder,
	info,
	controllerProps,
}: ITextarea<T>) {
	const { field } = useController(controllerProps)

	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<textarea
				{...field}
				id='textarea'
				className='inputContainer'
				name={name}
				placeholder={placeholder}
				value={field.value as string}
			/>
			{info && <span className='infoFormText'>{info}</span>}
		</div>
	)
}
