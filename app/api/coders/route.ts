import { NextRequest, NextResponse } from 'next/server'
import { getCoders } from '@/services/coders'

export async function GET() {
	try {
		const coders = await getCoders()
		return NextResponse.json(coders)
	} catch (error) {
		console.error('Failed to fetch coders:', error)
		return NextResponse.json({ error: 'Failed to fetch coders' }, { status: 500 })
	}
}
