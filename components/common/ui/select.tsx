import { ISelect } from '@/types'

export default function Select({ name, label, options }: ISelect) {
	return (
		<div>
			{label && <label htmlFor={name}>{label}</label>}
			<select className='inputContainer' name={name} id='select'>
				{options.map((option) => (
					<option value={option}>{option}</option>
				))}
			</select>
		</div>
	)
}
