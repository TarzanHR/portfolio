<template>
	<div class="w-full section-cyber">

		<UiSection
			id="about-preview"
			:title="$t('nav.about')"
			:subtitle="$t('home.aboutPreview.subtitle')"
		>
			<div class="max-w-3xl mx-auto">
				<UiCard glass hover padding="lg">
					<p
						class="text-sm md:text-base lg:text-lg leading-relaxed text-center m-0 text-gray-300"
					>
						{{ $t('home.aboutPreview.description') }}
					</p>
					<div class="flex justify-center mt-6">
						<UiButton
							tag="a"
							:href="localePath('/about')"
							variant="outline"
						>
							{{ $t('home.aboutPreview.cta') }}
						</UiButton>
					</div>
				</UiCard>
			</div>
		</UiSection>

		<UiSection
			id="video-preview"
			:title="$t('home.videoPreview.title')"
			:subtitle="$t('home.videoPreview.subtitle')"
		>
			<HomeVideoPreview />
		</UiSection>

		<UiSection
			id="skills-preview"
			:title="$t('nav.skills')"
			:subtitle="$t('home.skillsPreview.subtitle')"
		>
			<div class="skills-preview-wrapper">
				<div class="skills-track">
					<div
						v-for="skill in previewSkills"
						:key="skill.name"
						class="skill-chip"
					>
						<img :src="skill.icon" :alt="skill.name" class="w-5 h-5 object-contain" />
						<span class="font-mono text-xs text-gray-200">{{ skill.name }}</span>
					</div>
					<div
						v-for="skill in previewSkills"
						:key="'d-' + skill.name"
						class="skill-chip"
						aria-hidden="true"
					>
						<img :src="skill.icon" :alt="skill.name" class="w-5 h-5 object-contain" />
						<span class="font-mono text-xs text-gray-200">{{ skill.name }}</span>
					</div>
				</div>
			</div>
			<div class="flex justify-center mt-10">
				<UiButton
					tag="a"
					:href="localePath('/skills')"
					variant="outline"
					size="lg"
				>
					{{ $t('home.skillsPreview.cta') }}
				</UiButton>
			</div>
		</UiSection>

		<UiSection
			id="projects-preview"
			:title="$t('nav.projects')"
			:subtitle="$t('home.projectsPreview.subtitle')"
		>
			<div v-if="pendingProjects" class="text-center py-12">
				<div
					class="w-[50px] h-[50px] border-4 border-primary-400/10 border-t-primary-400 rounded-full animate-spin mx-auto"
				></div>
				<p class="text-sm md:text-base text-gray-400 mt-4 font-mono">
					> {{ $t('projects.loading') }}
				</p>
			</div>

			<div v-else-if="allProjects && allProjects.length > 0">
				<div class="projects-auto-carousel">
					<div class="projects-track">
						<div
							v-for="project in allProjects"
							:key="project.id"
							class="project-slide"
						>
							<ProjectsProjectCard :project="project" />
						</div>
						<!-- duplicate for seamless loop -->
						<div
							v-for="project in allProjects"
							:key="'d-' + project.id"
							class="project-slide"
							aria-hidden="true"
						>
							<ProjectsProjectCard :project="project" />
						</div>
					</div>
				</div>
				<div class="flex justify-center mt-8">
					<UiButton tag="a" :href="localePath('/projects')" size="lg">
						{{ $t('home.projectsPreview.cta') }}
					</UiButton>
				</div>
			</div>

			<div v-else class="text-center py-12">
				<p class="text-center text-sm md:text-base lg:text-lg text-gray-300">
					{{ $t('home.projectsPreview.description') }}
				</p>
				<div class="flex justify-center mt-6 gap-4">
					<UiButton tag="a" :href="localePath('/projects')" size="lg">
						{{ $t('home.projectsPreview.cta') }}
					</UiButton>
				</div>
			</div>
		</UiSection>
	</div>
</template>

<script setup lang="ts">
import type { Project } from '~/types';
import { skills } from '~/data/skills';

const localePath = useLocalePath();
const { locale } = useI18n();

const previewSkills = skills.slice(0, 16);

const {
	data: allProjects,
	pending: pendingProjects,
	refresh: refreshProjects,
} = await useFetch<Project[]>('/api/projects');

watch(locale, () => {
	refreshProjects();
});


</script>

<style scoped>
.skills-preview-wrapper {
	position: relative;
	overflow: hidden;
	mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
	-webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.skills-track {
	display: flex;
	gap: 0.75rem;
	width: max-content;
	animation: scroll-preview 25s linear infinite;
}

.skill-chip {
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.5rem 1rem;
	border-radius: 9999px;
	border: 1px solid rgba(0, 255, 136, 0.2);
	background: rgba(0, 255, 136, 0.05);
	white-space: nowrap;
	transition: all 0.2s ease;
	cursor: default;
}

.skill-chip:hover {
	border-color: rgba(0, 255, 136, 0.6);
	background: rgba(0, 255, 136, 0.12);
	box-shadow: 0 0 12px rgba(0, 255, 136, 0.15);
}

@keyframes scroll-preview {
	0% { transform: translateX(0); }
	100% { transform: translateX(-50%); }
}

/* Carrousel projets auto-défilant */
.projects-auto-carousel {
	position: relative;
	overflow: clip;
	overflow-clip-margin: 20px;
	padding: 16px 0;
	mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
	-webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
}

.projects-track {
	display: flex;
	gap: 1.25rem;
	width: max-content;
	animation: scroll-projects 40s linear infinite;
}

.projects-track:hover {
	animation-play-state: paused;
}

.project-slide {
	width: 340px;
	flex-shrink: 0;
}

@media (max-width: 640px) {
	.project-slide {
		width: 280px;
	}
}

@keyframes scroll-projects {
	0% { transform: translateX(-50%); }
	100% { transform: translateX(0); }
}
</style>
