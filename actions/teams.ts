'use server'

import { ITeam } from '@/types'
import { createTeamInDB } from '@/services/teams'

export async function createTeam(_prevState: any, formData: FormData) {
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

		await createTeamInDB(teamData)

		return { success: true, message: 'Team created successfully!' }
	} catch (error) {
		console.error('Database error:', error)
		return { error: 'Failed to create a team' }
	}
}
