import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import ContactForm from './ContactForm';

export default function Contact() {
	return (
		<Flex as='section' className='contact' backgroundColor={'yellow'}>
			<Heading as='h3' fontSize={'smaller'}>
				Contact
			</Heading>
			<ContactForm />
		</Flex>
	);
}
