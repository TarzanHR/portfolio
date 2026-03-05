<template>
	<UiModal v-model="isOpen" :title="project ? 'Edit Project' : 'New Project'">
		<form class="space-y-4" @submit.prevent="handleSubmit">
			<!-- Language Tabs -->
			<div class="flex gap-2 mb-4 border-b border-primary-400/20">
				<button
					type="button"
					:class="[
						'px-4 py-2 font-mono font-semibold transition-all',
						activeTab === 'fr'
							? 'text-primary-400 border-b-2 border-primary-400'
							: 'text-gray-400 hover:text-primary-400',
					]"
					@click="activeTab = 'fr'"
				>
					🇫🇷 Français
				</button>
				<button
					type="button"
					:class="[
						'px-4 py-2 font-mono font-semibold transition-all',
						activeTab === 'en'
							? 'text-primary-400 border-b-2 border-primary-400'
							: 'text-gray-400 hover:text-primary-400',
					]"
					@click="activeTab = 'en'"
				>
					🇬🇧 English
				</button>
			</div>

			<!-- Slug (common field) -->
			<div>
				<label
					class="block text-sm font-medium text-gray-300 mb-2 font-mono"
				>
					Slug * (no spaces, use dashes)
				</label>
				<input
					v-model="form.slug"
					type="text"
					class="w-full px-4 py-2 border border-primary-400/30 bg-dark-card rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 text-gray-100 font-mono"
					pattern="[a-z0-9\-]+"
					required
					@input="sanitizeSlug"
				/>
			</div>

			<!-- French Fields -->
			<div v-show="activeTab === 'fr'" class="space-y-4">
				<div>
					<label
						class="block text-sm font-medium text-gray-300 mb-2 font-mono"
					>
						Titre (FR) *
					</label>
					<input
						v-model="form.titleFr"
						type="text"
						class="w-full px-4 py-2 border border-primary-400/30 bg-dark-card rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 text-gray-100"
						:required="activeTab === 'fr'"
					/>
				</div>

				<div>
					<label
						class="block text-sm font-medium text-gray-300 mb-2 font-mono"
					>
						Description (FR) *
					</label>
					<textarea
						v-model="form.descriptionFr"
						rows="3"
						class="w-full px-4 py-2 border border-primary-400/30 bg-dark-card rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 text-gray-100 resize-none"
						:required="activeTab === 'fr'"
					></textarea>
				</div>

				<div>
					<label
						class="block text-sm font-medium text-gray-300 mb-2 font-mono"
					>
						Contenu (FR)
					</label>
					<textarea
						v-model="form.contentFr"
						rows="5"
						class="w-full px-4 py-2 border border-primary-400/30 bg-dark-card rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 text-gray-100 resize-none"
					></textarea>
				</div>
			</div>

			<!-- English Fields -->
			<div v-show="activeTab === 'en'" class="space-y-4">
				<div>
					<label
						class="block text-sm font-medium text-gray-300 mb-2 font-mono"
					>
						Title (EN) *
					</label>
					<input
						v-model="form.titleEn"
						type="text"
						class="w-full px-4 py-2 border border-primary-400/30 bg-dark-card rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 text-gray-100"
						:required="activeTab === 'en'"
					/>
				</div>

				<div>
					<label
						class="block text-sm font-medium text-gray-300 mb-2 font-mono"
					>
						Description (EN) *
					</label>
					<textarea
						v-model="form.descriptionEn"
						rows="3"
						class="w-full px-4 py-2 border border-primary-400/30 bg-dark-card rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 text-gray-100 resize-none"
						:required="activeTab === 'en'"
					></textarea>
				</div>

				<div>
					<label
						class="block text-sm font-medium text-gray-300 mb-2 font-mono"
					>
						Content (EN)
					</label>
					<textarea
						v-model="form.contentEn"
						rows="5"
						class="w-full px-4 py-2 border border-primary-400/30 bg-dark-card rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 text-gray-100 resize-none"
					></textarea>
				</div>
			</div>

			<!-- Common Fields -->
			<div>
				<label
					class="block text-sm font-medium text-gray-300 mb-2 font-mono"
				>
					Image URL
				</label>
				<input
					v-model="form.image"
					type="url"
					class="w-full px-4 py-2 border border-primary-400/30 bg-dark-card rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 text-gray-100"
				/>
			</div>

			<div class="grid grid-cols-2 gap-4">
				<div>
					<label
						class="block text-sm font-medium text-gray-300 mb-2 font-mono"
					>
						Demo URL
					</label>
					<input
						v-model="form.demoUrl"
						type="url"
						class="w-full px-4 py-2 border border-primary-400/30 bg-dark-card rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 text-gray-100"
					/>
				</div>

				<div>
					<label
						class="block text-sm font-medium text-gray-300 mb-2 font-mono"
					>
						GitHub URL
					</label>
					<input
						v-model="form.githubUrl"
						type="url"
						class="w-full px-4 py-2 border border-primary-400/30 bg-dark-card rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 text-gray-100"
					/>
				</div>
			</div>

			<div>
				<label
					class="block text-sm font-medium text-gray-300 mb-2 font-mono"
				>
					Technologies (comma separated) *
				</label>
				<input
					v-model="technologiesInput"
					type="text"
					class="w-full px-4 py-2 border border-primary-400/30 bg-dark-card rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 text-gray-100"
					placeholder="Vue.js, TypeScript, TailwindCSS"
					required
				/>
			</div>

			<div
				v-if="error"
				class="p-3 bg-accent-400/10 border border-accent-400/50 text-accent-400 rounded-lg text-sm font-mono"
			>
				{{ error }}
			</div>

			<div class="flex gap-3 pt-4">
				<UiButton type="submit" :disabled="loading" class="flex-1">
					{{ loading ? 'Saving...' : project ? 'Update' : 'Create' }}
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
import type { AdminProject } from '~/types';

