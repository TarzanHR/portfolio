import { verifyAdminPassword, setAdminCookie } from '../../utils/auth';

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const { password } = body;

	if (!password) {
		throw createError({
			statusCode: 400,
			message: 'Password is required',
		});
	}

	if (!verifyAdminPassword(password)) {
		throw createError({
			statusCode: 401,
			message: 'Invalid password',
		});
	}

	setAdminCookie(event);

	return { success: true, message: 'Authenticated successfully' };
});
