import { IFormCard, INavLink } from '@/types'

export const NAVIGATION: INavLink[] = [
	{
		href: '/coders',
		label: '[Coders]',
	},
	{
		href: '/teams',
		label: '[Teams]',
	},
	{
		href: '/profile',
		label: '[Profile]',
	},
	{
		href: '/login',
		label: '[Login]',
	},
]

export const TEAM_FORM_CARDS: IFormCard[] = [
	{
		title: '> team_config.json',
		fields: [
			{
				type: 'text',
				placeholder: 'Enter your team name',
				label: '> team_name:',
				name: 'teamName',
			},
			{
				type: 'text',
				placeholder: 'e.g., Serbia Hackathon 2024',
				label: '> hackathon_event_or_project_name:',
				name: 'project',
			},
		],
	},
	{
		title: '> requirements.yaml',
		fields: [
			{
				type: 'text',
				placeholder: 'Frontend, Backend, UI/UX, Mobile Dev (comma separated)',
				label: '> required_skills: []',
				name: 'requiredSkills',
				info: '# Specify the skills you need for your team',
			},
			{
				type: 'text',
				placeholder: 'e.g., 48 hours, 1 week, 1 month',
				label: '> project_timeline:',
				name: 'projectTimeline',
			},
		],
	},
	{
		title: '> project_brief.md',
		fields: [
			{
				type: 'textarea',
				placeholder:
					"Describe your project idea, goals, and what you're looking for in team members...",
				label: '> description:',
				name: 'description',
				info: '# Be specific about your vision',
			},
		],
	},
	{
		title: '> communication.cfg',
		fields: [
			{
				type: 'text',
				placeholder: 'https://chat.whatsapp.com/... (optional)',
				label: '> whatsapp_group_link:',
				name: 'whatsappGroupLink',
				info: '# Optional: Pre-created group link for instant team coordination',
			},
		],
	},
]

export const PROFILE_FORM_CARDS: IFormCard[] = [
	{
		title: '> personal_info.json',
		fields: [
			{
				type: 'text',
				placeholder: 'Enter your name',
				label: '> name:',
				name: 'fullName',
			},
			{
				type: 'text',
				placeholder: 'e.g., 2nd year, 2024, N/A',
				label: '> academic_year:',
				name: 'year',
			},
		],
	},
	{
		title: '> technical_stack.yaml',
		fields: [
			{
				type: 'text',
				placeholder: 'JavaScript, Python, React, Node.js (comma separated)',
				label: '> skills: []',
				name: 'skills',
				info: '# Separate skills with commas',
			},
			{
				type: 'textarea',
				placeholder: 'Web development, AI/ML, Cybersecurity, Game dev...',
				label: '> interests:',
				name: 'interests',
			},
		],
	},
	{
		title: '> contact_methods.cfg',
		fields: [
			{
				type: 'text',
				placeholder: '+381XXXXXXXXX (optional)',
				label: '> whatsapp_number:',
				name: 'whatsApp',
			},
		],
	},
]

export const TOAST_LOADING = 'team-form-loading...'
export const TOAST_SUCCESS = 'team-form-success'
export const TOAST_ERROR = 'team-form-error'
