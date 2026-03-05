import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const slug = getRouterParam(event, 'slug');

	if (!slug) {
		throw createError({
			statusCode: 400,
			message: 'Slug is required',
		});
	}

	try {
		const project = await prisma.project.findUnique({
			where: { slug },
		});

		if (!project) {
			throw createError({
				statusCode: 404,
				message: 'Project not found',
			});
		}

		// Get locale from cookie or header (default to 'fr')
		const locale = getCookie(event, 'i18n_redirected') || 'fr';

		return {
			id: project.id,
			slug: project.slug,
			title: locale === 'en' ? project.titleEn : project.titleFr,
			description: locale === 'en' ? project.descriptionEn : project.descriptionFr,
			content: locale === 'en' ? project.contentEn : project.contentFr,
			image: project.image,
			images: project.images ? JSON.parse(project.images) : [],
			technologies: JSON.parse(project.technologies),
			demoUrl: project.demoUrl,
			githubUrl: project.githubUrl,
			createdAt: project.createdAt,
			updatedAt: project.updatedAt,
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
