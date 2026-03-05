<template>
	<div :class="cardClasses">
		<slot />
	</div>
</template>

<script setup lang="ts">
interface Props {
	glass?: boolean;
	hover?: boolean;
	glow?: boolean;
	padding?: 'none' | 'sm' | 'md' | 'lg';
}

const props = withDefaults(defineProps<Props>(), {
	glass: false,
	hover: false,
	glow: false,
	padding: 'md',
});

const cardClasses = computed(() => {
	const base = 'rounded-xl border transition-all duration-300';
	const background = props.glass
		? 'bg-dark-card/80 backdrop-blur-sm'
		: 'bg-dark-card';
	const border = 'border-primary-400/20';
	const hoverEffect = props.hover
		? 'hover:-translate-y-1 hover:border-primary-400 hover:shadow-neon-sm'
		: '';

	const paddings = {
		none: '',
		sm: 'p-2 md:p-3',
		md: 'p-4 md:p-6',
		lg: 'p-6 md:p-8',
	};

	return [base, background, border, hoverEffect, paddings[props.padding]]
		.filter(Boolean)
		.join(' ');
});
</script>
