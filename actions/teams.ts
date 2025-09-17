'use server'

import { revalidatePath } from 'next/cache'

import { ITeam } from '@/types'
import { db } from '@/db/db'
import { teamFormSchema } from '@/validations/teams'

export async function createTeam(prevState: any, formData: FormData) {
	await new Promise((resolve) => setTimeout(resolve, 500)) // loading ui

	try {
		const rawData = {
			teamName: formData.get('teamName') as string,
			project: formData.get('project') as string,
			requiredSkills: formData.get('requiredSkills') as string,
			projectTimeline: formData.get('projectTimeline') as string,
			description: formData.get('description') as string,
			whatsappGroupLink: formData.get('whatsappGroupLink') as string,
		}

		const teamData: ITeam = {
			team_name: rawData.teamName,
			project: rawData.project,
			required_skills: rawData.requiredSkills,
			project_timeline: rawData.projectTimeline,
			description: rawData.description,
			whatsapp_group_link: rawData.whatsappGroupLink,
		}

		db.prepare(
			`
					INSERT INTO teams VALUES (
						null,
						@team_name,
						@project,
						@required_skills,
						@project_timeline,
						@description,
						@whatsapp_group_link
					)
				`
		).run(teamData)
		revalidatePath('/teams')

		return { success: true, message: 'Team created successfully!' }
	} catch (error) {
		console.error('Database error:', error)
		return { error: 'Failed to create a team' }
	}
}
