<template>
	<div class="min-h-screen section-cyber pb-20">

		<!-- Loading -->
		<div v-if="pending" class="flex flex-col items-center justify-center min-h-[60vh] text-center">
			<div class="w-[50px] h-[50px] border-4 border-primary-400/10 border-t-primary-400 rounded-full animate-spin mb-6"></div>
			<p class="text-sm text-gray-400 font-mono">> {{ $t('projects.loadingProject') }}</p>
		</div>

		<!-- Error -->
		<div v-else-if="error" class="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
			<p class="font-pixel text-5xl text-primary-400/30 mb-6">404</p>
			<h2 class="font-pixel text-2xl text-primary-400 mb-4">{{ $t('projects.notFound') }}</h2>
			<p class="text-gray-400 font-mono text-sm mb-8">{{ error.message }}</p>
			<UiButton @click="$router.push(localePath('/projects'))">
				{{ $t('projects.backToProjects') }}
			</UiButton>
		</div>

		<!-- Content -->
		<div v-else-if="project">

			<!-- Hero -->
			<div class="project-hero">
				<div class="max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-12">

					<!-- Back -->
					<div
						class="inline-flex items-center gap-2 text-primary-400/70 hover:text-primary-400 font-mono text-sm cursor-pointer mb-10 transition-all duration-200 hover:-translate-x-1"
						@click="$router.push(localePath('/projects'))"
					>
						← {{ $t('projects.backToProjects') }}
					</div>

					<div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

						<!-- Left: info -->
						<div class="order-2 lg:order-1 flex flex-col gap-6">
							<h1 class="font-pixel text-2xl md:text-3xl lg:text-4xl text-primary-400 leading-tight">
								{{ project.title }}
							</h1>
							<p class="text-sm md:text-base text-gray-300 leading-relaxed font-mono">
								{{ project.description }}
							</p>

							<!-- BUT Competences -->
							<div v-if="projectCompetences.length > 0" class="flex flex-wrap gap-2">
								<div
									v-for="code in projectCompetences"
									:key="code"
									class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-primary-400/40 bg-primary-400/10 font-mono text-xs"
									:title="competenceLabels[code]?.ue"
								>
									<span class="px-1.5 py-0.5 rounded bg-primary-400 text-dark-bg font-bold text-xs font-mono leading-none">{{ code }}</span>
									<span class="text-primary-400">{{ competenceLabels[code]?.label }}</span>
								</div>
							</div>

							<!-- Tech badges -->
							<div class="flex flex-wrap gap-2">
								<UiBadge
									v-for="(tech, index) in project.technologies"
									:key="index"
									:variant="getBadgeVariant(index)"
								>
									{{ tech }}
								</UiBadge>
							</div>

							<!-- CTA buttons -->
							<div class="flex flex-wrap gap-3 pt-2">
								<a
									v-if="project.demoUrl"
									:href="project.demoUrl"
									target="_blank"
									rel="noopener noreferrer"
									class="btn-neon"
								>
									{{ $t('projects.viewDemo') }}
								</a>
								<a
									v-if="project.githubUrl"
									:href="project.githubUrl"
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-mono text-sm font-semibold text-primary-400 border border-primary-400/40 bg-primary-400/5 hover:bg-primary-400/15 hover:border-primary-400 transition-all duration-200"
								>
									GitHub →
								</a>
							</div>
						</div>

						<!-- Right: image -->
						<div class="order-1 lg:order-2">
							<div v-if="project.image" class="project-hero-img-wrap">
								<img
									:src="project.image"
									:alt="project.title"
									class="project-hero-img"
								/>
								<div class="corner-tl" />
								<div class="corner-br" />
							</div>
							<div v-else class="project-hero-img-placeholder">
								<span class="font-pixel text-primary-400/20 text-5xl">{ }</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Body -->
			<div class="max-w-7xl mx-auto px-4 md:px-8 mt-12 flex flex-col gap-8">

				<!-- About -->
				<UiCard :glass="true" padding="lg">
					<h2 class="font-mono text-lg md:text-xl font-bold text-primary-400 mb-6">
						> {{ $t('projects.about') }}
					</h2>
					<div
						v-if="project.content"
						class="text-gray-300 text-sm md:text-base leading-loose [&_p]:mb-5 [&_img]:my-8 [&_img]:rounded-lg [&_img]:border [&_img]:border-primary-400/20 [&_img]:w-full [&_img]:h-auto"
						v-html="formatContent(project.content)"
					></div>
					<p v-else class="text-gray-500 font-mono text-sm italic text-center py-8">
						{{ $t('projects.detailsComing') }}
					</p>
				</UiCard>

				<!-- Gallery -->
				<UiCard v-if="project.images && project.images.length > 0" :glass="true" padding="lg">
					<h2 class="font-mono text-lg md:text-xl font-bold text-primary-400 mb-6">
						> {{ $t('projects.gallery') }}
					</h2>
					<div class="gallery-masonry">
						<div
							v-for="(img, index) in project.images"
							:key="index"
							class="gallery-item group"
							@click="openImageModal(img)"
						>
							<img
								:src="img.url"
								:alt="img.caption || `Image ${index + 1}`"
								class="gallery-img"
							/>
							<div class="gallery-overlay">
								<span class="gallery-zoom">⤢</span>
							</div>
							<div v-if="img.caption" class="gallery-caption">
								{{ img.caption }}
							</div>
						</div>
					</div>
				</UiCard>
			</div>
		</div>

		<!-- Image modal -->
		<div
			v-if="selectedImage"
			class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
			@click="closeImageModal"
		>
			<div class="relative max-w-7xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center gap-4">
				<button
					class="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 transition-all duration-200 z-10 font-mono"
					@click.stop="closeImageModal"
				>
					✕
				</button>
				<div v-if="selectedImage.caption" class="bg-black/80 text-primary-400 font-mono text-xs px-4 py-2 rounded-lg">
					{{ selectedImage.caption }}
				</div>
				<img
					:src="selectedImage.url"
					:alt="selectedImage.caption || 'Image'"
					class="max-w-full max-h-full object-contain rounded-lg border border-primary-400/20"
					@click.stop
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { ProjectDetail, ProjectImage } from '~/types';

