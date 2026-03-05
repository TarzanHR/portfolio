<template>
	<div class="section-cyber">
		<UiSection :title="$t('nav.about')" :subtitle="$t('about.subtitle')">
			<div class="grid gap-8 max-w-4xl mx-auto">
				<UiCard
					glass
					padding="lg"
					class="animate-fade-in"
					style="animation-delay: 0.1s"
				>
					<h3 class="text-primary-400 mb-4 text-xl md:text-2xl font-bold">
						{{ $t('about.journey.title') }}
					</h3>
					<div class="space-y-4">
						<p
							class="text-sm md:text-base lg:text-lg leading-relaxed text-gray-300"
						>
							{{ $t('about.journey.paragraph1') }}
						</p>
						<p
							class="text-sm md:text-base lg:text-lg leading-relaxed text-gray-300"
						>
							{{ $t('about.journey.paragraph2') }}
						</p>
						<p
							class="text-sm md:text-base lg:text-lg leading-relaxed text-gray-300"
						>
							{{ $t('about.journey.paragraph3') }}
						</p>
					</div>
				</UiCard>

				<UiCard
					glass
					padding="lg"
					class="animate-fade-in"
					style="animation-delay: 0.2s"
				>
					<h3 class="text-primary-400 mb-6 text-xl md:text-2xl font-bold">
						{{ $t('about.passion.title') }}
					</h3>
					<ul class="space-y-3">
						<li
							v-for="key in passionItems"
							:key="key"
							class="text-sm md:text-base lg:text-lg text-gray-300 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary-400"
						>
							{{ $t(`about.passion.items.${key}`) }}
						</li>
					</ul>
				</UiCard>
			</div>
		</UiSection>
	</div>
</template>

<script setup lang="ts">
const passionItems = [
	'games',
	'series',
	'music',
	'learning',
];
</script>
