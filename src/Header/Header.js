import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import ThemeToggle from './ThemeToggle/ThemeToggle';
import { Flex, Box } from '@chakra-ui/react';
function Header() {
	const headerStyle = {
		width: '100%',
		maxWidth: '1440px',
		margin: '0 auto',
		padding: '10px',
		border: 'none',
	};
	return (
		<Box as='header' className='header' sx={headerStyle}>
			<Flex
				p={5}
				align='center'
				justify='space-between'
				h={'100px'}
				width={'100%'}>
				<Flex justify='space-between' align='center' width={'100%'}>
					<Logo />
					<Navigation />
				</Flex>
			</Flex>
		</Box>
	);
}

export default Header;
