import React from 'react';
import { Container, Heading } from '@chakra-ui/react';
import ContactForm from './ContactForm';

export default function Contact() {
	return (
		<Container as='section' className='contact'>
			<Heading as='h3'>Contact</Heading>
			<ContactForm />
		</Container>
	);
}
