<template>
	<header
		class="fixed top-0 left-0 right-0 z-50 bg-dark-card/80 backdrop-blur-lg border-b border-primary-400/20 transition-all duration-300 overflow-hidden"
	>
		<!-- Spores flottantes gauche -->
		<div class="header-spores header-spores-left" aria-hidden="true">
			<svg viewBox="0 -2 200 66" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
				<defs>
					<radialGradient id="sporeL" cx="50%" cy="50%" r="50%">
						<stop offset="0%" stop-color="#00ff88" stop-opacity="0.9"/>
						<stop offset="100%" stop-color="#00ff88" stop-opacity="0"/>
					</radialGradient>
					<linearGradient id="vineL1" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stop-color="#00ff88" stop-opacity="0.7"/>
						<stop offset="100%" stop-color="#00ff88" stop-opacity="0"/>
					</linearGradient>
					<linearGradient id="vineL2" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stop-color="#00cc6d" stop-opacity="0.5"/>
						<stop offset="100%" stop-color="#00cc6d" stop-opacity="0"/>
					</linearGradient>
				</defs>

				<!-- Lianes qui tombent du haut -->
				<path d="M20 -2 C18 8, 24 16, 20 28 C16 40, 22 52, 18 64" stroke="url(#vineL1)" stroke-width="1.5" stroke-linecap="round" fill="none"/>
				<path d="M45 -2 C42 10, 48 20, 44 34 C40 48, 46 56, 43 64" stroke="url(#vineL1)" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.6"/>
				<path d="M8 -2 C6 6, 10 14, 8 24 C6 34, 10 44, 7 64" stroke="url(#vineL2)" stroke-width="0.8" stroke-linecap="round" fill="none" opacity="0.5"/>

				<!-- Petites vrilles organiques -->
				<path d="M20 20 C26 16, 30 20, 28 26" stroke="#00ff88" stroke-width="1" fill="none" opacity="0.4"/>
				<path d="M44 32 C50 26, 56 30, 53 38" stroke="#00ff88" stroke-width="0.8" fill="none" opacity="0.3"/>
				<path d="M20 44 C14 38, 10 42, 12 50" stroke="#00ff88" stroke-width="0.8" fill="none" opacity="0.35"/>

				<!-- Spores / particules flottantes -->
				<circle cx="60" cy="18" r="2" fill="url(#sporeL)">
					<animate attributeName="cy" values="18;10;18" dur="4s" repeatCount="indefinite"/>
					<animate attributeName="opacity" values="0.7;0.2;0.7" dur="4s" repeatCount="indefinite"/>
				</circle>
				<circle cx="80" cy="38" r="1.5" fill="url(#sporeL)">
					<animate attributeName="cy" values="38;30;38" dur="5.5s" repeatCount="indefinite"/>
					<animate attributeName="opacity" values="0.5;0.1;0.5" dur="5.5s" repeatCount="indefinite"/>
				</circle>
				<circle cx="100" cy="22" r="1" fill="url(#sporeL)">
					<animate attributeName="cy" values="22;14;22" dur="3.8s" repeatCount="indefinite"/>
					<animate attributeName="opacity" values="0.6;0.1;0.6" dur="3.8s" repeatCount="indefinite"/>
				</circle>
				<circle cx="120" cy="42" r="1.5" fill="url(#sporeL)">
					<animate attributeName="cy" values="42;34;42" dur="6s" repeatCount="indefinite"/>
					<animate attributeName="opacity" values="0.4;0.05;0.4" dur="6s" repeatCount="indefinite"/>
				</circle>
				<circle cx="140" cy="28" r="1" fill="url(#sporeL)">
					<animate attributeName="cy" values="28;20;28" dur="4.5s" repeatCount="indefinite"/>
					<animate attributeName="opacity" values="0.5;0.1;0.5" dur="4.5s" repeatCount="indefinite"/>
				</circle>
				<circle cx="160" cy="48" r="2" fill="url(#sporeL)">
					<animate attributeName="cy" values="48;38;48" dur="5s" repeatCount="indefinite"/>
					<animate attributeName="opacity" values="0.3;0.05;0.3" dur="5s" repeatCount="indefinite"/>
				</circle>
				<!-- Luciole -->
				<circle cx="70" cy="50" r="2" fill="#00ff88">
					<animate attributeName="opacity" values="0.9;0.1;0.9" dur="2.8s" repeatCount="indefinite"/>
					<animate attributeName="r" values="2;1;2" dur="2.8s" repeatCount="indefinite"/>
				</circle>
			</svg>
		</div>

		<!-- Spores flottantes droite (miroir) -->
		<div class="header-spores header-spores-right" aria-hidden="true">
			<svg viewBox="0 -2 200 66" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" style="transform: scaleX(-1)">
				<defs>
					<radialGradient id="sporeR" cx="50%" cy="50%" r="50%">
						<stop offset="0%" stop-color="#00ff88" stop-opacity="0.9"/>
						<stop offset="100%" stop-color="#00ff88" stop-opacity="0"/>
					</radialGradient>
					<linearGradient id="vineR1" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stop-color="#00ff88" stop-opacity="0.7"/>
						<stop offset="100%" stop-color="#00ff88" stop-opacity="0"/>
					</linearGradient>
					<linearGradient id="vineR2" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stop-color="#00cc6d" stop-opacity="0.5"/>
						<stop offset="100%" stop-color="#00cc6d" stop-opacity="0"/>
					</linearGradient>
				</defs>

				<!-- Lianes -->
				<path d="M20 -2 C18 8, 24 16, 20 28 C16 40, 22 52, 18 64" stroke="url(#vineR1)" stroke-width="1.5" stroke-linecap="round" fill="none"/>
				<path d="M45 -2 C42 10, 48 20, 44 34 C40 48, 46 56, 43 64" stroke="url(#vineR1)" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.6"/>
				<path d="M8 -2 C6 6, 10 14, 8 24 C6 34, 10 44, 7 64" stroke="url(#vineR2)" stroke-width="0.8" stroke-linecap="round" fill="none" opacity="0.5"/>

				<!-- Vrilles -->
				<path d="M20 20 C26 16, 30 20, 28 26" stroke="#00ff88" stroke-width="1" fill="none" opacity="0.4"/>
				<path d="M44 32 C50 26, 56 30, 53 38" stroke="#00ff88" stroke-width="0.8" fill="none" opacity="0.3"/>
				<path d="M20 44 C14 38, 10 42, 12 50" stroke="#00ff88" stroke-width="0.8" fill="none" opacity="0.35"/>

				<!-- Spores -->
				<circle cx="60" cy="14" r="2" fill="url(#sporeR)">
					<animate attributeName="cy" values="14;6;14" dur="4.8s" repeatCount="indefinite"/>
					<animate attributeName="opacity" values="0.6;0.1;0.6" dur="4.8s" repeatCount="indefinite"/>
				</circle>
				<circle cx="85" cy="44" r="1.5" fill="url(#sporeR)">
					<animate attributeName="cy" values="44;36;44" dur="5s" repeatCount="indefinite"/>
					<animate attributeName="opacity" values="0.5;0.1;0.5" dur="5s" repeatCount="indefinite"/>
				</circle>
				<circle cx="108" cy="26" r="1" fill="url(#sporeR)">
					<animate attributeName="cy" values="26;18;26" dur="3.5s" repeatCount="indefinite"/>
					<animate attributeName="opacity" values="0.7;0.15;0.7" dur="3.5s" repeatCount="indefinite"/>
				</circle>
				<circle cx="130" cy="50" r="1.5" fill="url(#sporeR)">
					<animate attributeName="cy" values="50;40;50" dur="6.5s" repeatCount="indefinite"/>
					<animate attributeName="opacity" values="0.35;0.05;0.35" dur="6.5s" repeatCount="indefinite"/>
				</circle>
				<circle cx="150" cy="32" r="1" fill="url(#sporeR)">
					<animate attributeName="cy" values="32;24;32" dur="4.2s" repeatCount="indefinite"/>
					<animate attributeName="opacity" values="0.5;0.1;0.5" dur="4.2s" repeatCount="indefinite"/>
				</circle>
				<circle cx="170" cy="18" r="2" fill="url(#sporeR)">
					<animate attributeName="cy" values="18;10;18" dur="5.8s" repeatCount="indefinite"/>
					<animate attributeName="opacity" values="0.3;0.05;0.3" dur="5.8s" repeatCount="indefinite"/>
				</circle>
				<!-- Luciole -->
				<circle cx="75" cy="52" r="2" fill="#00ff88">
					<animate attributeName="opacity" values="0.9;0.1;0.9" dur="3.3s" repeatCount="indefinite"/>
					<animate attributeName="r" values="2;1;2" dur="3.3s" repeatCount="indefinite"/>
				</circle>
			</svg>
		</div>

		<div class="container mx-auto px-4">
			<nav class="flex items-center justify-between py-3 md:py-4">
				<NuxtLink
					:to="localePath('/')"
					class="logo-link flex items-center gap-1 text-base md:text-lg lg:text-xl font-bold font-mono group relative z-10"
				>
					<span class="text-primary-400 transition-transform group-hover:scale-110">&lt;</span>
					<span class="logo-text text-primary-400">{{ $t('header.name') }}</span>
					<span class="text-primary-400 transition-transform group-hover:scale-110">/&gt;</span>
				</NuxtLink>

				<ul class="hidden lg:flex items-center gap-6 lg:gap-8">
					<li v-for="link in navLinks" :key="link.to">
						<NuxtLink
							:to="localePath(link.to)"
							class="text-gray-300 hover:text-primary-400 font-medium transition-colors relative group text-base font-mono"
						>
							{{ $t(link.label) }}
							<span
								class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"
							/>
						</NuxtLink>
					</li>
				</ul>

				<div class="flex items-center gap-2 md:gap-3">
					<button
						class="hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg bg-dark-hover border border-primary-400/20 hover:border-primary-400/50 transition-all text-gray-300"
						:title="$t('nav.switchLanguage')"
						@click="toggleLocale"
					>
						<svg
							class="w-5 h-5"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<circle cx="12" cy="12" r="10" />
							<path
								d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
							/>
						</svg>
						<span class="text-sm font-semibold">
							{{ locale.toUpperCase() }}
						</span>
					</button>

					<button
						class="lg:hidden p-2 rounded-lg bg-dark-hover border border-primary-400/20"
						:aria-label="$t('nav.menu')"
						@click="mobileMenuOpen = !mobileMenuOpen"
					>
						<div class="w-5 h-5 flex flex-col justify-center gap-1">
							<span
								class="w-full h-0.5 bg-gray-100 transition-all duration-300"
								:class="
									mobileMenuOpen
										? 'rotate-45 translate-y-1.5'
										: ''
								"
							/>
							<span
								class="w-full h-0.5 bg-gray-100 transition-all duration-300"
								:class="mobileMenuOpen ? 'opacity-0' : ''"
							/>
							<span
								class="w-full h-0.5 bg-gray-100 transition-all duration-300"
								:class="
									mobileMenuOpen
										? '-rotate-45 -translate-y-1.5'
										: ''
								"
							/>
						</div>
					</button>
				</div>
			</nav>
		</div>

		<Transition
			enter-active-class="transition-all duration-300 ease-out"
			enter-from-class="opacity-0 -translate-y-4"
			enter-to-class="opacity-100 translate-y-0"
			leave-active-class="transition-all duration-300 ease-in"
			leave-from-class="opacity-100 translate-y-0"
			leave-to-class="opacity-0 -translate-y-4"
		>
			<div
				v-if="mobileMenuOpen"
				class="lg:hidden border-t border-primary-400/20 bg-dark-card"
			>
				<ul class="py-4 px-4 space-y-2">
					<li v-for="link in navLinks" :key="link.to">
						<NuxtLink
							:to="localePath(link.to)"
							class="block px-4 py-3 rounded-lg text-gray-300 hover:bg-dark-hover hover:text-primary-400 font-medium transition-all text-base"
							@click="mobileMenuOpen = false"
						>
							{{ $t(link.label) }}
						</NuxtLink>
					</li>
					<li>
						<button
							class="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-dark-hover hover:text-primary-400 font-medium transition-all"
							@click="toggleLocale"
						>
							<svg
								class="w-5 h-5"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<circle cx="12" cy="12" r="10" />
								<path
									d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
								/>
							</svg>
							{{ $t('nav.switchLanguage') }} ({{
								locale.toUpperCase()
							}})
						</button>
					</li>
				</ul>
			</div>
		</Transition>
	</header>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const mobileMenuOpen = ref(false);

