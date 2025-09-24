import { db } from '@/db/db'
import { ICoder } from '@/types'
import { revalidateTag, unstable_cache } from 'next/cache'

export const getCoders = unstable_cache(
	async (): Promise<ICoder[]> => {
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
	},
	['get-coders'],
	{
		tags: ['coders'],
	}
)

export const getCodersCount = unstable_cache(
	async () => {
		const codersCount = db.prepare('SELECT COUNT(*) as count FROM coders').get() as {
			count: number
		}
		return codersCount.count
	},
	['get-coders-count'],
	{
		tags: ['coders'],
	}
)

export const createCoder = async (id: string, fullName: string) => {
	const res = db.prepare('INSERT INTO coders (id, full_name) VALUES (?, ?)').run(id, fullName)
	revalidateTag('coders')
	return res
}

export const updateCoderInDB = async (
	id: string,
	fullName?: string,
	year?: string,
	active?: string,
	whatsApp?: string,
	interests?: string,
	skills?: string
) => {
	const res = db
		.prepare(
			`UPDATE coders SET 
            full_name = COALESCE(?, full_name),
            year = COALESCE(?, year),
            active = COALESCE(?, active),
            whatsApp = COALESCE(?, whatsApp),
			interests = COALESCE(?, interests),
			skills = COALESCE(?, skills)
        	WHERE id = ?`
		)
		.run(fullName, year, active, whatsApp, interests, skills, id)
	revalidateTag('coders')
	return res
}
