import React from 'react';
import {
	Flex,
	FormControl,
	FormLabel,
	Input,
	Textarea,
} from '@chakra-ui/react';

export default function ContactForm() {
	return (
		<Flex direction={'column'} backgroundColor={'grey'} p={10}>
			<FormControl>
				<FormLabel>Name</FormLabel>
				<Input variant='flushed' type='text' size='sm' />
			</FormControl>
			<FormControl>
				<FormLabel>Email address</FormLabel>
				<Input type='email' size='sm' />
			</FormControl>
			<FormControl>
				<FormLabel>Message</FormLabel>
				<Textarea size='lg' type='text' />
			</FormControl>
		</Flex>
	);
}
