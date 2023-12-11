import Intro from './Main/Intro/Intro';
import Work from './Main/Work/Work';
import Employment from './Main/Employment/Employment';
import Skills from './Main/Skills/Skills';
import Contact from './Main/Contact/Contact';
import { Button, Container, Heading } from '@chakra-ui/react';

function Main() {
	return (
		<Container as='section' className='main' maxW='1440px' bg='blue.600'>
			<Heading>Main</Heading>
			<Button bg='brand.900'>Click on me!</Button>
			<Intro />
			<Work />
			<Employment />
			<Skills />
			<Contact />
		</Container>
	);
}

export default Main;
