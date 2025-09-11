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
