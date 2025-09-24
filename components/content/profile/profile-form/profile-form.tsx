'use client'

import { FieldErrors, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormEvent, startTransition, useActionState, useEffect } from 'react'

import styles from './profile-form.module.css'
import { PROFILE_FORM_CARDS, TOAST_ERROR, TOAST_LOADING, TOAST_SUCCESS } from '@/constants'
import FormCard from '@/components/common/form/form-card/form-card'
import { profileFormSchema, ProfileFormSchema } from '@/validations/profile'
import { useToast } from '@/contexts/toast-context'
import FormSubmit from './form-submit/form-submit'
import { updateCoder } from '@/actions/coders'

export default function ProfileForm() {
	const [state, formAction, isPending] = useActionState(updateCoder, null)
	const form = useForm<ProfileFormSchema>({
		resolver: zodResolver(profileFormSchema),
		defaultValues: {
			fullName: '',
			year: '',
			skills: '',
			interests: '',
			whatsApp: '',
		},
	})
	const { control, reset, handleSubmit } = form
	const { showToast, hideToast } = useToast()

	const onSubmit = (data: ProfileFormSchema) => {
		const formData = new FormData()
		Object.entries(data).forEach(([key, value]) => {
			formData.append(key, value || '')
		})

		startTransition(() => {
			formAction(formData)
		})
	}
	const onError = (errors: FieldErrors<ProfileFormSchema>) => {
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
		<form className={styles.formContent} onSubmit={handleFormSubmit}>
			{PROFILE_FORM_CARDS.map((item) => (
				<FormCard key={item.title} {...item} control={control} />
			))}
			<FormSubmit />
		</form>
	)
}
