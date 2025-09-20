import * as z from 'zod'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export const loginFormSchema = z.object({
	email: z
		.string()
		.min(1, 'Email is required')
		.regex(emailRegex, 'Please enter a valid email address'),
	password: z
		.string()
		.min(8, 'Password is required and must have minimum 8 characters')
		.max(50, 'Password can have a maximum of 50 characters'),
})

export const registerFormSchema = z.object({
	name: z
		.string()
		.min(3, 'Name is required and must have minumum 3 characters')
		.max(50, 'Username can have a maximum of 50 characters'),
	email: z
		.string()
		.min(1, 'Email is required')
		.regex(emailRegex, 'Please enter a valid email address'),
	password: z
		.string()
		.min(8, 'Password is required and must have minimum 8 characters')
		.max(50, 'Password can have a maximum of 50 characters'),
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>
export type RegisterFormSchema = z.infer<typeof registerFormSchema>
