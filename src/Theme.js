import { extendTheme } from '@chakra-ui/react';
const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

const theme = extendTheme({
	config,
	styles: {
		global: {
			body: {
				margin: '0',
				boxSizing: 'border-box',
			},
			a: {
				color: 'teal.500',
				_hover: {
					textDecoration: 'underline',
					color: 'primary.500',
				},
			},
			p: {
				backgroundColor: 'none',
				fontSize: ['14px', '18px', '20px'],
				color: 'gray.500',
				fontWeight: '500',
			},
			h1: {
				fontSize: '25px',
			},

			h2: {
				backgroundColor: 'green.600',
				fontSize: '24px',
				fontWeight: '700',
			},
			h3: {
				backgroundColor: 'green.400',
			},
			h4: {
				backgroundColor: 'green.300',
			},
			h5: {
				backgroundColor: 'green.200',
				fontSize: '14px',
			},
			h6: {
				backgroundColor: 'green.50',
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
		Button: {
			sizes: {
				sm: {
					fontSize: 'md',
				},
			},
			variants: {
				base: {
					bg: 'yellow.500',
					fontSize: 'md',
				},
				sm: {
					bg: 'teal.100',
					fontSize: 'lg',
				},
				md: {
					bg: 'green.900',
					fontSize: 'xl',
				},
			},
		},
	},
});
export default theme;
