'use server'

import { ITeam } from '@/types'

export async function createTeam(formData: FormData) {
	await new Promise((resolve) => setTimeout(resolve, 500))

	const teamName = formData.get('teamName') as string
	const project = formData.get('project') as string
	const requiredSkills = formData.get('requiredSkills') as string
	const projectTimeline = formData.get('projectTimeline') as string
	const description = formData.get('description') as string
	const whatsappGroupLink = formData.get('whatsappGroupLink') as string

	const teamData: ITeam = {
		team_name: teamName,
		project,
		required_skills: requiredSkills,
		project_timeline: projectTimeline,
		description,
		whatsapp_group_link: whatsappGroupLink,
	}

	console.log('Team data:', teamData)
}
