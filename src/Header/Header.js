import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import { Flex } from '@chakra-ui/react';
function Header() {
	return (
		<Flex
			className='header'
			padding={'1.5em'}
			alignItems={'center'}
			justifyContent={'space-between'}>
			<Logo />
			<Navigation />
		</Flex>
	);
}

export default Header;
