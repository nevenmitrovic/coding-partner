'use client'

import { useController, type FieldValues } from 'react-hook-form'

import { IInput } from '@/types'

export default function Input<T extends FieldValues>({
	type,
	placeholder,
	name,
	label,
	info,
	controllerProps,
}: IInput<T>) {
	const { field } = useController(controllerProps)

	return (
		<div>
			{label && <label htmlFor={name}>{label}</label>}
			<input
				{...field}
				value={field.value as string}
				className='inputContainer input'
				name={name}
				type={type}
				placeholder={placeholder}
			/>
			{info && <span className='infoFormText'>{info}</span>}
		</div>
	)
}
