import Intro from './Main/Intro/Intro';
import Work from './Main/Work/Work';
import Employment from './Main/Employment/Employment';
import Skills from './Main/Skills/Skills';
import Contact from './Main/Contact/Contact';
import { Button } from '@chakra-ui/react';

function Main() {
	return (
		<div className='main'>
			<div>
				<h2>Main</h2>
				<Button bg='brand.900'>Click on me!</Button>
				<Intro />
				<Work />
				<Employment />
				<Skills />
				<Contact />
			</div>
		</div>
	);
}

export default Main;
