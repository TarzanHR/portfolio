import { checkAdminAuth } from '../../utils/auth';

export default defineEventHandler(async (event) => {
	const isAuthenticated = checkAdminAuth(event);
	return { authenticated: isAuthenticated };
});
