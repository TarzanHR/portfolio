export const useTheme = () => {
	const theme = useState<'light' | 'dark'>('theme', () => 'dark');

	const toggleTheme = () => {
		theme.value = theme.value === 'dark' ? 'light' : 'dark';
		if (import.meta.client) {
			if (theme.value === 'dark') {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
			localStorage.setItem('theme', theme.value);
		}
	};

	const setTheme = (newTheme: 'light' | 'dark') => {
		theme.value = newTheme;
		if (import.meta.client) {
			if (newTheme === 'dark') {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
			localStorage.setItem('theme', newTheme);
		}
	};

	const initTheme = () => {
		if (import.meta.client) {
			const savedTheme = localStorage.getItem('theme') as
				| 'light'
				| 'dark'
				| null;
			const prefersDark = window.matchMedia(
				'(prefers-color-scheme: dark)',
			).matches;
			const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
			setTheme(initialTheme);
		}
	};

	return {
		theme: readonly(theme),
		toggleTheme,
		setTheme,
		initTheme,
	};
};
