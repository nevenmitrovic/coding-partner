import { betterAuth } from 'better-auth'
import { nextCookies } from 'better-auth/next-js'
import { db } from '@/db/db'

export const auth = betterAuth({
	database: db,
	emailAndPassword: {
		enabled: true,
	},
	plugins: [nextCookies()],
	baseURL: process.env.BETTER_AUTH_URL,
	secret: process.env.BETTER_AUTH_SECRET,
})