const route = useRoute();
const slug = route.params.slug as string;
const { locale } = useI18n();
const localePath = useLocalePath();


const selectedImage = ref<ProjectImage | null>(null);

const {
	data: project,
	pending,
	error,
	refresh,
} = await useFetch<ProjectDetail>(`/api/projects/${slug}`);

watch(locale, () => {
	refresh();
});

useHead({
	title: computed(() =>
		project.value ? `${project.value.title} - Projets` : 'Projet',
	),
	meta: [
		{
			name: 'description',
			content: computed(() => project.value?.description || ''),
		},
	],
});

const butCompetences = {
	'pokemon-deck-builder': ['C1', 'C6'],
	'gestion-supermarche-pyqt': ['C1', 'C2', 'C6'],
	'minecraft-app-flutter': ['C1', 'C6'],
	'node-buster-javafx': ['C2', 'C6'],
	'tic-tac-toe-network': ['C6'],
	'api-pokemon-nodejs': ['C1', 'C2', 'C6'],
	'skyrage': ['C1', 'C2', 'C6'],
} as Record<string, string[]>;

const { t } = useI18n();

const competenceLabels = computed<Record<string, { label: string; ue: string }>>(() => ({
	C1: { label: t('experience.butCompetences.items.realiser.name'), ue: 'UE6.1A' },
	C2: { label: t('experience.butCompetences.items.optimiser.name'), ue: 'UE6.2' },
	C6: { label: t('experience.butCompetences.items.collaborer.name'), ue: 'UE6.6A' },
}));

