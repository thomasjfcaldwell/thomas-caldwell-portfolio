import Intro from './Main/Intro/Intro';
import Work from './Main/Work/Work';
import Employment from './Main/Employment/Employment';
import Skills from './Main/Skills/Skills';
import Contact from './Main/Contact/Contact';
import { Flex } from '@chakra-ui/react';

function Main() {
	const mainStyle = {
		flexDirection: 'column',
		p: '1em',
		m: '0',
		gap: '20px',
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
