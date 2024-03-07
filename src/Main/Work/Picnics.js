import { Box, Button, Grid, Heading, Image, Text } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import FigmaIcon from '../Skills/SkillsIcons/FigmaIcon';
import React from 'react';

export default function Picnics() {
	return (
		<Box>
			<Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={2}>
				<Box>
					<Image />
				</Box>
				<Box>
					<Card>
						<CardHeader>
							<Text as='h3'>Local Business Website</Text>
							<Box display={'flex'} gap={2} alignItems={'center'}>
								<Text as={'h5'}>www.popup-picnics.com</Text>
								<Text as={'h6'}>2021 - Present</Text>
							</Box>
						</CardHeader>
						<CardBody gap={1} display='flex' flexDirection='column'>
							<Box>
								<Text as={'p'}>
									Crafted for a local business adapting to government
									restrictions, this project involved creating a dedicated
									website to introduce and manage bookings for their new
									income-generating service, distinct from their main site
								</Text>
							</Box>
							<Box>
								<Text as={'p'}>
									This venture entailed collaborative planning and design
									sessions with the business owner, where Figma prototypes were
									meticulously crafted for each page. The implementation phase
									utilized React and Material UI for seamless development
								</Text>
							</Box>
							<Box paddingBlock={2}>
								<Box>
									<Text>Technology Used</Text>
								</Box>
								<Box display={'flex'} flexDirection={'row'}>
									<Box>
										<FigmaIcon />
									</Box>
									<Box>
										<FigmaIcon />
									</Box>
									<Box>
										<FigmaIcon />
									</Box>
									<Box>
										<FigmaIcon />
									</Box>
									<Box>
										<FigmaIcon />
									</Box>
								</Box>
							</Box>
						</CardBody>
						<CardFooter>
							<Button variant={'workButton'}>See More</Button>
						</CardFooter>
					</Card>
				</Box>
			</Grid>
		</Box>
	);
}
