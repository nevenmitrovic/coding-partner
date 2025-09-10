import { db, codersCount } from '@/db/db'
import { ICoder } from '@/types'

export async function getCoders(): Promise<ICoder[]> {
	await new Promise((resolve) => setTimeout(resolve, 500)) // loading ui components

	const [coders, coderSkills, coderInterests] = await Promise.all([
		db.prepare('SELECT * FROM coders').all(),
		db
			.prepare(
				`
				SELECT 
					coder_skills.coder_id,
					coder_skills.skill_id,
					skills.name as skill_name
				FROM coder_skills
				JOIN skills ON coder_skills.skill_id = skills.id
        	`
			)
			.all(),
		db
			.prepare(
				`
				SELECT 
					coder_interests.coder_id,
					coder_interests.interest_id,
					interests.name as interest_name
				FROM coder_interests
				JOIN interests ON coder_interests.interest_id = interests.id
        	`
			)
			.all(),
	])

	const coderSkillsMap = new Map()
	const coderInterestsMap = new Map()

	coderSkills.forEach((item: any) => {
		if (!coderSkillsMap.has(item.coder_id)) {
			coderSkillsMap.set(item.coder_id, [])
		}
		coderSkillsMap.get(item.coder_id).push(item.skill_name)
	})
	coderInterests.forEach((item: any) => {
		if (!coderInterestsMap.has(item.coder_id)) {
			coderInterestsMap.set(item.coder_id, [])
		}
		coderInterestsMap.get(item.coder_id).push(item.interest_name)
	})

	const codersData = coders.map((coder: any) => ({
		...coder,
		skills: coderSkillsMap.get(coder.id) || [],
		interests: coderInterestsMap.get(coder.id) || [],
	}))

	return codersData
}

export function getCodersCount() {
	return codersCount.count
}
