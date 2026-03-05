<template>
	<div class="min-h-screen section-cyber">
		<button
			v-if="!isAuthenticated"
			class="fixed bottom-8 right-8 w-14 h-14 cyber-card rounded-full shadow-neon-sm hover:shadow-neon-md transition-all duration-200 flex items-center justify-center z-40 hover:scale-110 border-primary-400/50"
			:title="$t('projects.admin.login')"
			@click="showAuthModal = true"
		>
			<span class="text-2xl">🔐</span>
		</button>

		<div
			v-if="isAuthenticated"
			class="fixed bottom-8 right-8 flex flex-col gap-3 z-40"
		>
			<button
				class="w-14 h-14 cyber-card rounded-full shadow-neon-sm hover:shadow-neon-md transition-all duration-200 flex items-center justify-center hover:scale-110 border-primary-400"
				:title="$t('projects.admin.newProject')"
				@click="openCreateModal"
			>
				<span class="text-2xl text-primary-400">+</span>
			</button>
			<button
				class="w-14 h-14 cyber-card rounded-full shadow-neon-pink-sm hover:shadow-neon-pink-md transition-all duration-200 flex items-center justify-center hover:scale-110 border-accent-400"
				:title="$t('projects.admin.logout')"
				@click="handleLogout"
			>
				<span class="text-2xl text-accent-400">🚪</span>
			</button>
		</div>

		<div class="max-w-7xl md:mx-auto px-4 md:px-8 py-10 md:py-16">
			<div class="text-center mb-8 md:mb-16">
				<h1
					class="font-pixel text-2xl md:text-4xl lg:text-5xl text-primary-400 mb-4 animate-glitch"
				>
					{{ $t('nav.projects') }}
				</h1>
				<p class="text-sm md:text-base lg:text-xl text-gray-400 font-mono">
					> {{ $t('projects.subtitle') }}
				</p>
			</div>
			<div v-if="pending" class="text-center py-12">
				<div
					class="w-[60px] h-[60px] border-4 border-primary-400/20 border-t-primary-400 rounded-full animate-spin mx-auto mb-6"
				></div>
				<p class="text-gray-400 font-mono">
					> {{ $t('projects.loading') }}
					<span class="animate-pulse">...</span>
				</p>
			</div>

			<div v-else-if="error" class="text-center py-12">
				<div class="text-4xl md:text-6xl mb-6 opacity-50 text-accent-400">⚠️</div>
				<h3 class="text-lg md:text-xl lg:text-2xl font-bold mb-4 text-primary-400 font-mono">
					> {{ $t('projects.error') }}
				</h3>
				<p class="text-sm md:text-base lg:text-lg text-gray-400 mb-8 font-mono">
					{{ error.message }}
				</p>
				<button class="btn-neon" @click="() => refresh()">
					> {{ $t('projects.retry') }}
				</button>
			</div>

			<div
				v-else-if="projects && projects.length === 0"
				class="text-center py-12"
			>
				<div class="text-4xl md:text-6xl mb-6 opacity-50 text-primary-400">📂</div>
				<h3 class="text-lg md:text-xl lg:text-2xl font-bold text-primary-400 font-mono">
					> {{ $t('projects.empty') }}
				</h3>
			</div>
			<div v-else>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
					<div
						v-for="project in projects"
						:key="project.id"
						class="relative group"
					>
						<ProjectsProjectCard :project="project" />

						<div
							v-if="isAuthenticated"
							class="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
						>
							<button
								class="w-8 h-8 md:w-10 md:h-10 cyber-card rounded-lg flex items-center justify-center text-primary-400 hover:shadow-neon-sm transition-all duration-200 text-base md:text-lg border-primary-400/50 hover:border-primary-400"
								:title="$t('projects.admin.edit')"
								@click.stop="editProject(project)"
							>
								✏️
							</button>
							<button
								class="w-8 h-8 md:w-10 md:h-10 cyber-card rounded-lg flex items-center justify-center text-accent-400 hover:shadow-neon-pink-sm transition-all duration-200 text-base md:text-lg border-accent-400/50 hover:border-accent-400"
								:title="$t('projects.admin.delete')"
								@click.stop="deleteProject(project.id)"
							>
								🗑️
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<AdminAuth v-model="showAuthModal" @authenticated="checkAuth" />
		<AdminProjectForm
			v-model="showProjectForm"
			:project="selectedProject"
			@success="handleProjectSuccess"
		/>
	</div>
</template>

<script setup lang="ts">
import type { Project } from '~/types';

const { locale } = useI18n();
const {
	data: projects,
	pending,
	error,
	refresh,
} = await useFetch<Project[]>('/api/projects');

watch(locale, () => {
	refresh();
});

const isAuthenticated = ref(false);
const showAuthModal = ref(false);
const showProjectForm = ref(false);
const selectedProject = ref<Project | null>(null);

onMounted(() => {
	checkAuth();
});

const checkAuth = async () => {
	try {
		const response = await $fetch('/api/admin/check');
		isAuthenticated.value = response.authenticated || false;
	} catch {
		isAuthenticated.value = false;
	}
};

const openCreateModal = () => {
	selectedProject.value = null;
	showProjectForm.value = true;
};

const editProject = async (project: Project) => {
	try {
		const fullProject = await $fetch(`/api/admin/projects/${project.id}`);
		selectedProject.value = fullProject as Project;
		showProjectForm.value = true;
	} catch (err) {
		const fetchError = err as { data?: { message?: string } };
		alert(fetchError.data?.message || 'Failed to load project');
	}
};

const { t } = useI18n();

const deleteProject = async (id: number) => {
	if (!confirm(t('projects.admin.confirmDelete'))) {
		return;
	}

	try {
		await $fetch(`/api/admin/projects/${id}`, {
			method: 'DELETE',
		});
		refresh();
	} catch (err) {
		const fetchError = err as { data?: { message?: string } };
		alert(fetchError.data?.message || 'Failed to delete project');
	}
};

const handleLogout = async () => {
	try {
		await $fetch('/api/admin/logout', {
			method: 'POST',
		});
		isAuthenticated.value = false;
	} catch {
		isAuthenticated.value = false;
	}
};

const handleProjectSuccess = () => {
	showProjectForm.value = false;
	selectedProject.value = null;
	refresh();
};
</script>
