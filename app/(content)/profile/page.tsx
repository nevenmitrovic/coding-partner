import { auth } from '@/auth/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import styles from './page.module.css'
import ProfileHeader from '@/components/content/profile/profile-header/profile-header'
import ProfileForm from '@/components/content/profile/profile-form/profile-form'

export default async function ProfilePage() {
	const session = await auth.api.getSession({
		headers: await headers(),
	})
	if (!session) {
		redirect('/login')
	}

	return (
		<main className={styles.profileContent}>
			<ProfileHeader />
			<ProfileForm />
		</main>
	)
}
