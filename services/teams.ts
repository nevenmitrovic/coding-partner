import { db } from '@/db/db'
import { ITeam, ITeamCard } from '@/types'

export async function getTeams(): Promise<ITeamCard[]> {
	await new Promise((resolve) => setTimeout(resolve, 500)) // loading ui components

	const teams: ITeam[] = db.prepare('SELECT * FROM teams').all() as ITeam[]
	const mappedData = teams.map((team) => {
		const mappedTeam: ITeamCard = {
			teamName: team.team_name,
			requiredSkills: team.required_skills.split(','),
			projectTimeline: team.project_timeline,
			whatsappGroupLink: team.whatsapp_group_link,
			project: team.project,
			description: team.description,
		}
		return mappedTeam
	})
	return mappedData
}
