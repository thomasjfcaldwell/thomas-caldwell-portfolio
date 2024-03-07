import React from 'react';
import {
	Heading,
	HStack,
	Flex,
	Center,
	Box,
	Text,
	Grid,
} from '@chakra-ui/react';
import FigmaIcon from './SkillsIcons/FigmaIcon';
import XdIcon from './SkillsIcons/XdIcon';
import PhotoshopIcon from './SkillsIcons/PhotoshopIcon';
import IndesignIcon from './SkillsIcons/IndesignIcon';
import AiIcon from './SkillsIcons/AiIcon';
import HtmlIcon from './SkillsIcons/HtmlIcon';
import CssIcon from './SkillsIcons/CssIcon';
import JavascriptIcon from './SkillsIcons/JavascriptIcon';
import BootstrapIcon from './SkillsIcons/BootstrapIcon';
import ReactIcon from './SkillsIcons/ReactIcon';
import ChromeIcon from './SkillsIcons/ChromeIcon';
import VsIcon from './SkillsIcons/VsIcon';
import Windows from './SkillsIcons/Windows';
import ZoomIcon from './SkillsIcons/ZoomIcon';

export default function SkillCard() {
	const skillCardStyle = {
		gap: '1rem',
		flexDirection: 'column',
		border: '1px black',
		height: '100%',
		minHeight: '170px',
		padding: ['1em', '1.2em', '1.5em', '2em'],
		backgroundColor: 'white',
	};

	return (
		<Grid
			bg={'gray.100'}
			padding={2}
			gap={2}
			templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}>
			<Flex sx={skillCardStyle}>
				<HStack>
					<Center>
						<FigmaIcon />
					</Center>
					<Center>
						<XdIcon />
					</Center>
					<Center>
						<PhotoshopIcon />
					</Center>
					<Center>
						<IndesignIcon />
					</Center>
					<Center>
						<AiIcon />
					</Center>
				</HStack>
				<Box>
					<Text as='h5'>Design Skills</Text>
				</Box>
				<Box>
					<Text as={'p'}>
						Experienced graphic designer adept in Adobe Creative Cloud, Figma,
						and other design software, creating visually compelling solutions
						with precision and creativity
					</Text>
				</Box>
			</Flex>
			<Flex sx={skillCardStyle}>
				<HStack>
					<Center>
						<HtmlIcon />
					</Center>
					<Center>
						<CssIcon />
					</Center>
					<Center>
						<JavascriptIcon />
					</Center>
					<Center>
						<BootstrapIcon />
					</Center>
					<Center>
						<ReactIcon />
					</Center>
				</HStack>
				<Box>
					<Text as='h5'>Coding Skills</Text>
				</Box>
				<Box>
					<Text as={'p'}>
						Proficient in HTML, CSS, and JavaScript, with advanced expertise in
						React and various frameworks. Adept at creating dynamic, responsive
						websites
					</Text>
				</Box>
			</Flex>
			<Flex sx={skillCardStyle}>
				<HStack>
					<Center>
						<ChromeIcon />
					</Center>
					<Center>
						<VsIcon />
					</Center>
					<Center>
						<Windows />
					</Center>
					<Center>
						<ZoomIcon />
					</Center>
				</HStack>
				<Box>
					<Text as='h5'>Collaboration skills</Text>
				</Box>
				<Box>
					<Text as={'p'}>
						Proficient in collaboration tools like Jira and Teams, ensuring
						seamless project management and effective communication within
						cross-functional teams
					</Text>
				</Box>
			</Flex>
		</Grid>
	);
}
