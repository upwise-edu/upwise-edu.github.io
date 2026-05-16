/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ['class', '[data-theme="upwise-dark"]'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Pretendard Variable"', 'Pretendard', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', '"Helvetica Neue"', '"Segoe UI"', '"Apple SD Gothic Neo"', '"Noto Sans KR"', '"Malgun Gothic"', 'sans-serif'],
				serif: ['"Playfair Display"', 'Georgia', 'serif'],
				mono: ['"JetBrains Mono"', 'monospace'],
			},
			colors: {
				navy: {
					900: '#0a1929',
					800: '#0f1e35',
					700: '#1e3a5f',
					600: '#2c4870',
					500: '#3d5a85',
				},
				upwise: {
					orange: '#f7931e',
					'orange-bright': '#ff6b35',
					'orange-soft': '#ffa756',
				},
			},
			keyframes: {
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(8px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
			animation: {
				'fade-up': 'fade-up 0.5s ease-out',
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: [
			{
				"upwise-light": {
					"primary": "#f7931e",
					"primary-content": "#ffffff",
					"secondary": "#1e3a5f",
					"secondary-content": "#ffffff",
					"accent": "#ff6b35",
					"accent-content": "#ffffff",
					"neutral": "#1e3a5f",
					"neutral-content": "#ffffff",
					"base-100": "#ffffff",
					"base-200": "#f8fafc",
					"base-300": "#e2e8f0",
					"base-content": "#1e3a5f",
					"info": "#3d5a85",
					"success": "#10b981",
					"warning": "#f7931e",
					"error": "#ef4444",
				},
			},
			{
				"upwise-dark": {
					"primary": "#f7931e",
					"primary-content": "#0a1929",
					"secondary": "#1e3a5f",
					"secondary-content": "#e2e8f0",
					"accent": "#ff6b35",
					"accent-content": "#0a1929",
					"neutral": "#1e293b",
					"neutral-content": "#e2e8f0",
					"base-100": "#0a1929",
					"base-200": "#0f1e35",
					"base-300": "#1e3a5f",
					"base-content": "#e2e8f0",
					"info": "#3d5a85",
					"success": "#10b981",
					"warning": "#f7931e",
					"error": "#ef4444",
				},
			},
		],
		darkTheme: "upwise-dark",
		logs: false,
	}
}
