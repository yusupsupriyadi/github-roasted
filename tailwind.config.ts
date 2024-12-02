import type { Config } from 'tailwindcss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette';

export default {
	content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Inter',
				],
			},
			animation: {
				spotlight: 'spotlight 2s ease .75s 1 forwards',
			},
			keyframes: {
				spotlight: {
					'0%': {
						opacity: '0',
						transform: 'translate(-72%, -62%) scale(0.5)',
					},
					'100%': {
						opacity: '1',
						transform: 'translate(-50%,-40%) scale(1)',
					},
				},
			},
		},
	},
	plugins: [addVariablesForColors],
} satisfies Config;

function addVariablesForColors({
	addBase,
	theme,
}: {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	addBase: any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	theme: any;
}) {
	const allColors = flattenColorPalette(theme('colors'));
	const newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
	);

	addBase({
		':root': newVars,
	});
}
