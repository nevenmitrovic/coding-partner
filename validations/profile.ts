import * as z from 'zod'

export const profileFormSchema = z.object({
	full_name: z
		.string()
		.min(3, 'Name is required and can have a minimum of 3 characters')
		.max(50, 'Name can have a maximum of 50 characters'),
	year: z
		.string()
		.min(1, 'Academic year is required')
		.max(30, 'Academic year can have a maximum of 30 characters'),
	skills: z
		.string()
		.min(1, 'Skills are required')
		.max(50, 'Name can have a maximum of 50 characters'),
	interests: z
		.string()
		.min(1, 'Interests are required')
		.max(250, 'Interests can have a maximum of 250 characters'),
	whatsApp: z
		.string()
		.optional()
		.refine(
			(value) => {
				if (!value || value.trim() === '') return true
				// Accepts +countrycode and 9-15 digits, basic validation
				return /^\+?\d{9,15}$/.test(value.trim())
			},
			{
				message: 'Invalid WhatsApp number. Expected format: +381656196083',
			}
		),
})

export type ProfileFormSchema = z.infer<typeof profileFormSchema>
