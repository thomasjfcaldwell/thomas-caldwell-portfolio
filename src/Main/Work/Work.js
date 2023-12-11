import React from 'react';
import Project from './Project';
import { Container, Heading } from '@chakra-ui/react';

export default function Work() {
	return (
		<Container as='section' className='work'>
			<Heading as='h3'>Work</Heading>
			<Project />
		</Container>
	);
}
