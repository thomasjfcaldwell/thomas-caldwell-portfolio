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
			justify={'space-between'}
			gap={5}>
			{Jobs.map((job) => {
				return (
					<Card
						className='job_card'
						key={job.id}
						width={'fill'}
						padding={3}
						gap={3}>
						<CardHeader padding={0} display={'flex'} justifyContent={'center'}>
							<Heading as='h5' fontSize='large' display={'inline'}>
								{job.company}
							</Heading>
							<Text display={'inline'}>{job.location}</Text>
						</CardHeader>
						<Flex justify={'space-between'}>
							<Text>{job.position}</Text>
							<Text>{job.date_rage}</Text>
						</Flex>
						<CardBody padding={0}>
							<Text>{job.description}</Text>
						</CardBody>
					</Card>
				);
			})}
		</Flex>
	);
}
