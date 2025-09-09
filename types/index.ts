export interface INavLink {
	href: string
	label: string
	onClose?: () => void
}
export interface IInput {
	type: 'text' | 'number'
	placeholder: string
}
export interface IUserProfile {
	id: string
	fullName: string
	year: string
	active: string
	skillsList: string[]
	interests: string[]
	whatsApp: string
}
