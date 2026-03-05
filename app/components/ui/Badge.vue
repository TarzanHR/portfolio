<template>
	<span :class="badgeClasses">
		<slot />
	</span>
</template>

<script setup lang="ts">
interface Props {
	variant?: 'cyan' | 'purple' | 'green' | 'orange' | 'default';
	size?: 'sm' | 'md';
}

const props = withDefaults(defineProps<Props>(), {
	variant: 'default',
	size: 'md',
});

const badgeClasses = computed(() => {
	const base =
		'inline-flex items-center font-medium rounded-lg whitespace-nowrap transition-all duration-200 border';

	const sizes = {
		sm: 'px-2 py-0.5 md:px-2 md:py-1 text-[10px] md:text-xs',
		md: 'px-2.5 py-1 md:px-3 md:py-1.5 text-xs md:text-sm',
	};

	const variants = {
		default:
			'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700',
		cyan: 'bg-primary-400/10 text-primary-400 border-primary-400/30',
		purple: 'bg-secondary-400/10 text-secondary-400 border-secondary-400/30',
		green: 'bg-green-500/10 text-green-500 border-green-500/30',
		orange: 'bg-orange-500/10 text-orange-500 border-orange-500/30',
	};

	return [base, sizes[props.size], variants[props.variant]].join(' ');
});
</script>