const projectCompetences = computed(() => butCompetences[slug] ?? []);

const badgeVariants = ['cyan', 'purple', 'green', 'orange'] as const;

const getBadgeVariant = (index: number) => {
	return badgeVariants[index % badgeVariants.length];
};

const formatContent = (content: string) => {
	const formatted = content
		.split('\n\n')
		.map((paragraph) => {
			paragraph = paragraph.replace(
				/!\[([^\]]*)\]\(([^)]+)\)/g,
				'<img src="$2" alt="$1" />',
			);
			return `<p>${paragraph.replace(/\n/g, '<br>')}</p>`;
		})
		.join('');

	return formatted;
};

const openImageModal = (img: ProjectImage) => {
	selectedImage.value = img;
};

const closeImageModal = () => {
	selectedImage.value = null;
};

</script>

<style scoped>
.project-hero {
	background: linear-gradient(180deg, rgba(0, 255, 136, 0.04) 0%, transparent 100%);
	border-bottom: 1px solid rgba(0, 255, 136, 0.08);
}

.project-hero-img-wrap {
	position: relative;
	border-radius: 12px;
	overflow: hidden;
	border: 1px solid rgba(0, 255, 136, 0.2);
	box-shadow: 0 0 40px rgba(0, 255, 136, 0.06), 0 20px 60px rgba(0, 0, 0, 0.5);
}

.project-hero-img {
	width: 100%;
	height: auto;
	aspect-ratio: 16 / 9;
	object-fit: cover;
	display: block;
}

.project-hero-img-placeholder {
	width: 100%;
	aspect-ratio: 16 / 9;
	border-radius: 12px;
	border: 1px solid rgba(0, 255, 136, 0.12);
	background: linear-gradient(145deg, #161c24, #0f141b);
	display: flex;
	align-items: center;
	justify-content: center;
}

.corner-tl,
.corner-br {
	position: absolute;
	width: 20px;
	height: 20px;
	pointer-events: none;
}

.corner-tl {
	top: 0;
	left: 0;
	border-top: 2px solid #00ff88;
	border-left: 2px solid #00ff88;
	border-radius: 2px 0 0 0;
}

.corner-br {
	bottom: 0;
	right: 0;
	border-bottom: 2px solid #00ff88;
	border-right: 2px solid #00ff88;
	border-radius: 0 0 2px 0;
}

/* Gallery masonry */
.gallery-masonry {
	columns: 2;
	column-gap: 0.75rem;
}

@media (min-width: 768px) {
	.gallery-masonry {
		columns: 3;
	}
}

@media (min-width: 1024px) {
	.gallery-masonry {
		columns: 4;
	}
}

.gallery-item {
	position: relative;
	break-inside: avoid;
	margin-bottom: 0.75rem;
	border-radius: 8px;
	overflow: hidden;
	border: 1px solid rgba(0, 255, 136, 0.12);
	cursor: pointer;
	transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.gallery-item:hover {
	border-color: rgba(0, 255, 136, 0.5);
	box-shadow: 0 0 16px rgba(0, 255, 136, 0.1);
}

.gallery-img {
	width: 100%;
	height: auto;
	display: block;
	transition: transform 0.3s ease, filter 0.3s ease;
}

.gallery-item:hover .gallery-img {
	transform: scale(1.03);
	filter: brightness(0.7);
}

.gallery-overlay {
	position: absolute;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	transition: opacity 0.2s ease;
}

.gallery-item:hover .gallery-overlay {
	opacity: 1;
}

.gallery-zoom {
	font-size: 1.5rem;
	color: #00ff88;
	text-shadow: 0 0 20px rgba(0, 255, 136, 0.8);
}

.gallery-caption {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
	color: #e2e8f0;
	font-size: 0.7rem;
	font-family: monospace;
	padding: 1rem 0.6rem 0.5rem;
	line-height: 1.3;
}
</style>
