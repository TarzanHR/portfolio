export interface Skill {
	name: string;
	icon: string; // devicon CDN URL
	category: 'frontend' | 'backend' | 'database' | 'devops' | 'testing' | 'other';
}

const devicon = (name: string, variant: string = 'original') =>
	`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

export const skills: Skill[] = [
	// Frontend
	{ name: 'Vue.js', icon: devicon('vuejs', 'original'), category: 'frontend' },
	{ name: 'Nuxt', icon: devicon('nuxtjs', 'original'), category: 'frontend' },
	{ name: 'TypeScript', icon: devicon('typescript', 'original'), category: 'frontend' },
	{ name: 'JavaScript', icon: devicon('javascript', 'original'), category: 'frontend' },
	{ name: 'React', icon: devicon('react', 'original'), category: 'frontend' },
	{ name: 'HTML', icon: devicon('html5', 'original'), category: 'frontend' },
	{ name: 'CSS', icon: devicon('css3', 'original'), category: 'frontend' },
	{ name: 'Tailwind', icon: devicon('tailwindcss', 'original'), category: 'frontend' },

	// Backend
	{ name: 'Node.js', icon: devicon('nodejs', 'original'), category: 'backend' },
	{ name: 'Prisma', icon: devicon('prisma', 'original'), category: 'backend' },

	// Database
	{ name: 'PostgreSQL', icon: devicon('postgresql', 'original'), category: 'database' },
	{ name: 'MySQL', icon: devicon('mysql', 'original'), category: 'database' },
	{ name: 'MongoDB', icon: devicon('mongodb', 'original'), category: 'database' },

	// DevOps & Tools
	{ name: 'Git', icon: devicon('git', 'original'), category: 'devops' },
	{ name: 'Docker', icon: devicon('docker', 'original'), category: 'devops' },
	{ name: 'Linux', icon: devicon('linux', 'original'), category: 'devops' },
	{ name: 'VSCode', icon: devicon('vscode', 'original'), category: 'devops' },

	// Testing
	{ name: 'Jest', icon: devicon('jest', 'plain'), category: 'testing' },

	// Other
	{ name: 'Python', icon: devicon('python', 'original'), category: 'other' },
	{ name: 'PHP', icon: devicon('php', 'original'), category: 'other' },
	{ name: 'Java', icon: devicon('java', 'original'), category: 'other' },
	{ name: 'C', icon: devicon('c', 'original'), category: 'other' },
	{ name: 'C++', icon: devicon('cplusplus', 'original'), category: 'other' },
	{ name: 'C#', icon: devicon('csharp', 'original'), category: 'other' },
	{ name: '.NET', icon: devicon('dot-net', 'original'), category: 'other' },
	{ name: 'Blueprint', icon: devicon('unrealengine', 'original'), category: 'other' },
	{ name: 'Kubernetes', icon: devicon('kubernetes', 'plain'), category: 'devops' },
];
