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
		await prisma.project.delete({
			where: { id },
		});

		return {
			success: true,
			message: 'Project deleted successfully',
		};
	} catch (error) {
		console.error('Error deleting project:', error);
		const prismaError = error as { code?: string };
		throw createError({
			statusCode: prismaError.code === 'P2025' ? 404 : 500,
			message:
				prismaError.code === 'P2025'
					? 'Project not found'
					: 'Failed to delete project',
		});
	}
});
