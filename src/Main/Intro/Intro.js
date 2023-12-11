import { Container, Heading, Text } from '@chakra-ui/react';

function Intro() {
	return (
		<Container as='section' className='intro'>
			<Heading as='h3'>Hi Name is Thomas</Heading>
			<Text>
				Experienced web designer proficient in HTML, CSS,
				JavaScript,React,Figma, and Adobe Creative Cloud. Proven track record in
				daily meetings, Jira usage, and successful collaboration with in-house
				and outsourced teams. Mature, hardworking, and committed to continuous
				learning
			</Text>
		</Container>
	);
}

export default Intro;
