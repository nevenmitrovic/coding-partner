import { db } from '@/db/db'
import { ICoder, ICoderProfile } from '@/types'
import { revalidateTag, unstable_cache } from 'next/cache'

export const getCoders = unstable_cache(
	async (): Promise<ICoder[]> => {
		await new Promise((resolve) => setTimeout(resolve, 500)) // loading ui components

		let coders = db.prepare('SELECT * FROM coders').all() as ICoderProfile[]
		let newCodersData: ICoder[] = coders.map((coder) => {
			let interestsArr = coder.interests ? coder.interests.split(',') : []
			let skillsArr = coder.interests ? coder.skills.split(',') : []
			return {
				...coder,
				interests: interestsArr,
				skills: skillsArr,
			}
		})
		return newCodersData
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
