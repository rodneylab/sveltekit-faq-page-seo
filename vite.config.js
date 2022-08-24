import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		port: 5173,
		strictPort: false,
	},
	preview: {
		port: 4173,
		strictPort: false,
	},
	define: {
		'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
	},
};

export default config;
