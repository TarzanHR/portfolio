import type { Config } from 'tailwindcss';

export default {
	content: [
		'./app/**/*.{vue,js,ts}',
		'./components/**/*.{vue,js,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#e6fff5',
					100: '#ccffeb',
					200: '#99ffd7',
					300: '#66ffc3',
					400: '#00ff88', // neon green principal
					500: '#00cc6d',
					600: '#009952',
					700: '#006638',
					800: '#00331c',
					900: '#001a0e',
				},
				secondary: {
					50: '#f0f1ff',
					100: '#e0e3ff',
					200: '#c1c7ff',
					300: '#a2abff',
					400: '#4d5bce', // purple principal
					500: '#3d4aa5',
					600: '#2e397c',
					700: '#1f2753',
					800: '#0f142a',
					900: '#080a15',
				},
				accent: {
					50: '#ffe6f0',
					100: '#ffcce0',
					200: '#ff99c1',
					300: '#ff66a2',
					400: '#ff2d78', // neon pink
					500: '#cc2460',
					600: '#991b48',
					700: '#661230',
					800: '#330918',
					900: '#1a040c',
				},
				dark: {
					bg: '#0b0e14',
					section: '#151a21',
					card: '#1e242c',
					hover: '#2a303c',
				},
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
				pixel: ['"Press Start 2P"', 'cursive'],
			},
			boxShadow: {
				'neon-sm': '0 0 10px rgba(0, 255, 136, 0.5)',
				'neon-md': '0 0 20px rgba(0, 255, 136, 0.6)',
				'neon-lg': '0 0 30px rgba(0, 255, 136, 0.7)',
				'neon-pink-sm': '0 0 10px rgba(255, 45, 120, 0.5)',
				'neon-pink-md': '0 0 20px rgba(255, 45, 120, 0.6)',
				'neon-pink-lg': '0 0 30px rgba(255, 45, 120, 0.7)',
			},
			animation: {
				'fade-in': 'fadeIn 0.6s ease-out forwards',
				'slide-up': 'slideUp 0.6s ease-out',
				'slide-in': 'slideIn 0.5s ease-out forwards',
				'bounce-slow': 'bounce 3s infinite',
				'gradient': 'gradient 3s linear infinite',
				'glitch': 'glitch 2s infinite',
				'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				slideIn: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				gradient: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				glitch: {
					'0%': {
						textShadow: '0.05em 0 0 #ff2d78, -0.05em -0.025em 0 #00ff88',
					},
					'14%': {
						textShadow: '0.05em 0 0 #ff2d78, -0.05em -0.025em 0 #00ff88',
					},
					'15%': {
						textShadow: '-0.05em -0.025em 0 #ff2d78, 0.025em 0.025em 0 #00ff88',
					},
					'49%': {
						textShadow: '-0.05em -0.025em 0 #ff2d78, 0.025em 0.025em 0 #00ff88',
					},
					'50%': {
						textShadow: '0.025em 0.05em 0 #ff2d78, 0.05em 0 0 #00ff88',
					},
					'99%': {
						textShadow: '0.025em 0.05em 0 #ff2d78, 0.05em 0 0 #00ff88',
					},
					'100%': {
						textShadow: '-0.025em 0 0 #ff2d78, -0.025em -0.025em 0 #00ff88',
					},
				},
				pulseNeon: {
					'0%, 100%': {
						boxShadow: '0 0 10px rgba(0, 255, 136, 0.5)',
					},
					'50%': {
						boxShadow: '0 0 30px rgba(0, 255, 136, 0.8)',
					},
				},
			},
			backgroundImage: {
				'gradient-cyber': 'linear-gradient(135deg, #00ff88, #4d5bce)',
				'grid-pattern': 'linear-gradient(rgba(0, 255, 136, 0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 136, 0.01) 1px, transparent 1px)',
			},
			backgroundSize: {
				'grid': '20px 20px',
			},
		},
	},
	plugins: [],
} satisfies Config;
