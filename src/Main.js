import Intro from './Main/Intro/Intro';
import Work from './Main/Work/Work';
import Employment from './Main/Employment/Employment';
import Skills from './Main/Skills/Skills';
import Contact from './Main/Contact/Contact';
import { Flex } from '@chakra-ui/react';

function Main() {
	const mainStyle = {
		bg: 'blue.600',
		flexDirection: 'column',
		p: '5',
		m: '0',
	};
	return (
		<Flex as='main' sx={mainStyle}>
			<Intro />
			<Work />
			<Employment />
			<Skills />
			<Contact />
		</Flex>
	);
}

export default Main;
