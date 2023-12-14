import React from 'react';
import { Image, Box } from '@chakra-ui/react';
import logo from '../../SVG/logo.svg';

export default function Logo() {
	return (
		<Box>
			<Image src={logo} alt='Thomas Caldwell Logo' width={'50px'} />
		</Box>
	);
}
