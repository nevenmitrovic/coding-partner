export interface INavLink {
	href: string
	label: string
	onClose?: () => void
}
export interface IInput {
	type: 'text' | 'number'
	placeholder: string
}
