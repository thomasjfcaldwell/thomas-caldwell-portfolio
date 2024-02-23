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
				xl: 'repeat(4, 1fr)',
			}}
			gap={3}
			p={2}
			bg={'gray.100'}>
			{Jobs.map((job) => {
				return (
					<GridItem key={job.id}>
						<Card className='job_card' padding={3} gap={2} height={'100%'}>
							<CardHeader padding={0} display={'flex'} gap={1} marginTop='1em'>
								<Heading as='h5'>{job.company}</Heading>
								<Text as={'h6'}>{job.location}</Text>
							</CardHeader>
							<Flex justify={'space-between'}>
								<Text as='h5'>{job.position}</Text>
								<Text as='h6'>{job.date_rage}</Text>
							</Flex>
							<CardBody marginBottom='1em' p={0}>
								<Text as={'p'}>{job.description}</Text>
							</CardBody>
						</Card>
					</GridItem>
				);
			})}
		</Grid>
	);
}
