<template>
	<a
		:href="videoUrl"
		target="_blank"
		rel="noopener noreferrer"
		class="group relative block w-full max-w-2xl mx-auto rounded-xl overflow-hidden border border-primary-400/20 hover:border-primary-400 hover:shadow-neon-sm transition-all duration-300"
		:aria-label="$t('home.videoPreview.ariaLabel')"
	>
		<img
			:src="thumbnailUrl"
			:alt="$t('home.videoPreview.title')"
			class="w-full object-cover aspect-video"
		/>

		<!-- Overlay sombre au hover -->
		<div
			class="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"
		></div>

		<!-- Bouton play centré -->
		<div class="absolute inset-0 flex items-center justify-center">
			<div
				class="w-16 h-16 md:w-20 md:h-20 bg-primary-400/90 group-hover:bg-primary-400 rounded-full flex items-center justify-center shadow-neon transition-all duration-300 group-hover:scale-110"
			>
				<svg
					class="w-7 h-7 md:w-9 md:h-9 text-dark-bg ml-1"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M8 5v14l11-7z" />
				</svg>
			</div>
		</div>

		<!-- Badge "180 secondes du BUT" en bas -->
		<div class="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/80 to-transparent">
			<p class="text-xs font-mono text-primary-400 uppercase tracking-widest">
				{{ $t('home.videoPreview.badge') }}
			</p>
			<p class="text-sm md:text-base font-semibold text-white mt-0.5">
				{{ $t('home.videoPreview.title') }}
			</p>
		</div>
	</a>
</template>

<script setup lang="ts">
const videoId = 'H5AY7VjgiVI';
const videoUrl = `https://youtu.be/${videoId}`;
const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
</script>
