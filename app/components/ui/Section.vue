<template>
	<section :id="id" class="py-16 md:py-24">
		<div class="container mx-auto px-4">
			<div
				v-if="title || $slots.title"
				class="text-center mb-12 animate-fade-in"
			>
				<slot name="title">
					<h2
						class="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 relative inline-block text-primary-400 font-pixel"
					>
						{{ title }}
						<span
							class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary-400 rounded-full shadow-neon-sm"
						/>
					</h2>
				</slot>
				<p
					v-if="subtitle"
					class="text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto mt-6 font-mono"
				>
					{{ subtitle }}
				</p>
			</div>
			<div class="animate-fade-in" style="animation-delay: 0.2s">
				<slot />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
interface Props {
	id?: string;
	title?: string;
	subtitle?: string;
}

defineProps<Props>();
</script>
