import Input from '@/components/common/ui/input'
import Textarea from '@/components/common/ui/textarea'
import styles from './form-card.module.css'
import { IFormCard, IFormCardField, ISkill } from '@/types'
import { Control } from 'react-hook-form'
import { TeamFormSchema } from '@/validations/teams'

function renderField(field: IFormCardField, control: Control<TeamFormSchema>) {
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
					name: field.name as keyof TeamFormSchema,
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
					name: field.name as keyof TeamFormSchema,
				}}
			/>
		)
	}
}

export default function FormCard({ title, fields, control }: IFormCard) {
	return (
		<div className={styles.formCard}>
			<header className={styles.formCardHeader}>{title}</header>
			<div className={styles.formCardContent}>
				{control && fields.map((field) => renderField(field, control))}
			</div>
		</div>
	)
}
