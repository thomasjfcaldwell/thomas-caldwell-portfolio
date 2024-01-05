import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import { Flex } from '@chakra-ui/react';
function Header() {
	const headerStyle = {
		bg: 'gray.300',
		flexDirection: 'row',
		padding: '1rem',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'stretch',
		border: 'none',
	};
	return (
		<Flex as='header' className='header' sx={headerStyle}>
			<Logo />
			<Navigation />
		</Flex>
	);
}

export default Header;
