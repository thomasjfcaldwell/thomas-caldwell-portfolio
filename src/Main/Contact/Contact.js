import React from 'react';
import { Flex } from '@chakra-ui/react';
import ContactForm from './ContactForm';

export default function Contact() {
	return (
		<Flex as='section' className='contact' justify={'center'} p={1}>
			<ContactForm />
		</Flex>
	);
}
