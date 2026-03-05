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

	const body = await readBody(event);
	const { slug, titleFr, titleEn, descriptionFr, descriptionEn, contentFr, contentEn, image, demoUrl, githubUrl, technologies, featured } = body;

	// Validation
	if (!slug || !titleFr || !titleEn || !descriptionFr || !descriptionEn || !technologies) {
		throw createError({
			statusCode: 400,
			message: 'Missing required fields',
		});
	}

	try {
		const project = await prisma.project.create({
			data: {
				slug,
				titleFr,
				titleEn,
				descriptionFr,
				descriptionEn,
				contentFr: contentFr || '',
				contentEn: contentEn || '',
				image: image || null,
				demoUrl: demoUrl || null,
				githubUrl: githubUrl || null,
				technologies: JSON.stringify(technologies),
				featured: featured || false,
				order: 0,
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
		console.error('Error creating project:', error);
		const prismaError = error as { code?: string };
		throw createError({
			statusCode: prismaError.code === 'P2002' ? 409 : 500,
			message: prismaError.code === 'P2002' ? 'A project with this slug already exists' : 'Failed to create project',
		});
	}
});
