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
							<Heading fontSize={'12px'}>Local Business Website</Heading>
							<Box display={'flex'} gap={4}>
								<Text
									color={'lightgrey'}
									fontSize={{ base: '10px', sm: '12px' }}>
									www.popup-picnics.com
								</Text>
								<Text fontSize={{ base: '8px', sm: '12px' }}>
									2021 - Present
								</Text>
							</Box>
						</CardHeader>
						<CardBody>
							<Box>
								<Text fontSize={'9px'}>
									Crafted for a local business adapting to government
									restrictions, this project involved creating a dedicated
									website to introduce and manage bookings for their new
									income-generating service, distinct from their main site
								</Text>
							</Box>
							<Box my={5}>
								<Text fontSize={'9px'}>
									This venture entailed collaborative planning and design
									sessions with the business owner, where Figma prototypes were
									meticulously crafted for each page. The implementation phase
									utilized React and Material UI for seamless development
								</Text>
							</Box>
							<Box>
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
							<Button>See More</Button>
						</CardFooter>
					</Card>
				</Box>
			</Grid>
		</Box>
	);
}
