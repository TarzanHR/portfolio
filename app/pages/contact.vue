<template>
	<div class="section-cyber">
		<UiSection
			:title="$t('nav.contact')"
			:subtitle="$t('contact.subtitle')"
		>
			<div
				class="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 md:gap-12 max-w-6xl mx-auto"
			>
				<div>
					<UiCard glass padding="lg" class="animate-fadeIn">
						<h3 class="text-primary-400 text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 font-bold">
							{{ $t('contact.info.title') }}
						</h3>
						<div class="flex flex-col gap-4 md:gap-6">
							<div class="flex gap-3 md:gap-4 items-start">
								<div
									class="text-xl md:text-2xl flex-shrink-0 text-primary-400"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<rect
											width="20"
											height="16"
											x="2"
											y="4"
											rx="2"
										/>
										<path
											d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
										/>
									</svg>
								</div>
								<div>
									<p
										class="text-xs md:text-sm text-gray-500 dark:text-gray-400 m-0 mb-1 font-semibold uppercase tracking-wider"
									>
										{{ $t('contact.info.email') }}
									</p>
									<a
										href="mailto:lenyguilmin.pro@gmail.com"
										class="text-sm md:text-base lg:text-lg text-gray-900 dark:text-white no-underline transition-colors duration-300 hover:text-primary-400 break-all"
									>
										lenyguilmin.pro@gmail.com
									</a>
								</div>
							</div>
							<div class="flex gap-3 md:gap-4 items-start">
								<div
									class="text-xl md:text-2xl flex-shrink-0 text-primary-400"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path
											d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
										/>
										<circle cx="12" cy="10" r="3" />
									</svg>
								</div>
								<div>
									<p
										class="text-xs md:text-sm text-gray-500 dark:text-gray-400 m-0 mb-1 font-semibold uppercase tracking-wider"
									>
										{{ $t('contact.info.location') }}
									</p>
									<p
										class="text-sm md:text-base lg:text-lg text-gray-900 dark:text-white m-0"
									>
										{{ $t('contact.info.locationValue') }}
									</p>
								</div>
							</div>
							<div class="flex gap-3 md:gap-4 items-start">
								<div
									class="text-xl md:text-2xl flex-shrink-0 text-primary-400"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path
											d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
										/>
										<rect
											width="4"
											height="12"
											x="2"
											y="9"
										/>
										<circle cx="4" cy="4" r="2" />
									</svg>
								</div>
								<div>
									<p
										class="text-xs md:text-sm text-gray-500 dark:text-gray-400 m-0 mb-1 font-semibold uppercase tracking-wider"
									>
										{{ $t('contact.info.linkedin') }}
									</p>
									<a
										href="https://www.linkedin.com/in/leny-guilmin-a80aa2349/"
										target="_blank"
										class="text-sm md:text-base lg:text-lg text-gray-900 dark:text-white no-underline transition-colors duration-300 hover:text-primary-400"
									>
										{{ $t('contact.info.profile') }}
									</a>
								</div>
							</div>
							<div class="flex gap-3 md:gap-4 items-start">
								<div
									class="text-xl md:text-2xl flex-shrink-0 text-primary-400"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path
											d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
										/>
										<path d="M9 18c-4.51 2-5-2-7-2" />
									</svg>
								</div>
								<div>
									<p
										class="text-xs md:text-sm text-gray-500 dark:text-gray-400 m-0 mb-1 font-semibold uppercase tracking-wider"
									>
										{{ $t('contact.info.github') }}
									</p>
									<a
										href="https://github.com/TarzanHR"
										target="_blank"
										class="text-sm md:text-base lg:text-lg text-gray-900 dark:text-white no-underline transition-colors duration-300 hover:text-primary-400"
									>
										{{ $t('contact.info.profile') }}
									</a>
								</div>
							</div>
						</div>
					</UiCard>
				</div>

				<div>
					<UiCard
						glass
						padding="lg"
						class="animate-fadeIn"
						style="animation-delay: 0.2s"
					>
						<h3 class="text-cyan-500 text-lg md:text-xl lg:text-2xl mb-4 md:mb-6">
							{{ $t('contact.form.title') }}
						</h3>
						<form
							class="flex flex-col gap-4"
							@submit.prevent="handleSubmit"
						>
							<div class="flex flex-col gap-2">
								<label
									for="name"
									class="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wider"
								>
									{{ $t('contact.form.name') }}
								</label>
								<input
									id="name"
									v-model="form.name"
									type="text"
									required
									:placeholder="
										$t('contact.form.namePlaceholder')
									"
									class="px-3 md:px-4 py-2 md:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm md:text-base transition-all duration-300 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_0_3px_rgba(0,217,255,0.1)]"
								/>
							</div>
							<div class="flex flex-col gap-2">
								<label
									for="email"
									class="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wider"
								>
									{{ $t('contact.form.email') }}
								</label>
								<input
									id="email"
									v-model="form.email"
									type="email"
									required
									:placeholder="
										$t('contact.form.emailPlaceholder')
									"
									class="px-3 md:px-4 py-2 md:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm md:text-base transition-all duration-300 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_0_3px_rgba(0,217,255,0.1)]"
								/>
							</div>
							<div class="flex flex-col gap-2">
								<label
									for="subject"
									class="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wider"
								>
									{{ $t('contact.form.subject') }}
								</label>
								<input
									id="subject"
									v-model="form.subject"
									type="text"
									required
									:placeholder="
										$t('contact.form.subjectPlaceholder')
									"
									class="px-3 md:px-4 py-2 md:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm md:text-base transition-all duration-300 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_0_3px_rgba(0,217,255,0.1)]"
								/>
							</div>
							<div class="flex flex-col gap-2">
								<label
									for="message"
									class="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wider"
								>
									{{ $t('contact.form.message') }}
								</label>
								<textarea
									id="message"
									v-model="form.message"
									required
									rows="6"
									:placeholder="
										$t('contact.form.messagePlaceholder')
									"
									class="px-3 md:px-4 py-2 md:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm md:text-base transition-all duration-300 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_0_3px_rgba(0,217,255,0.1)] resize-vertical min-h-[120px]"
								/>
							</div>
							<UiButton
								type="submit"
								size="lg"
								style="width: 100%"
								:disabled="isSubmitting"
							>
								{{ isSubmitting ? 'Envoi...' : $t('contact.form.submit') }}
							</UiButton>

							<div
								v-if="submitMessage"
								class="mt-4 p-3 md:p-4 rounded-lg bg-primary-400/10 border border-primary-400/50 text-primary-400 text-xs md:text-sm font-mono"
							>
								{{ submitMessage }}
							</div>
						</form>
					</UiCard>
				</div>
			</div>
		</UiSection>
	</div>
</template>

<script setup lang="ts">
const form = reactive({
	name: '',
	email: '',
	subject: '',
	message: '',
});

const isSubmitting = ref(false);
const submitMessage = ref('');

const handleSubmit = async () => {
	isSubmitting.value = true;
	submitMessage.value = '';

	try {
		const mailtoLink = `mailto:lenyguilmin.pro@gmail.com?subject=${encodeURIComponent(
			form.subject
		)}&body=${encodeURIComponent(
			`Nom: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
		)}`;

		window.location.href = mailtoLink;

		form.name = '';
		form.email = '';
		form.subject = '';
		form.message = '';

		submitMessage.value = 'Votre client email a été ouvert. Veuillez envoyer le message depuis votre application email.';
	} catch (error) {
		console.error('Error:', error);
		submitMessage.value = 'Une erreur est survenue. Veuillez réessayer.';
	} finally {
		isSubmitting.value = false;
	}
};
</script>
