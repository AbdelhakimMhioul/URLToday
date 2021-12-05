module.exports = {
	mode: 'jit',
	purge: ["src/**/*.{html,js,ts,vue}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				mauve: '#d9a5b3',
				saphire: '#1868ae',
				powderblue: '#c6d7eb',
				lightpeach: '#fff1e1',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
