import Intro from './Main/Intro/Intro';
import Work from './Main/Work/Work';
import Employment from './Main/Employment/Employment';
import Skills from './Main/Skills/Skills';
import Contact from './Main/Contact/Contact';
import { Container } from '@chakra-ui/react';

function Main() {
	return (
		<Container as='section' className='main' bg='blue.600' padding={5}>
			<Intro />
			<Work />
			<Employment />
			<Skills />
			<Contact />
		</Container>
	);
}

export default Main;
