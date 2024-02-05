import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';

export default function SectionHeader(props) {
	return (
		<Flex marginBlock={'1em'}>
			<Heading>{props.title}</Heading>
		</Flex>
	);
}
