import React from 'react';
import Jobs from './Employment.json';
import {
	Card,
	Flex,
	Heading,
	Text,
	CardHeader,
	CardBody,
	Grid,
	GridItem,
} from '@chakra-ui/react';
export default function Position() {
	return (
		<Grid
			templateColumns={{
				base: 'repeat(1fr)',
				md: 'repeat(2, 1fr)',
				lg: 'repeat(4, 1fr)',
			}}
			gap={3}>
			{Jobs.map((job) => {
				return (
					<GridItem key={job.id}>
						<Card className='job_card' padding={3} gap={2} height={'100%'}>
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
					</GridItem>
				);
			})}
		</Grid>
	);
}
