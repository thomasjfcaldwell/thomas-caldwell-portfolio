import React from 'react';
import Position from './Position';
import { Flex } from '@chakra-ui/react';
import SectionHeader from '../../SectionHeader';
export default function Employment() {
	return (
		<Flex as='section' className='employment' direction={'column'}>
			<SectionHeader title='Work Experience' />
			<Position />
		</Flex>
	);
}
