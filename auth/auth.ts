import { betterAuth } from 'better-auth'
import { nextCookies } from 'better-auth/next-js'
import Database from 'better-sqlite3'
import { join } from 'path'

export const auth = betterAuth({
	database: new Database(join(process.cwd(), 'cp.db')),
	emailAndPassword: {
		enabled: true,
	},
	plugins: [nextCookies()],
	baseURL: process.env.BETTER_AUTH_URL,
	secret: process.env.BETTER_AUTH_SECRET,
})
