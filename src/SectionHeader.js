import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

export default function SectionHeader(props) {
	return (
		<Flex marginBlock={'1em'} justify={'center'} alignItems={'center'}>
			<Text variant={'sectionTitle'}>{props.title}</Text>
		</Flex>
	);
}
