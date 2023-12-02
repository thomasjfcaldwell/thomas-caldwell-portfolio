import React from 'react';
import Jobs from './Employment.json';
import { Box, Card, Flex } from '@chakra-ui/react';
export default function Position() {
	return (
		<Box as='section' className='position_container'>
			<h4>Position</h4>
			<Flex className='job_container'>
				{Jobs.map((job) => {
					return (
						<Card className='job_card' key={job.id}>
							<h5>{job.company}</h5>
							<div>
								<p>{job.position}</p>
								<p>{job.date_range}</p>
							</div>
							<p>{job.description}</p>
						</Card>
					);
				})}
			</Flex>
		</Box>
	);
}
