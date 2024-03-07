import React from 'react';
import { Button, Flex } from '@chakra-ui/react';
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
			<Flex justify={'center'} p={4}>
				<Button variant={'contactButton'}>Send</Button>
			</Flex>
		</Flex>
	);
}
