import React from 'react';
import { Flex } from '@chakra-ui/react';
import ContactForm from './ContactForm';

export default function Contact() {
	return (
		<Flex
			as='section'
			className='contact'
			backgroundColor={'yellow'}
			justify={'center'}
			p={5}>
			<ContactForm />
		</Flex>
	);
}
