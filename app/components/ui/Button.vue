<template>
	<component
		:is="tag"
		:class="buttonClasses"
		:disabled="disabled || loading"
		:type="type"
		v-bind="$attrs"
	>
		<span
			v-if="loading"
			class="animate-spin w-4 h-4 border-2 border-transparent border-t-current rounded-full"
		/>
		<slot v-else />
	</component>
</template>

<script setup lang="ts">
interface Props {
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
	size?: 'sm' | 'md' | 'lg';
	disabled?: boolean;
	loading?: boolean;
	tag?: string;
	type?: 'button' | 'submit' | 'reset';
}

const props = withDefaults(defineProps<Props>(), {
	variant: 'primary',
	size: 'md',
	disabled: false,
	loading: false,
	tag: 'button',
	type: 'button',
});

const buttonClasses = computed(() => {
	const base =
		'inline-flex items-center justify-center gap-2 font-semibold rounded-lg cursor-pointer transition-all duration-300 whitespace-nowrap';
	const disabled =
		props.disabled || props.loading ? 'opacity-50 cursor-not-allowed' : '';

	const sizes = {
		sm: 'px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm',
		md: 'px-4 py-2 md:px-6 md:py-3 text-sm md:text-base',
		lg: 'px-6 py-3 md:px-8 md:py-4 text-base md:text-lg',
	};

	const variants = {
		primary:
			'bg-primary-400 text-dark-bg shadow-neon-sm hover:shadow-neon-md hover:scale-105 font-mono',
		secondary:
			'bg-dark-card text-gray-300 hover:bg-dark-hover border border-primary-400/30 hover:border-primary-400/50 font-mono',
		outline:
			'border-2 border-primary-400 text-primary-400 hover:bg-primary-400/10 hover:shadow-neon-sm font-mono',
		ghost: 'text-gray-400 hover:text-primary-400 hover:bg-dark-hover font-mono',
	};

	return [base, sizes[props.size], variants[props.variant], disabled]
		.filter(Boolean)
		.join(' ');
});
</script>
