'use server'

import { headers } from 'next/headers'

import { auth } from '@/auth/auth'

export async function signUp(
	_prevState: any,
	formData: FormData
): Promise<{ success?: boolean; error?: string }> {
	await new Promise((resolve) => setTimeout(resolve, 500)) // loading ui

	try {
		const email = formData.get('email') as string
		const password = formData.get('password') as string
		const name = formData.get('name') as string

		const res = await auth.api.signUpEmail({
			body: {
				email,
				password,
				name,
			},
			asResponse: true,
		})

		if (res.ok) {
			return { success: true }
		} else {
			const data = await res.json().catch(() => ({}))
			return { error: data?.message || 'Failed to sign up' }
		}
	} catch (error) {
		console.error(error)
		return { error: error instanceof Error ? error.message : 'Failed to sign up' }
	}
}

export async function signIn(
	_prevState: any,
	formData: FormData
): Promise<{ success?: boolean; error?: string }> {
	await new Promise((resolve) => setTimeout(resolve, 500)) // loading ui

	try {
		const email = formData.get('email') as string
		const password = formData.get('password') as string

		const res = await auth.api.signInEmail({
			body: {
				email,
				password,
				rememberMe: false,
			},
			headers: await headers(),
			asResponse: true,
		})

		if (res.ok) {
			return { success: true }
		} else {
			const data = await res.json().catch(() => ({}))
			return { error: data?.message || 'Failed to sign in' }
		}
	} catch (error) {
		console.error(error)
		return { error: error instanceof Error ? error.message : 'Failed to sign in' }
	}
}

export async function signOut() {
	await auth.api.signOut({
		// This endpoint requires session cookies.
		headers: await headers(),
	})
}
