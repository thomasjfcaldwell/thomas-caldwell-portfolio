import React from 'react';
import Project from './Project';
import { Flex, Heading } from '@chakra-ui/react';

export default function Work() {
	return (
		<Flex
			as='section'
			className='work'
			backgroundColor={'green'}
			flexDirection={'column'}>
			<Heading as='h3'>Work</Heading>
			<Project />
		</Flex>
	);
}
