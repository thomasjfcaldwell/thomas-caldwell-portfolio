import React from 'react';
import Position from './Position';
import { Flex, Text } from '@chakra-ui/react';
export default function Employment() {
	return (
		<Flex
			as='section'
			className='employment'
			backgroundColor={'orange'}
			direction={'column'}>
			<Text>employment</Text>
			<Position />
		</Flex>
	);
}
