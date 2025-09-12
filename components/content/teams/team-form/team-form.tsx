'use client'

import Form from 'next/form'

import FormHeader from '@/components/content/teams/team-form/form/form-header/form-header'
import FormContent from '@/components/content/teams/team-form/form/form-content/form-content'
import FormSubmit from '@/components/content/teams/team-form/form/form-submit/form-submit'
import styles from './team-form.module.css'

interface TeamFormProps {
	createTeamAction: (formData: FormData) => Promise<void>
}

export default function TeamForm({ createTeamAction }: TeamFormProps) {
	return (
		<Form className={styles.form} action={createTeamAction}>
			<FormHeader />
			<FormContent />
			<FormSubmit />
		</Form>
	)
}
