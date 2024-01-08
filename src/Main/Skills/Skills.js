import React from 'react';
import SkillCard from './SkillCard';
import { Flex } from '@chakra-ui/react';
export default function Skills() {
	return (
		<Flex className='skills' direction={'column'} bg={'primary.500'}>
			<SkillCard />
		</Flex>
	);
}
