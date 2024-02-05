import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Projects from './Projects.json';
import Picnics from './Picnics';
import Game from './Game';
import QuickAndEasy from './QuickAndEasy';

export default function Project() {
	const tabStyle = {
		fontSize: '10px',
		p: '1em',
	};
	return (
		<Flex direction='column'>
			<Tabs>
				<TabList>
					<Tab sx={tabStyle}>Local Business Website</Tab>
					<Tab sx={tabStyle}>Trivia Game</Tab>
					<Tab sx={tabStyle}>E-Commerce Store</Tab>
				</TabList>
				<TabPanels>
					<TabPanel p={0} marginBlock={5}>
						<Picnics />
					</TabPanel>
					<TabPanel>
						<Game />
					</TabPanel>
					<TabPanel>
						<QuickAndEasy />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Flex>
	);
}
