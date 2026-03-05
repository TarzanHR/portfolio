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

	const body = await readBody(event);
	const { slug, titleFr, titleEn, descriptionFr, descriptionEn, contentFr, contentEn, image, demoUrl, githubUrl, technologies, featured } = body;

	try {
		const project = await prisma.project.update({
			where: { id },
			data: {
				...(slug && { slug }),
				...(titleFr && { titleFr }),
				...(titleEn && { titleEn }),
				...(descriptionFr && { descriptionFr }),
				...(descriptionEn && { descriptionEn }),
				...(contentFr !== undefined && { contentFr }),
				...(contentEn !== undefined && { contentEn }),
				...(image && { image }),
				...(demoUrl !== undefined && { demoUrl }),
				...(githubUrl !== undefined && { githubUrl }),
				...(technologies && { technologies: JSON.stringify(technologies) }),
				...(featured !== undefined && { featured }),
			},
		});

		return {
			success: true,
			project: {
				...project,
				technologies: JSON.parse(project.technologies),
			},
		};
	} catch (error) {
		console.error('Error updating project:', error);
		const prismaError = error as { code?: string };
		throw createError({
			statusCode: prismaError.code === 'P2025' ? 404 : 500,
			message: prismaError.code === 'P2025' ? 'Project not found' : 'Failed to update project',
		});
	}
});
