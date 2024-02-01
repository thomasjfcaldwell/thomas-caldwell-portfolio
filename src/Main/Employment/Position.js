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
			flexWrap={'wrap'}
			gap={3}>
			{Jobs.map((job) => {
				return (
					<Card
						className='job_card'
						key={job.id}
						padding={3}
						gap={2}
						width={{ base: '100%', md: '50%', lg: '25%' }}>
						<CardHeader padding={0} display={'flex'} gap={1} marginTop='1em'>
							<Heading as='h5' fontSize={['12px', '16px']}>
								{job.company}
							</Heading>
							<Text fontSize={['10px', '12px']}> {job.location}</Text>
						</CardHeader>
						<Flex justify={'space-between'}>
							<Text color={'green.600'} fontWeight={'medium'}>
								{job.position}
							</Text>
							<Text fontWeight={'bold'}>{job.date_rage}</Text>
						</Flex>
						<CardBody marginBottom='1em' p={0}>
							<Text fontSize={{ base: '10px' }}>{job.description}</Text>
						</CardBody>
					</Card>
				);
			})}
		</Flex>
	);
}
