import type { H3Event } from 'h3';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'; // Change this in production!

export function verifyAdminPassword(password: string): boolean {
	return password === ADMIN_PASSWORD;
}

export function checkAdminAuth(event: H3Event): boolean {
	const adminToken = getCookie(event, 'admin_token');
	return adminToken === ADMIN_PASSWORD;
}

export function setAdminCookie(event: H3Event) {
	setCookie(event, 'admin_token', ADMIN_PASSWORD, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'strict',
		maxAge: 60 * 60 * 24, // 24 hours
		path: '/',
	});
}

export function clearAdminCookie(event: H3Event) {
	deleteCookie(event, 'admin_token');
}
