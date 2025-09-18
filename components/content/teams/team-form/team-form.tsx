'use client'

import { FieldErrors, useForm } from 'react-hook-form'
import { FormEvent, startTransition, useActionState, useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

import FormHeader from '@/components/content/teams/team-form/form/form-header/form-header'
import FormContent from '@/components/content/teams/team-form/form/form-content/form-content'
import FormSubmit from '@/components/content/teams/team-form/form/form-submit/form-submit'
import styles from './team-form.module.css'
import { createTeam } from '@/actions/teams'
import { teamFormSchema, type TeamFormSchema } from '@/validations/teams'
import { useToast } from '@/contexts/toast-context'

const TOAST_LOADING = 'team-form-loading...'
const TOAST_SUCCESS = 'team-form-success'
const TOAST_ERROR = 'team-form-error'

export default function TeamForm() {
	const [state, formAction, isPending] = useActionState(createTeam, null)
	const form = useForm<TeamFormSchema>({
		resolver: zodResolver(teamFormSchema),
		defaultValues: {
			teamName: '',
			project: '',
			requiredSkills: '',
			projectTimeline: '',
			description: '',
			whatsappGroupLink: '',
		},
	})
	const { control, reset, handleSubmit } = form
	const { showToast, hideToast } = useToast()

	const onSubmit = (data: TeamFormSchema) => {
		const formData = new FormData()
		Object.entries(data).forEach(([key, value]) => {
			formData.append(key, value || '')
		})

		startTransition(() => {
			formAction(formData)
		})
	}
	const onError = (errors: FieldErrors<TeamFormSchema>) => {
		const firstError = Object.values(errors)[0]
		if (firstError?.message) {
			showToast(firstError.message, TOAST_ERROR)
		}
	}
	const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		handleSubmit(onSubmit, onError)(e)
	}

	useEffect(() => {
		if (isPending) {
			showToast('Team Form submitting...', TOAST_LOADING)
		}
		if (state && state.success === true) {
			hideToast(TOAST_LOADING)
			showToast(state.message, TOAST_SUCCESS)
			reset()
		}
	}, [state, isPending, showToast, hideToast, reset])

	return (
		<form className={styles.form} onSubmit={handleFormSubmit}>
			<FormHeader />
			<FormContent control={control} />
			<FormSubmit />
		</form>
	)
}
