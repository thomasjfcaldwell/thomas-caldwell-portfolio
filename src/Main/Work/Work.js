import React from 'react';
import Project from './Project';
import { Flex } from '@chakra-ui/react';
import SectionHeader from '../../SectionHeader';

export default function Work() {
	return (
		<Flex as='section' className='work' flexDirection={'column'}>
			<SectionHeader title='My Projects' />
			<Project />
		</Flex>
	);
}
