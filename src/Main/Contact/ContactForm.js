import React from 'react';
import { Box, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';

export default function ContactForm() {
	return (
		<Box
			width={{ base: '100%', md: '80%', lg: '50%' }}
			margin={'0 auto'}
			padding={2}>
			<FormControl>
				<FormLabel>Name</FormLabel>
				<Input size='sm' type='text' />
			</FormControl>
			<FormControl>
				<FormLabel>Email address</FormLabel>
				<Input size='sm' type='email' />
			</FormControl>
			<FormControl>
				<FormLabel>Message</FormLabel>
				<Textarea size='lg' type='text' />
			</FormControl>
		</Box>
	);
}
