'use client'

import Form from 'next/form'
import { useForm } from 'react-hook-form'
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
	const { control, reset } = form
	const { showToast, hideToast } = useToast()

	useEffect(() => {
		if (isPending) {
			showToast('Team Form submitting...', TOAST_LOADING)
		}
		if (state && state.success === true) {
			hideToast(TOAST_LOADING)
			showToast(state.message, TOAST_SUCCESS)
			reset()
		}
		if (state && state.success === false) {
			hideToast(TOAST_LOADING)
			showToast(state.message, TOAST_ERROR)
		}
	}, [state, isPending, showToast, hideToast, reset])

	const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault()
		form.handleSubmit(() => {
			startTransition(() => {
				const formData = new FormData(evt.currentTarget)
				formAction(formData)
			})
		})(evt)
	}

	return (
		<Form className={styles.form} action={formAction}>
			<FormHeader />
			<FormContent />
			<FormSubmit />
		</Form>
	)
}
