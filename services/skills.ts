import { db } from '@/db/db'
import { ISkill } from '@/types'

export async function getSkills(): Promise<ISkill[]> {
	await new Promise((resolve) => setTimeout(resolve, 500)) // loading ui components

	const skills = db.prepare('SELECT * FROM skills').all()
	return skills as ISkill[]
}
