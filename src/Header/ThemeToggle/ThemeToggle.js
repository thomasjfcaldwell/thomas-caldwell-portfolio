import React from 'react';
import { useColorMode, Flex, Text } from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons';

export default function ThemeToggle() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Flex
			direction={'row'}
			align={'center'}
			width={'200px'}
			justify={'flex-end'}
			gap={2}
			mr={'10px'}>
			<MoonIcon onClick={toggleColorMode}>
				{colorMode === 'light' ? 'Dark' : 'Light'}
			</MoonIcon>
		</Flex>
	);
}
