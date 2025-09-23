import Input from '@/components/common/ui/input'
import Textarea from '@/components/common/ui/textarea'
import styles from './form-card.module.css'
import { IFormCard, IFormCardField } from '@/types'
import { Control, FieldValues, type Path } from 'react-hook-form'

function renderField<T extends FieldValues>(field: IFormCardField, control: Control<T>) {
	if (field.type === 'text') {
		return (
			<Input
				key={field.name}
				type={field.type}
				placeholder={field.placeholder}
				name={field.name}
				info={field.info}
				label={field.label}
				controllerProps={{
					control,
					name: field.name as Path<T>,
				}}
			/>
		)
	} else {
		return (
			<Textarea
				key={field.name}
				placeholder={field.placeholder}
				name={field.name}
				info={field.info}
				label={field.label}
				controllerProps={{
					control,
					name: field.name as Path<T>,
				}}
			/>
		)
	}
}

type FormCardProps<T extends FieldValues> = Omit<IFormCard, 'control'> & { control: Control<T> }

export default function FormCard<T extends FieldValues>({
	title,
	fields,
	control,
}: FormCardProps<T>) {
	return (
		<div className={styles.formCard}>
			<header className={styles.formCardHeader}>{title}</header>
			<div className={styles.formCardContent}>
				{control && fields.map((field) => renderField<T>(field, control))}
			</div>
		</div>
	)
}
