import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

export default function SectionHeader(props) {
	return (
		<Flex marginBlock={'1em'}>
			<Text fontSize={'10px'}>{props.title}</Text>
		</Flex>
	);
}
