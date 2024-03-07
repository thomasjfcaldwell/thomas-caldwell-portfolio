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
						<Card
							className='job_card'
							padding={{ base: '10px', md: '20px' }}
							gap={3}
							overflow='hidden'
							height='100%'>
							<CardHeader
								padding={0}
								display={'flex'}
								gap={1}
								alignItems={'center'}>
								<Text as='h3'>{job.company}</Text>
								<Text as='h6'>{job.location}</Text>
							</CardHeader>
							<Flex justify={'space-between'} alignItems={'center'}>
								<Text as='h5'>{job.position}</Text>
								<Text as='h6'>{job.date_rage}</Text>
							</Flex>
							<CardBody p={0}>
								<Text as={'p'}>{job.description}</Text>
							</CardBody>
						</Card>
					</GridItem>
				);
			})}
		</Grid>
	);
}
