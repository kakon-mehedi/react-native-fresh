const { APP_COLORS } = require('./theme/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all files that contain Nativewind classes.
	content: ['./app/**/*.{js,jsx,ts,tsx}'],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
			colors: APP_COLORS,
		},
	},
	plugins: [],
};
