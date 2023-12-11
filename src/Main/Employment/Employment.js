import React from 'react';
import Position from './Position';
import { Container, Text } from '@chakra-ui/react';
export default function Employment() {
	return (
		<Container
			as='section'
			className='employment'
			maxWidth='1200px'
			bg='green
		'>
			<Text>employment</Text>
			<Position />
		</Container>
	);
}
