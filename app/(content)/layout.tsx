import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'

import '../globals.css'
import Header from '@/components/common/header/header'

const jetBrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	variable: '--font-jetbrains-mono',
	display: 'swap',
	fallback: ['Monaco', 'Menlo', 'Ubuntu Mono', 'monospace'],
})

export const metadata: Metadata = {
	title: 'Coding Partner',
	description:
		'Find your coding partner for pair programming or projects. You can also create or find an appropriate team that suits you. Set up your profile and browse coders around the world.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className={jetBrainsMono.variable}>
			<body>
				<Header />
				{children}
			</body>
		</html>
	)
}
