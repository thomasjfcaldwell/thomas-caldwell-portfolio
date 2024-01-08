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
		<Flex flexDirection={{ base: 'column', lg: 'row' }} gap={3}>
			{Jobs.map((job) => {
				return (
					<Card
						backgroundColor={'secondary.200'}
						className='job_card'
						key={job.id}
						padding={3}
						gap={2}>
						<CardHeader
							padding={0}
							display={'flex'}
							justifyContent={'center'}
							gap={1}
							marginTop='1em'>
							<Heading as='h5' fontSize={['16px', '20px']}>
								{job.company}
							</Heading>
							<Text fontSize={['14px', '18px']}> {job.location}</Text>
						</CardHeader>
						<Flex justify={'space-between'}>
							<Text color={'green.600'} fontWeight={'medium'}>
								{job.position}
							</Text>
							<Text fontWeight={'bold'}>{job.date_rage}</Text>
						</Flex>
						<CardBody marginBottom='1em' p={0}>
							<Text fontSize={['xs', 'sm']}>{job.description}</Text>
						</CardBody>
					</Card>
				);
			})}
		</Flex>
	);
}
