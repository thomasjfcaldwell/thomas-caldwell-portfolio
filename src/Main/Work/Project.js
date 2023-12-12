import React from 'react';
import { Card, CardHeader, Container, Heading } from '@chakra-ui/react';
import Projects from './Projects.json';

export default function Project() {
	return (
		<Container>
			<Heading>Project</Heading>
			{Projects.map((data) => {
				return (
					<Card key={data.id}>
						<CardHeader>
							<Heading as='h5'>{data.title}</Heading>
						</CardHeader>
					</Card>
				);
			})}
		</Container>
	);
}
