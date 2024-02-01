import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';

export default function SectionHeader(props) {
	return (
		<Flex>
			<Heading>{props.title}</Heading>
		</Flex>
	);
}
