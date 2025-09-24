'use server'

import { headers } from 'next/headers'

import { ICoderProfile } from '@/types'
import { updateCoderInDB } from '@/services/coders'
import { auth } from '@/auth/auth'

export async function updateCoder(_prevState: any, formData: FormData) {
	await new Promise((resolve) => setTimeout(resolve, 500)) // loading ui

	try {
		const session = await auth.api.getSession({
			headers: await headers(),
		})
		const coderData: ICoderProfile = {
			id: session.user.id,
			full_name: formData.get('fullName') as string,
			year: formData.get('year') as string,
			active: formData.get('active') as string,
			whatsApp: formData.get('whatsApp') as string,
			skills: formData.get('skills') as string,
			interests: formData.get('interests') as string,
		}

		await updateCoderInDB(
			coderData.id,
			coderData.full_name,
			coderData.year,
			coderData.active,
			coderData.whatsApp,
			coderData.interests,
			coderData.skills
		)

		return { success: true, message: 'Coder updated successfully!' }
	} catch (error) {
		console.error('Database error:', error)
		return { error: 'Failed to update a coder' }
	}
}
