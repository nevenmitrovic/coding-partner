import { coderProfiles } from '@/mocks'

export async function getCoders() {
	await new Promise((resolve) => setTimeout(resolve, 500))
	return coderProfiles
}
