export interface INavLink {
	href: string
	label: string
	onClose?: () => void
}
export interface IInput {
	type: 'text' | 'number'
	placeholder: string
	label?: string
	name: string
	info?: string
}
export interface ICoder extends ICoderProfile {
	skills: string[]
	interests: string[]
}
export interface ICoderProfile {
	id: number
	full_name: string
	year: string
	active: string
	whatsApp: string
}
export interface ISkill {
	id: number
	name: string
}
export interface IInterests {
	id: number
	name: string
}
export interface ICoderSkill {
	coder_id: number
	skill_id: number
}
export interface ICoderInterest {
	coder_id: number
	interest_id: number
}
export interface IFormCardField {
	type: 'text' | 'textarea' | 'select'
	placeholder: string
	label: string
	name: string
	info?: string
}
export interface IFormCard {
	title: string
	fields: IFormCardField[]
}
export interface ISelect {
	name: string
	label: string
	options: string[]
}
export interface ITextarea {
	name: string
	label: string
	placeholder: string
	info?: string
}
export interface ITeam {
	team_name: string
	project: string
	required_skills: string
	project_timeline: string
	description: string
	whatsapp_group_link: string
}
export interface ITeamCard {
	teamName: string
	project: string
	requiredSkills: string[]
	projectTimeline: string
	description: string
	whatsappGroupLink?: string
}
