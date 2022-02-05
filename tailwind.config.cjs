const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			'sm': '400px',
			// => @media (min-width: 640px) { ... }
	  
			'md': '600px',
			// => @media (min-width: 768px) { ... }
	  
			'lg': '1280px',
			// => @media (min-width: 1024px) { ... }
	  
			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }
	  
			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		  }
	},

	plugins: [require("tailwind-gradient-mask-image")]
};

module.exports = config;
