<template>
	<Teleport to="body">
		<Transition
			enter-active-class="transition-opacity duration-200"
			enter-from-class="opacity-0"
			enter-to-class="opacity-100"
			leave-active-class="transition-opacity duration-200"
			leave-from-class="opacity-100"
			leave-to-class="opacity-0"
		>
			<div
				v-if="modelValue"
				class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
				@click="close"
			>
				<Transition
					enter-active-class="transition-all duration-200"
					enter-from-class="opacity-0 scale-95"
					enter-to-class="opacity-100 scale-100"
					leave-active-class="transition-all duration-200"
					leave-from-class="opacity-100 scale-100"
					leave-to-class="opacity-0 scale-95"
				>
					<div
						v-if="modelValue"
						class="bg-dark-card rounded-2xl shadow-neon-md border border-primary-400/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
						@click.stop
					>
						<!-- Header -->
						<div
							class="flex items-center justify-between p-6 border-b border-primary-400/20"
						>
							<h2
								class="text-2xl font-bold text-primary-400 font-mono"
							>
								{{ title }}
							</h2>
							<button
								class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-dark-hover transition-colors"
								@click="close"
							>
								<span class="text-2xl text-gray-400">×</span>
							</button>
						</div>

						<!-- Content -->
						<div class="p-6">
							<slot />
						</div>
					</div>
				</Transition>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup lang="ts">
interface Props {
	modelValue: boolean;
	title: string;
}

defineProps<Props>();
const emit = defineEmits<{
	(e: 'update:modelValue', value: boolean): void;
}>();

const close = () => {
	emit('update:modelValue', false);
};
</script>
