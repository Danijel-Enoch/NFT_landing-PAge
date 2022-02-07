const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			'xs': {'max':'390px'},
			// => @media (min-width: 320px) { ... }
			'sm': '400px',
			// => @media (min-width: 640px) { ... }
	  
			'md': '600px',
			// => @media (min-width: 768px) { ... }
	  
			'lg': {'min':'1240px'},
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
