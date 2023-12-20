import React from 'react';
import {
	Container,
	Heading,
	HStack,
	Flex,
	Center,
	Box,
	Text,
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
	const skillTextStyle = {
		fontSize: '12px',
		fontStyle: 'normal',
		fontWeight: '500',
		lineHeight: '16px' /* 133.333% */,
	};

	return (
		<Container>
			<Flex direction='column' p={5} backgroundColor={'green'} gap={5}>
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
					<Heading as='h5' fontSize={'16px'}>
						Design Skills
					</Heading>
				</Box>
				<Box>
					<Text sx={skillTextStyle}>
						Experienced graphic designer adept in Adobe Creative Cloud, Figma,
						and other design software, creating visually compelling solutions
						with precision and creativity
					</Text>
				</Box>
			</Flex>
			<Flex direction='column' p={5} backgroundColor={'green'} gap={5}>
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
					<Heading as='h5' fontSize={'16px'}>
						Coding Skills
					</Heading>
				</Box>
				<Box>
					<Text sx={skillTextStyle}>
						Proficient in HTML, CSS, and JavaScript, with advanced expertise in
						React and various frameworks. Adept at creating dynamic, responsive
						websites
					</Text>
				</Box>
			</Flex>
			<Flex direction='column' p={5} backgroundColor={'green'} gap={5}>
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
					<Heading as='h5' fontSize={'16px'}>
						Collaboration skills
					</Heading>
				</Box>
				<Box>
					<Text sx={skillTextStyle}>
						Proficient in collaboration tools like Jira and Teams, ensuring
						seamless project management and effective communication within
						cross-functional teams
					</Text>
				</Box>
			</Flex>
		</Container>
	);
}
