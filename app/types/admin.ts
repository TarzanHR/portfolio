export interface AdminProject {
	id: number;
	slug: string;
	titleFr: string;
	titleEn: string;
	descriptionFr: string;
	descriptionEn: string;
	contentFr?: string;
	contentEn?: string;
	image: string;
	demoUrl?: string;
	githubUrl?: string;
	technologies: string[];
	images?: string;
	order?: number;
	createdAt?: string;
	updatedAt?: string;
}