const navLinks = [
	{ to: '/', label: 'nav.home' },
	{ to: '/about', label: 'nav.about' },
	{ to: '/skills', label: 'nav.skills' },
	{ to: '/experience', label: 'nav.experience' },
	{ to: '/projects', label: 'nav.projects' },
	{ to: '/contact', label: 'nav.contact' },
];

const toggleLocale = async () => {
	const scrollPosition = window.scrollY;
	const newLocale = locale.value === 'fr' ? 'en' : 'fr';

	await navigateTo(switchLocalePath(newLocale));

	nextTick(() => {
		window.scrollTo({
			top: scrollPosition,
			behavior: 'instant',
		});
	});
};

watch(mobileMenuOpen, (value) => {
	if (import.meta.client) {
		document.body.style.overflow = value ? 'hidden' : '';
	}
});
</script>

<style scoped>
/* Spores décor */
.header-spores {
	position: absolute;
	top: 0;
	width: 200px;
	height: 100%;
	pointer-events: none;
	z-index: 0;
}

.header-spores-left {
	left: 0;
	mask-image: linear-gradient(to right, black 40%, transparent 100%);
	-webkit-mask-image: linear-gradient(to right, black 40%, transparent 100%);
}

.header-spores-right {
	right: 0;
	mask-image: linear-gradient(to left, black 40%, transparent 100%);
	-webkit-mask-image: linear-gradient(to left, black 40%, transparent 100%);
}

@media (max-width: 900px) {
	.header-spores {
		width: 120px;
		opacity: 0.6;
	}
}

@media (max-width: 640px) {
	.header-spores {
		display: none;
	}
}

/* Logo glitch au hover */
.logo-text {
	position: relative;
	transition: text-shadow 0.3s ease;
}

.logo-link:hover .logo-text {
	text-shadow: 0 0 12px rgba(0, 255, 136, 0.8);
	animation: logo-glitch 0.4s steps(1) forwards;
}

@keyframes logo-glitch {
	0%   { transform: translate(0); }
	20%  { transform: translate(-2px, 1px); clip-path: inset(20% 0 60% 0); }
	40%  { transform: translate(2px, -1px); clip-path: inset(60% 0 20% 0); }
	60%  { transform: translate(-1px, 0); clip-path: none; }
	80%  { transform: translate(1px, 1px); }
	100% { transform: translate(0); }
}

</style>
