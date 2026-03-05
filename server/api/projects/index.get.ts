import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	try {
		const projects = await prisma.project.findMany({
			orderBy: [
				{ order: 'asc' },
				{ createdAt: 'desc' },
			],
		});

		// Get locale from cookie or header (default to 'fr')
		const locale = getCookie(event, 'i18n_redirected') || 'fr';

		return projects.map(project => ({
			id: project.id,
			slug: project.slug,
			title: locale === 'en' ? project.titleEn : project.titleFr,
			description: locale === 'en' ? project.descriptionEn : project.descriptionFr,
			image: project.image,
			technologies: JSON.parse(project.technologies),
			demoUrl: project.demoUrl,
			githubUrl: project.githubUrl,
		}));
	} catch (error) {
		console.error('Error fetching projects:', error);
		throw createError({
			statusCode: 500,
			message: 'Failed to fetch projects',
		});
	}
});