interface Props {
	project?: AdminProject | null;
}

const props = defineProps<Props>();
const isOpen = defineModel<boolean>();
const emit = defineEmits<{
	(e: 'success'): void;
}>();

const activeTab = ref<'fr' | 'en'>('fr');

const form = ref({
	slug: '',
	titleFr: '',
	titleEn: '',
	descriptionFr: '',
	descriptionEn: '',
	contentFr: '',
	contentEn: '',
	image: '',
	demoUrl: '',
	githubUrl: '',
	technologies: [] as string[],
});

const technologiesInput = ref('');
const loading = ref(false);
const error = ref('');

// Watch for project changes to populate form
watch(
	() => props.project,
	(newProject) => {
		if (newProject) {
			form.value = {
				slug: newProject.slug,
				titleFr: newProject.titleFr,
				titleEn: newProject.titleEn,
				descriptionFr: newProject.descriptionFr,
				descriptionEn: newProject.descriptionEn,
				contentFr: newProject.contentFr || '',
				contentEn: newProject.contentEn || '',
				image: newProject.image,
				demoUrl: newProject.demoUrl || '',
				githubUrl: newProject.githubUrl || '',
				technologies: newProject.technologies,
			};
			technologiesInput.value = newProject.technologies.join(', ');
		} else {
			// Reset form for new project
			form.value = {
				slug: '',
				titleFr: '',
				titleEn: '',
				descriptionFr: '',
				descriptionEn: '',
				contentFr: '',
				contentEn: '',
				image: '',
				demoUrl: '',
				githubUrl: '',
				technologies: [],
			};
			technologiesInput.value = '';
		}
	},
	{ immediate: true },
);

const sanitizeSlug = () => {
	form.value.slug = form.value.slug
		.toLowerCase()
		.replace(/[^a-z0-9-]/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-|-$/g, '');
};

const handleSubmit = async () => {
	loading.value = true;
	error.value = '';

	// Validate both languages are filled
	if (
		!form.value.titleFr ||
		!form.value.titleEn ||
		!form.value.descriptionFr ||
		!form.value.descriptionEn
	) {
		error.value =
			'Please fill in both French and English titles and descriptions';
		loading.value = false;
		return;
	}

	// Parse technologies
	form.value.technologies = technologiesInput.value
		.split(',')
		.map((t) => t.trim())
		.filter((t) => t.length > 0);

	try {
		if (props.project) {
			// Update existing project
			await $fetch(`/api/admin/projects/${props.project.id}`, {
				method: 'PUT',
				body: form.value,
			});
		} else {
			// Create new project
			await $fetch('/api/admin/projects', {
				method: 'POST',
				body: form.value,
			});
		}

		isOpen.value = false;
		emit('success');
	} catch (err) {
		const fetchError = err as { data?: { message?: string } };
		error.value = fetchError.data?.message || 'Failed to save project';
	} finally {
		loading.value = false;
	}
};
</script>
