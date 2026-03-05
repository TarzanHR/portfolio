import type { RouterConfig } from '@nuxt/schema';

// Stocker la dernière position de scroll
let lastScrollPosition = 0;

export default <RouterConfig>{
	scrollBehavior(to, from, _savedPosition) {
		return new Promise((resolve) => {
			// Si on change juste de langue (même path sans le préfixe de langue)
			const toPathWithoutLang = to.path.replace(/^\/(en|fr)/, '') || '/';
			const fromPathWithoutLang = from.path.replace(/^\/(en|fr)/, '') || '/';

			if (toPathWithoutLang === fromPathWithoutLang) {
				// Sauvegarder la position actuelle
				lastScrollPosition = window.scrollY;

				// Attendre que la page soit chargée puis restaurer la position
				setTimeout(() => {
					resolve({ top: lastScrollPosition, behavior: 'instant' });
				}, 0);
			} else {
				// Toujours scroll en haut sur une nouvelle page
				resolve({ top: 0, behavior: 'instant' });
			}
		});
	},
};
