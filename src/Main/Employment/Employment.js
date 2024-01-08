import React from 'react';
import Position from './Position';
import { Flex } from '@chakra-ui/react';
export default function Employment() {
	return (
		<Flex as='section' className='employment' direction={'column'}>
			<Position />
		</Flex>
	);
}
