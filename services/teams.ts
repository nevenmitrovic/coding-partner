import { revalidateTag, unstable_cache } from 'next/cache'
import { db } from '@/db/db'
import { ITeam, ITeamCard } from '@/types'

export const getTeams = unstable_cache(
	async (): Promise<ITeamCard[]> => {
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
	},
	['get-teams'],
	{
		tags: ['teams'],
	}
)

export const getTeamsCount = unstable_cache(
	async () => {
		const codersCount = db.prepare('SELECT COUNT(*) as count FROM teams').get() as {
			count: number
		}
		return codersCount.count
	},
	['get-teams-count'],
	{
		tags: ['teams'],
	}
)

export async function createTeamInDB(teamData: ITeam): Promise<void> {
	await new Promise((resolve) => setTimeout(resolve, 500)) // loading ui components

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
	revalidateTag('teams')
}
