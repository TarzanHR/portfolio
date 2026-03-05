export interface ProjectImage {
	url: string;
	caption?: string;
	ratio?: 'landscape' | 'portrait' | 'square';
}

export interface Project {
	id: number;
	slug: string;
	title: string;
	description: string;
	image: string;
	technologies: string[];
	demoUrl?: string;
	githubUrl?: string;
}

export interface ProjectDetail extends Project {
	content?: string;
	images?: ProjectImage[];
	createdAt: string;
	updatedAt: string;
}
