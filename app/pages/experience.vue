<template>
	<div class="min-h-screen section-cyber py-12 md:py-20">
		<div class="max-w-4xl mx-auto px-4 md:px-8">
			<div class="text-center mb-12 md:mb-20">
				<h1 class="font-pixel text-2xl md:text-4xl lg:text-5xl text-primary-400 mb-4">
					{{ $t('nav.experience') }}
				</h1>
				<p class="text-sm md:text-base lg:text-xl text-gray-400 font-mono mb-8">
					> {{ $t('experience.subtitle') }}
				</p>
				<a
					href="/cv.pdf"
					download
					class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-sm font-semibold text-dark-bg bg-primary-400 hover:bg-primary-400/90 shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all duration-200"
				>
					<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
						<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
						<polyline points="7 10 12 15 17 10"/>
						<line x1="12" y1="15" x2="12" y2="3"/>
					</svg>
					{{ $t('nav.downloadCV') }}
				</a>
			</div>

		<div class="space-y-6 md:space-y-8">
				<div
					v-for="(exp, index) in experiences"
					:key="exp.key"
					class="formation-card"
					:style="`animation-delay: ${index * 0.2}s`"
				>
					<div class="formation-date">
						<span v-if="exp.current" class="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-primary-400/10 border border-primary-400 text-primary-400 rounded-full font-mono text-xs animate-pulse-neon">
							<span class="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></span>
							{{ $t('experience.current') }}
						</span>
						<span v-else class="font-pixel text-xs md:text-sm text-accent-400">
							{{ $t(`experience.items.${exp.key}.period`) }}
						</span>
					</div>

					<h3 class="formation-title text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary-400 mb-2">
						{{ $t(`experience.items.${exp.key}.position`) }}
					</h3>

					<p class="text-xs md:text-sm lg:text-base text-gray-400 font-mono mb-3 md:mb-4">
						@ {{ $t(`experience.items.${exp.key}.company`) }}
					</p>

					<p class="formation-description text-xs md:text-sm lg:text-base text-gray-300 leading-relaxed">
						{{ $t(`experience.items.${exp.key}.description`) }}
					</p>
					<div v-if="exp.technologies.length > 0" class="mt-4 md:mt-6">
						<p class="text-xs md:text-sm text-gray-400 mb-2 md:mb-3 font-mono">> Technologies:</p>
						<div class="flex flex-wrap gap-1.5 md:gap-2">
							<span
								v-for="tech in exp.technologies"
								:key="tech"
								class="px-3 py-1 rounded-full text-xs font-mono border bg-primary-400/10 border-primary-400/50 text-primary-400 hover:bg-primary-400/20 hover:border-primary-400 transition-all duration-200"
							>
								{{ tech }}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const experiences = [
	{
		key: 'iut',
		current: true,
		technologies: [],
	},
	{
		key: 'stage',
		current: false,
		technologies: ['Nuxt', 'Vue.js', 'TypeScript', 'Cypress', 'TailwindCSS', 'tRPC'],
	},
	{
		key: 'high-school',
		current: false,
		technologies: [],
	},
];
</script>

<style scoped>
.formation-card {
	position: relative;
	margin-bottom: 2rem;
	padding: 1.25rem;
	background: var(--dark-card, #1e242c);
	border-radius: 8px;
	border: 1px solid rgba(0, 255, 136, 0.1);
	box-shadow: 0 4px 6px rgba(0, 255, 136, 0.15);
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	opacity: 0;
	animation: slideIn 0.5s ease-out forwards;
	transform: translateY(20px);
}

@media (min-width: 768px) {
	.formation-card {
		padding: 2rem;
	}
}

.formation-card:hover {
	transform: translateY(-5px);
	box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
	border-color: var(--primary-400, #00ff88);
}

.formation-card::after {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(45deg, transparent 95%, var(--primary-400, #00ff88) 95%);
	z-index: 1;
	opacity: 0.1;
	pointer-events: none;
	border-radius: 8px;
}

.formation-date {
	margin-bottom: 1rem;
}

.formation-title {
	text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
}

.formation-description {
	color: var(--light-text, #94a3b8);
	font-size: 0.95rem;
}

@keyframes slideIn {
	0% {
		opacity: 0;
		transform: translateY(20px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
}


@keyframes pulse-neon {
	0%, 100% {
		box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
	}
	50% {
		box-shadow: 0 0 30px rgba(0, 255, 136, 0.8);
	}
}

.animate-pulse-neon {
	animation: pulse-neon 2s ease-in-out infinite;
}
</style>
