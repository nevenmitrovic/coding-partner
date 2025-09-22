'use client'

import { FormEvent, startTransition, useActionState, useEffect } from 'react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { FieldErrors, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import styles from './login.module.css'
import Input from '@/components/common/ui/input'
import Button from '@/components/common/ui/button'
import { loginFormSchema, LoginFormSchema } from '@/validations/auth'
import { signIn } from '@/actions/auth'
import { useToast } from '@/contexts/toast-context'
import { TOAST_ERROR, TOAST_LOADING } from '@/constants'

export default function Login() {
	const [state, formAction, isPending] = useActionState(signIn, null)
	const form = useForm<LoginFormSchema>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})
	const { control, reset, handleSubmit } = form
	const { showToast, hideToast } = useToast()

	const onSubmit = (data: LoginFormSchema) => {
		const formData = new FormData()
		Object.entries(data).forEach(([key, value]) => {
			formData.append(key, value || '')
		})

		startTransition(() => {
			formAction(formData)
		})
	}
	const onError = (errors: FieldErrors<LoginFormSchema>) => {
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
			showToast('Login Form submitting...', TOAST_LOADING)
		}
		if (state) {
			hideToast(TOAST_LOADING)
			if (state.success) {
				reset()
				redirect('/coders')
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

					<Button type='submit' text='login --execute' />
				</form>

				<div className={styles.footer}>
					<p className={styles.signupText}>
						Need an account? &gt;{' '}
						<Link href='/signup' className={styles.link}>
							signup
						</Link>
					</p>
				</div>
			</div>
		</div>
	)
}
