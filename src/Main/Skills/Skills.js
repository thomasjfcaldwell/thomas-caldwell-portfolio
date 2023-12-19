import React from 'react';
import SkillCard from './SkillCard';
import { Flex, Heading } from '@chakra-ui/react';
export default function Skills() {
	return (
		<Flex className='skills' backgroundColor={'purple'} direction={'column'}>
			<Heading as='h2'>Skills</Heading>
			<SkillCard />
		</Flex>
	);
}
