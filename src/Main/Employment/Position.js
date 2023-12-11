import React from 'react';
import Jobs from './Employment.json';
import { Card, Flex, Heading, Box, Text } from '@chakra-ui/react';
export default function Position() {
	return (
		<Flex className='job_container'>
			{Jobs.map((job) => {
				return (
					<Card className='job_card' key={job.id} maxW='340px'>
						<Heading as='h5'>{job.company}</Heading>
						<Box>
							<Text>{job.position}</Text>
							<Text>{job.date_range}</Text>
						</Box>
						<Text>{job.description}</Text>
					</Card>
				);
			})}
		</Flex>
	);
}
