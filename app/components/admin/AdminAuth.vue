<template>
	<UiModal v-model="isOpen" title="Admin Authentication">
		<form class="space-y-4" @submit.prevent="handleLogin">
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
					Password
				</label>
				<input
					v-model="password"
					type="password"
					class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
					placeholder="Enter admin password"
					required
				/>
			</div>

			<div v-if="error" class="p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg text-sm">
				{{ error }}
			</div>

			<div class="flex gap-3">
				<UiButton
					type="submit"
					:disabled="loading"
					class="flex-1"
				>
					{{ loading ? 'Logging in...' : 'Login' }}
				</UiButton>
				<UiButton
					type="button"
					variant="outline"
					@click="isOpen = false"
				>
					Cancel
				</UiButton>
			</div>
		</form>
	</UiModal>
</template>

<script setup lang="ts">
const isOpen = defineModel<boolean>();
const emit = defineEmits<{
	(e: 'authenticated'): void;
}>();

const password = ref('');
const loading = ref(false);
const error = ref('');

const handleLogin = async () => {
	loading.value = true;
	error.value = '';

	try {
		const response = await $fetch('/api/admin/login', {
			method: 'POST',
			body: { password: password.value },
		});

		if (response.success) {
			isOpen.value = false;
			password.value = '';
			emit('authenticated');
		}
	} catch (err) {
		const fetchError = err as { data?: { message?: string } };
		error.value = fetchError.data?.message || 'Authentication failed';
	} finally {
		loading.value = false;
	}
};
</script>
