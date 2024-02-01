import React from 'react';
import { Flex } from '@chakra-ui/react';
import ContactForm from './ContactForm';
import SectionHeader from '../../SectionHeader';

export default function Contact() {
	return (
		<Flex
			as='section'
			className='contact'
			direction={'column'}
			justify={'center'}
			p={1}>
			<SectionHeader title='Contact Me!' />
			<ContactForm />
		</Flex>
	);
}
