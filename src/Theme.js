import { extendTheme } from '@chakra-ui/react';
const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

const theme = extendTheme({
	config,
	breakpoints: {
		base: '0px',
		sm: '375px',
		md: '768px',
		lg: '960px',
		xl: '1200px',
		'2xl': '1536px',
	},
	styles: {
		global: {
			body: {
				margin: '0',
				boxSizing: 'border-box',
				fontSize: '14px',
			},
			a: {
				color: 'teal.500',
			},
			p: {
				fontSize: ['0.7em', '0.7em', '0.8em', '1em', '1.2em', '1.9em'],
				color: 'gray.500',
				fontWeight: '500',
			},
			h1: {
				fontSize: ['14px', '25px', '40px'],
			},
			h2: {
				fontSize: ['21px', '24px', '29px', '23px', '32px'],
				fontWeight: '700',
			},
			h3: {
				fontSize: '15px',
				fontWeight: '600',
			},
			h4: {},
			h5: {
				fontSize: ['14px', '16px', '17px'],
			},
			h6: {
				fontSize: '10px',
			},
		},
	},
	colors: {
		primary: {
			50: '#E7FDF2',
			100: '#BCFADB',
			200: '#91F7C3',
			300: '#67F4AC',
			400: '#3CF194',
			500: '#11EE7D',
			600: '#0EBE64',
			700: '#0A8F4B',
			800: '#075F32',
			900: '#033019',
		},
		secondary: {
			50: '#FFEAE6',
			100: '#FEC3B8',
			200: '#FE9D8B',
			300: '#FE775D',
			400: '#FD502F',
			500: '#FD2A02',
			600: '#CB2201',
			700: '#981901',
			800: '#651101',
			900: '#330800',
		},
	},
	fonts: {
		body: 'poppins',
		heading: 'poppins',
		mono: 'Menlo, monospace',
	},
	components: {
		Text: {
			variants: {
				sectionTitle: {
					fontSize: '30px',
					backgroundColor: 'white',
					fontFamily: 'fonts.mono',
				},
			},
		},
		Link: {
			variants: {
				navLink: {
					fontSize: '14px',
					color: 'gray.400',
				},
			},
		},
		Button: {
			variants: {
				workButton: {
					bg: 'primary.100',
					fontSize: '10px',
				},
				contactButton: {
					bg: 'primary.200',
					fontSize: '14px',
					width: '100%',
				},
			},
		},
	},
});
export default theme;
