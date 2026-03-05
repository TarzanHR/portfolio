<template>
	<div class="skill-card group shrink-0 relative w-36 h-36 cursor-default">
		<!-- Border animée avec dégradé neon -->
		<div class="card-border" />

		<!-- Contenu -->
		<div class="card-inner flex flex-col items-center justify-center gap-3 w-full h-full rounded-xl">
			<!-- Glow pulsé derrière le logo -->
			<div class="logo-glow" />

			<!-- Logo -->
			<div class="relative w-16 h-16 flex items-center justify-center z-10">
				<img
					:src="skill.icon"
					:alt="skill.name"
					class="w-full h-full object-contain transition-all duration-300 group-hover:scale-115 group-hover:drop-shadow-[0_0_12px_rgba(0,255,136,0.8)]"
					loading="lazy"
				/>
			</div>

			<!-- Nom avec effet glitch au hover -->
			<span class="skill-name relative z-10 text-sm font-mono text-gray-500 group-hover:text-primary-400 text-center leading-tight px-2 transition-colors duration-200">
				{{ skill.name }}
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { Skill } from '~/data/skills';

defineProps<{ skill: Skill }>();
</script>

<style scoped>
.skill-card {
	z-index: 10;
}

/* Border tournante avec dégradé */
.card-border {
	position: absolute;
	inset: -1px;
	border-radius: 13px;
	background: linear-gradient(var(--angle, 0deg), #00ff88, #0088ff, #ff2d78, #00ff88);
	opacity: 0;
	transition: opacity 0.3s;
	z-index: 0;
}

.skill-card:hover .card-border {
	opacity: 1;
	animation: spin-border 2s linear infinite;
}

@property --angle {
	syntax: '<angle>';
	initial-value: 0deg;
	inherits: false;
}

@keyframes spin-border {
	to { --angle: 360deg; }
}

/* Fond de la card */
.card-inner {
	position: relative;
	background: #0f1318;
	border: 1px solid rgba(0, 255, 136, 0.15);
	z-index: 1;
	margin: 1px;
	border-radius: 11px;
	transition: border-color 0.3s, background 0.3s;
}

.skill-card:hover .card-inner {
	background: #111820;
	border-color: transparent;
}

/* Glow pulsé derrière le logo */
.logo-glow {
	position: absolute;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	background: radial-gradient(circle, rgba(0, 255, 136, 0.25) 0%, transparent 70%);
	opacity: 0;
	transition: opacity 0.3s;
	z-index: 0;
}

.skill-card:hover .logo-glow {
	opacity: 1;
	animation: pulse-glow 1.5s ease-in-out infinite;
}

@keyframes pulse-glow {
	0%, 100% { transform: scale(1); opacity: 0.6; }
	50%       { transform: scale(1.4); opacity: 1; }
}

/* Glitch sur le nom */
.skill-card:hover .skill-name {
	animation: glitch-text 0.4s steps(2) 1;
}

@keyframes glitch-text {
	0%   { text-shadow: 2px 0 #ff2d78, -2px 0 #00ff88; }
	25%  { text-shadow: -2px 0 #0088ff, 2px 0 #ff2d78; }
	50%  { text-shadow: 2px 0 #00ff88, -2px 0 #0088ff; }
	75%  { text-shadow: -2px 0 #ff2d78, 2px 0 #00ff88; }
	100% { text-shadow: none; }
}
</style>
