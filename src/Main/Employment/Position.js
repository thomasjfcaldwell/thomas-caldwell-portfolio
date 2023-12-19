import React from 'react';
import Jobs from './Employment.json';
import {
	Card,
	Flex,
	Heading,
	Text,
	CardHeader,
	CardBody,
} from '@chakra-ui/react';
export default function Position() {
	return (
		<Flex
			flexDirection={{ base: 'column', md: 'row' }}
			justify={'space-between'}>
			{Jobs.map((job) => {
				return (
					<Card className='job_card' key={job.id} width={'fill'} padding={1}>
						<CardHeader>
							<Heading as='h5' fontSize='large'>
								{job.company}
							</Heading>
						</CardHeader>
						<CardBody>
							<Flex>
								<Text>{job.position}</Text>
								<Text>{job.date_rage}</Text>
							</Flex>
							<Text>{job.description}</Text>
						</CardBody>
					</Card>
				);
			})}
		</Flex>
	);
}
