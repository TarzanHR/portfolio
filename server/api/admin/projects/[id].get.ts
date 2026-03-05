import { PrismaClient } from '@prisma/client';
import { checkAdminAuth } from '../../../utils/auth';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	// Check authentication
	if (!checkAdminAuth(event)) {
		throw createError({
			statusCode: 401,
			message: 'Unauthorized',
		});
	}

	const id = parseInt(getRouterParam(event, 'id') || '0');
	if (!id) {
		throw createError({
			statusCode: 400,
			message: 'Invalid project ID',
		});
	}

	try {
		const project = await prisma.project.findUnique({
			where: { id },
		});

		if (!project) {
			throw createError({
				statusCode: 404,
				message: 'Project not found',
			});
		}

		return {
			...project,
			technologies: JSON.parse(project.technologies),
		};
	} catch (error) {
		if (error.statusCode) {
			throw error;
		}
		console.error('Error fetching project:', error);
		throw createError({
			statusCode: 500,
			message: 'Failed to fetch project',
		});
	}
});
