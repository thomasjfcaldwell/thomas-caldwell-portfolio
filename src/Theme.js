import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
	styles: {
		global: {
			body: {
				bg: 'gray.100',
				margin: '0',
			},
			a: {
				color: 'teal.500',
				_hover: {
					textDecoration: 'underline',
				},
			},
			h2: {
				color: 'black.500',
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
});
export default theme;
