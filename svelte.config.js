import static_adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";

// const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// paths: {
		// 	base: dev ? '' : '/cosi',
		// },
		adapter: static_adapter({
			pages: 'dist',
			fallback: 'index.html',
			// precompress: false,
		}),
		// If you are not using a .nojekyll file, change your appDir to something not starting with an underscore.
		// For example, instead of '_app', use 'app_', 'internal', etc.
		// appDir: 'internal',

		// prerender: {
		// 	// This can be false if you're using a fallback (i.e. SPA mode)
		// 	default: true
		// }
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
