<template>
	<div
		class="min-h-screen bg-dark-bg text-gray-100 transition-colors duration-300 relative"
	>
		<LayoutJungleDecor />
		<div class="relative">
			<LayoutHeader />
			<main class="pt-[68px]">
				<NuxtPage />
			</main>
			<LayoutFooter />
		</div>
	</div>
</template>

<script setup lang="ts"></script>
