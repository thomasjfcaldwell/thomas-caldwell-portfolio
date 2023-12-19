import React from 'react';
import { Card, CardHeader, Flex, Heading } from '@chakra-ui/react';
import Projects from './Projects.json';

export default function Project() {
	return (
		<Flex direction='column'>
			<Heading>Project</Heading>
			<Flex direction={{ base: 'column', sm: 'row' }}>
				{Projects.map((data) => {
					return (
						<Card key={data.id}>
							<CardHeader>
								<Heading as='h5'>{data.title}</Heading>
							</CardHeader>
						</Card>
					);
				})}
			</Flex>
		</Flex>
	);
}
