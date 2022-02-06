import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import staticAdapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */

const config = {
	kit: {
		adapter: staticAdapter(),
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
