<template>
	<div class="skills-page section-cyber overflow-hidden">
		<!-- Scanlines overlay -->
		<div class="scanlines" />

		<UiSection :title="$t('nav.skills')" :subtitle="$t('skills.subtitle')">
			<!-- Ligne 1 : gauche → droite -->
			<div class="relative mb-6 overflow-hidden mask-fade py-4">
				<div class="flex gap-4 scroll-track scroll-right w-max">
					<UiSkillCard
						v-for="(skill, i) in row1x4"
						:key="`r1-${i}`"
						:skill="skill"
					/>
				</div>
			</div>

			<!-- Ligne 2 : droite → gauche -->
			<div class="relative mb-6 overflow-hidden mask-fade py-4">
				<div class="flex gap-4 scroll-track scroll-left w-max">
					<UiSkillCard
						v-for="(skill, i) in row2x4"
						:key="`r2-${i}`"
						:skill="skill"
					/>
				</div>
			</div>

			<!-- Ligne 3 : gauche → droite -->
			<div class="relative overflow-hidden mask-fade py-4">
				<div class="flex gap-4 scroll-track scroll-right w-max">
					<UiSkillCard
						v-for="(skill, i) in row3x4"
						:key="`r3-${i}`"
						:skill="skill"
					/>
				</div>
			</div>
		</UiSection>
	</div>
</template>

<script setup lang="ts">
import { skills } from '~/data/skills';

const third = Math.ceil(skills.length / 3);
const row1 = skills.slice(0, third);
const row2 = skills.slice(third, third * 2);
const row3 = skills.slice(third * 2);

const row1x4 = [...row1, ...row1, ...row1, ...row1];
const row2x4 = [...row2, ...row2, ...row2, ...row2];
const row3x4 = [...row3, ...row3, ...row3, ...row3];
</script>

<style scoped>
/* Scanlines rétro */
.scanlines {
	position: absolute;
	inset: 0;
	pointer-events: none;
	z-index: 1;
	background: repeating-linear-gradient(
		to bottom,
		transparent 0px,
		transparent 2px,
		rgba(0, 0, 0, 0.08) 2px,
		rgba(0, 0, 0, 0.08) 4px
	);
}

.mask-fade {
	-webkit-mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
	mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
}

@keyframes scroll-right {
	from { transform: translateX(0); }
	to   { transform: translateX(-50%); }
}

@keyframes scroll-left {
	from { transform: translateX(-50%); }
	to   { transform: translateX(0); }
}

.scroll-right { animation: scroll-right 30s linear infinite; }
.scroll-left  { animation: scroll-left  30s linear infinite; }

.scroll-track:hover { animation-play-state: paused; }
</style>
