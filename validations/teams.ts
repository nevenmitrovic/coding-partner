import * as z from 'zod'

const whatsappInviteRegex = /^https:\/\/chat\.whatsapp\.com\/.{1,40}\/?$/

export const teamFormSchema = z.object({
	teamName: z
		.string()
		.min(1, 'Team name is required')
		.max(50, 'Team name can have a maximum of 50 characters'),
	project: z
		.string()
		.min(1, 'Project is required')
		.max(50, 'Project name can have a maximum of 50 characters'),
	requiredSkills: z.string().min(1, 'Required skills are required'),
	projectTimeline: z.string().min(1, 'Project timeline is required'),
	description: z
		.string()
		.min(1, 'Description is required')
		.max(250, 'Description can have a maximum of 250 characters'),
	whatsappGroupLink: z.string().trim().regex(whatsappInviteRegex, {
		message: 'Invalid WhatsApp group link. Expected format: https://chat.whatsapp.com/<code>',
	}),
})

export type TeamFormSchema = z.infer<typeof teamFormSchema>
