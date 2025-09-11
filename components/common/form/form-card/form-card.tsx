import Input from '@/components/common/ui/input'
import Select from '@/components/common/ui/select'
import Textarea from '@/components/common/ui/textarea'
import styles from './form-card.module.css'
import { IFormCard, IFormCardField, ISkill } from '@/types'

function renderField(field: IFormCardField, options: ISkill[] = []) {
	if (field.type === 'text') {
		return (
			<Input
				key={field.name}
				type={field.type}
				placeholder={field.placeholder}
				name={field.name}
				info={field.info}
				label={field.label}
			/>
		)
	} else if (field.type === 'select') {
		return <Select key={field.name} name={field.name} label={field.label} options={options} />
	} else {
		return (
			<Textarea
				key={field.name}
				placeholder={field.placeholder}
				name={field.name}
				info={field.info}
				label={field.label}
			/>
		)
	}
}

export default function FormCard({ title, fields, options }: IFormCard) {
	return (
		<div className={styles.formCard}>
			<header className={styles.formCardHeader}>{title}</header>
			<div className={styles.formCardContent}>
				{fields.map((field) => renderField(field, options))}
			</div>
		</div>
	)
}
