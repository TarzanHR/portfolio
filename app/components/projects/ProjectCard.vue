<template>
	<div class="project-card group cursor-pointer" @click="navigateToProject">
		<!-- Image -->
		<div class="project-img-wrap">
			<img
				v-if="project.image"
				:src="project.image"
				:alt="project.title"
				class="project-img"
			/>
			<div v-else class="project-img-placeholder">
				<span class="font-pixel text-primary-400/30 text-4xl">{ }</span>
			</div>

			<!-- Overlay au hover -->
			<div class="project-overlay">
				<span class="overlay-cta font-mono text-sm font-bold">
					{{ $t('projects.about') }} →
				</span>
			</div>

			<!-- Scan line animée -->
			<div class="scan-line" />
		</div>

		<!-- Contenu -->
		<div class="project-body">
			<h3 class="project-title">{{ project.title }}</h3>
			<p class="project-desc">{{ project.description }}</p>

			<div class="project-footer">
				<div class="flex flex-wrap gap-1.5">
					<span
						v-for="(tech, index) in project.technologies.slice(0, 3)"
						:key="index"
						class="tech-badge"
					>
						{{ tech }}
					</span>
					<span
						v-if="project.technologies.length > 3"
						class="tech-badge tech-badge-more"
						:title="remainingTechnologies"
					>
						+{{ project.technologies.length - 3 }}
					</span>
				</div>

				<span class="project-arrow">→</span>
			</div>
		</div>

		<!-- Corner accent -->
		<div class="corner-tl" />
		<div class="corner-br" />
	</div>
</template>

<script setup lang="ts">
import type { Project } from '~/types';

interface Props {
	project: Project;
}

const props = defineProps<Props>();
const router = useRouter();
const localePath = useLocalePath();

const remainingTechnologies = computed(() => {
	if (props.project.technologies.length > 3) {
		return props.project.technologies.slice(3).join(', ');
	}
	return '';
});

const navigateToProject = () => {
	router.push(localePath(`/projects/${props.project.slug}`));
};

</script>

<style scoped>
.project-card {
	position: relative;
	border-radius: 12px;
	overflow: hidden;
	background: linear-gradient(145deg, #161c24, #0f141b);
	border: 1px solid rgba(0, 255, 136, 0.12);
	transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, z-index 0s;
	display: flex;
	flex-direction: column;
	z-index: 0;
}

.project-card:hover {
	transform: translateY(-6px);
	border-color: rgba(0, 255, 136, 0.45);
	box-shadow: 0 0 30px rgba(0, 255, 136, 0.1), 0 20px 40px rgba(0, 0, 0, 0.4);
	z-index: 10;
}

/* Image */
.project-img-wrap {
	position: relative;
	width: 100%;
	height: 200px;
	overflow: hidden;
	background: #0b0e14;
}

.project-img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
	transition: transform 0.5s ease, filter 0.3s ease;
}

.project-card:hover .project-img {
	transform: scale(1.06);
	filter: brightness(0.45);
}

.project-img-placeholder {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Overlay */
.project-overlay {
	position: absolute;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
	opacity: 1;
}

.overlay-cta {
	color: #00ff88;
	letter-spacing: 0.05em;
	text-shadow: 0 0 20px rgba(0, 255, 136, 0.8);
	transform: translateY(8px);
	transition: transform 0.3s ease;
}

.project-card:hover .overlay-cta {
	transform: translateY(0);
}

/* Scan line */
.scan-line {
	position: absolute;
	top: -100%;
	left: 0;
	width: 100%;
	height: 40%;
	background: linear-gradient(to bottom, transparent, rgba(0, 255, 136, 0.04), transparent);
	pointer-events: none;
	transition: none;
}

.project-card:hover .scan-line {
	animation: scan 1s ease-out forwards;
}

@keyframes scan {
	0% { top: -40%; }
	100% { top: 100%; }
}

/* Body */
.project-body {
	padding: 1rem 1.25rem 1.25rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	flex: 1;
}

.project-title {
	font-family: var(--font-mono, monospace);
	font-size: 1rem;
	font-weight: 700;
	color: #00ff88;
	margin: 0;
	line-height: 1.3;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	transition: text-shadow 0.3s ease;
}

.project-card:hover .project-title {
	text-shadow: 0 0 12px rgba(0, 255, 136, 0.5);
}

.project-desc {
	font-size: 0.78rem;
	color: #94a3b8;
	line-height: 1.55;
	margin: 0;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	flex: 1;
}

/* Footer */
.project-footer {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 0.75rem;
	padding-top: 0.75rem;
	border-top: 1px solid rgba(0, 255, 136, 0.1);
}

.tech-badge {
	padding: 0.15rem 0.55rem;
	border-radius: 9999px;
	font-size: 0.65rem;
	font-family: monospace;
	font-weight: 600;
	border: 1px solid rgba(0, 255, 136, 0.3);
	background: rgba(0, 255, 136, 0.07);
	color: #00ff88;
	white-space: nowrap;
}

.tech-badge-more {
	border-color: rgba(148, 163, 184, 0.3);
	background: rgba(148, 163, 184, 0.07);
	color: #94a3b8;
	cursor: help;
}

.project-arrow {
	font-size: 1rem;
	color: rgba(0, 255, 136, 0.3);
	transition: color 0.2s, transform 0.2s;
}

.project-card:hover .project-arrow {
	color: #00ff88;
	transform: translateX(4px);
}

/* Corner accents */
.corner-tl,
.corner-br {
	position: absolute;
	width: 16px;
	height: 16px;
	pointer-events: none;
	transition: opacity 0.3s;
	opacity: 0;
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

.project-card:hover .corner-tl,
.project-card:hover .corner-br {
	opacity: 1;
}
</style>
