import React from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export default function Navigation() {
	const [isLargeScreen, setIsLargeScreen] = useState(
		window.matchMedia('(min-width: 768px)').matches
	);
	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.matchMedia('(min-width: 768px)').matches);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return <Box>{isLargeScreen ? <Test /> : <HamburgerIcon boxSize={10} />}</Box>;
}

const Test = () => {
	return (
		<Box bg={'green'}>
			<Text>bum</Text>
		</Box>
	);
};
