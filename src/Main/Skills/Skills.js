import React from 'react';
import SkillCard from './SkillCard';
import { Flex } from '@chakra-ui/react';
import SectionHeader from '../../SectionHeader';
export default function Skills() {
	return (
		<Flex className='skills' direction={'column'}>
			<SectionHeader title='My Skills' />
			<SkillCard />
		</Flex>
	);
}
