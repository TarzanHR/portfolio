export const useScrollAnimation = () => {
	const observeElements = (
		selector: string,
		animationClass: string = 'fade-in',
	) => {
		if (import.meta.client) {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add(animationClass);
							observer.unobserve(entry.target);
						}
					});
				},
				{
					threshold: 0.1,
					rootMargin: '0px 0px -50px 0px',
				},
			);

			const elements = document.querySelectorAll(selector);
			elements.forEach((el) => observer.observe(el));

			return () => {
				elements.forEach((el) => observer.unobserve(el));
			};
		}
	};

	const smoothScroll = (targetId: string) => {
		if (import.meta.client) {
			const element = document.getElementById(targetId);
			if (element) {
				element.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			}
		}
	};

	return {
		observeElements,
		smoothScroll,
	};
};
