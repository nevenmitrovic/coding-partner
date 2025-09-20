'use client'

import { FormEvent, startTransition, useActionState, useEffect } from 'react'
import Link from 'next/link'
import { FieldErrors, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import styles from './signup.module.css'
import Input from '@/components/common/ui/input'
import Button from '@/components/common/ui/button'
import { registerFormSchema, RegisterFormSchema } from '@/validations/auth'
import { signUp } from '@/actions/auth'
import { useToast } from '@/contexts/toast-context'
import { TOAST_ERROR, TOAST_LOADING } from '@/constants'

export default function Signup() {
	const [state, formAction, isPending] = useActionState(signUp, null)
	const form = useForm<RegisterFormSchema>({
		resolver: zodResolver(registerFormSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	})
	const { control, reset, handleSubmit } = form
	const { showToast, hideToast } = useToast()

	const onSubmit = (data: RegisterFormSchema) => {
		const formData = new FormData()
		Object.entries(data).forEach(([key, value]) => {
			formData.append(key, value || '')
		})

		startTransition(() => {
			formAction(formData)
		})
	}
	const onError = (errors: FieldErrors<RegisterFormSchema>) => {
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
			showToast('Signup form submitting...', TOAST_LOADING)
		}
		if (state) {
			hideToast(TOAST_LOADING)
			if (state.success) {
				reset()
			}
			if (state.error) {
				showToast(state.error, TOAST_ERROR)
			}
		}
	}, [state, isPending, showToast, hideToast, reset])

	return (
		<div className={styles.container}>
			<div className={styles.terminal}>
				<div className={styles.header}>
					<h1 className={styles.title}>Coding Partner</h1>
					<p className={styles.subtitle}>&gt; authenticating_user...</p>
				</div>

				<form className={styles.form} onSubmit={handleFormSubmit}>
					<div className={styles.inputGroup}>
						<Input
							type='text'
							label='> name:'
							placeholder='Enter your name'
							name='name'
							controllerProps={{
								control,
								name: 'name',
							}}
						/>
					</div>

					<div className={styles.inputGroup}>
						<Input
							type='text'
							label='> email:'
							placeholder='Enter your email'
							name='email'
							controllerProps={{
								control,
								name: 'email',
							}}
						/>
					</div>

					<div className={styles.inputGroup}>
						<Input
							type='text'
							label='> password:'
							placeholder='Enter your password'
							name='password'
							controllerProps={{
								control,
								name: 'password',
							}}
						/>
					</div>

					<Button type='submit' text='signup --execute' />
				</form>

				<div className={styles.footer}>
					<p className={styles.loginText}>
						Have an account? &gt;{' '}
						<Link href='/login' className={styles.link}>
							login
						</Link>
					</p>
				</div>
			</div>
		</div>
	)
}
