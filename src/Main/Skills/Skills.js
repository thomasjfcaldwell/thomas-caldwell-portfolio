import React from 'react';
import SkillCard from './SkillCard';
import { Container, Heading } from '@chakra-ui/react';
export default function Skills() {
	return (
		<Container className='skills'>
			<Heading as='h2'>Skills</Heading>
			<SkillCard />
		</Container>
	);
}
