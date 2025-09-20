import { headers } from 'next/headers'

import { auth } from '@/auth/auth'
import { ISignInResponse } from '@/types'

export async function signUp(email: string, password: string, name: string): Promise<Response> {
	return await auth.api.signUpEmail({
		body: {
			email,
			password,
			name,
			callbackURL: '/',
		},
		asResponse: true,
	})
}

export async function signIn(email: string, password: string): Promise<ISignInResponse> {
	return await auth.api.signInEmail({
		body: {
			email,
			password,
			rememberMe: false,
		},
		// This endpoint requires session cookies.
		headers: await headers(),
	})
}

export async function signOut() {
	await auth.api.signOut({
		// This endpoint requires session cookies.
		headers: await headers(),
	})
}
