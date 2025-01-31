/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'], 
	content: [
		'./index.html',
		'./src/**/*.{js,jsx,ts,tsx}', 
		'./node_modules/shadcn-ui/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			borderRadius: {
				lg: '12px',
				md: '10px',
				sm: '8px'
			},
			colors: {
				background: {
					DEFAULT: '#f4f5fb',
					dark: '#04050b' 
				},
				foreground: {
					DEFAULT: '#0d111c',
					dark: '#e3e7f2'
				},
                main: {
                    DEFAULT:'#090C09',
                    navbar:'#151515',
                    card:'#121312',
                    highlight:'#191A19'    
                },
                navbar:{
                    bg:'#151515',
                    text:'#FFFFFF',
                },
                footer: {
                    bg:'#121212',
                }
			}
		}
	},
	plugins: [require('tailwindcss-animate')]
};