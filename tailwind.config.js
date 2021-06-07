module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: theme => ({
         'hero-mobile': "url('/images/bg-intro-mobile.svg')",
         'hero-desktop': "url('/images/bg-intro-desktop.svg')",
				 'mockups':"url('/images/image-mockups.png')",
        }),

			backgroundSize:{
				'size-60':'60%',
				'size-90':'90%',
			},

			colors: {
				'dark-blue': 'hsl(233, 26%, 24%)',
				'lime-green': 'hsl(136, 65%, 51%)',
				'bright-cyan': 'hsl(192, 70%, 51%)',
				'grayish-blue': 'hsl(233, 8%, 62%)',
				'light-grayish-blue': 'hsl(220, 16%, 96%)',
				'very-light-gray': 'hsl(0, 0%, 98%)',
				'white-main': 'hsl(0, 0%, 100%)',
			},

			fontFamily: {
				publicSans: ['Public Sans, sans'],
			},

			fontSize: {
				'article-paragraph': '0.85rem',
				md: '0.9125rem',
				'3.5xl': '2rem',
			},

			height:{
				'hero-desktop':'35rem',
				'inner-hero-desktop':'40rem'
			},

			minHeight:{
				'mobile-image-height': '17.5rem'
			},

			screens: {
				mobile: '375px',
				desktop: '1440px',
			},
		},
	},
	variants: {
		extend: {
			padding: ['hover'],
			fill: ['hover'],
		},
	},
	plugins: [],
};
