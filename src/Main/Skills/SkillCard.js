import React from 'react';
import { Container, Heading, Box } from '@chakra-ui/react';
import Skills from './Skills.json';

export default function SkillCard() {
	return (
		<Container>
			<Heading as='h3'>SkillCard</Heading>
			{Skills.map((skill) => {
				return (
					<Box key={skill.id}>
						<Heading as='h5'>{skill.title}</Heading>
					</Box>
				);
			})}
		</Container>
	);
}
