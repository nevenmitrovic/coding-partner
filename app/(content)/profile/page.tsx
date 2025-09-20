import { auth } from '@/auth/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import styles from './page.module.css'

export default async function ProfilePage() {
	const session = await auth.api.getSession({
		headers: await headers(),
	})
	if (!session) {
		redirect('/login')
	}

	return (
		<div>
			<h1>This is Profile Page</h1>
			<p>In progress...</p>
		</div>
	)
}
