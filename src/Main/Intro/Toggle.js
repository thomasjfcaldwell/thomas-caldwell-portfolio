import React from 'react';
import { Flex, useDisclosure, Button, Text } from '@chakra-ui/react';

export default function Toggle() {
	const { getDisclosureProps, getButtonProps } = useDisclosure();

	const buttonProps = getButtonProps();
	const disclosureProps = getDisclosureProps();
	return (
		<>
			<Flex>
				<Button {...buttonProps}>Toggle Me</Button>
				<Text {...disclosureProps} mt={4} position={'absolute'}>
					This text is being visibly toggled hidden and shown by the button.
					<br />
					(Inspect these components to see the rendered attributes)
				</Text>
			</Flex>
		</>
	);
}
