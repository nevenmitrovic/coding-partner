import TeamForm from '@/components/content/teams/team-form/team-form'
import { createTeam } from '@/actions/teams'

export default function FormPage() {
	return <TeamForm createTeamAction={createTeam} />
}
