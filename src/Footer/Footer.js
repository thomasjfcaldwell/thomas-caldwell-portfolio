import { Flex, Heading } from '@chakra-ui/react';
import {
	GithubOutlined,
	LinkedinOutlined,
	MailOutlined,
	PhoneOutlined,
} from '@ant-design/icons';
import { List, ListItem, ListIcon } from '@chakra-ui/react';

function Footer() {
	const footerLinkStyle = {
		fontWeight: 'normal',
		color: 'blackalpha.300',
	};

	const footLink = [
		{
			id: 1,
			link: 'Home',
		},
		{
			id: 2,
			link: 'Featured Work',
		},
		{
			id: 3,
			link: 'About Me',
		},
		{
			id: 4,
			link: 'Download Resume',
		},
		{
			id: 5,
			link: 'Work Experience',
		},
		{
			id: 6,
			link: 'Skills',
		},
		{
			id: 7,
			link: 'Linkedin',
		},
	];
	return (
		<Flex
			direction={'column'}
			padding={{ base: 2, md: 8, lg: 10 }}
			as='footer'
			gap={9}>
			{/* Top Area */}
			<Flex
				direction={{ base: 'column', md: 'row' }}
				justify={{ base: 'start', md: 'space-between' }}
				padding={{ base: '1em', lg: '2em' }}
				gap={8}>
				<Flex direction={'column'}>
					<Heading
						as='h3'
						fontSize={{ base: '24px', md: '30px', lg: '40px' }}
						fontWeight={'medium'}>
						thomas caldwell
					</Heading>
					<List display='flex' padding={1}>
						<ListItem as='a' href='https://chakra-ui.com'>
							<ListIcon as={LinkedinOutlined} color='gray.400' />
						</ListItem>
						<ListItem>
							<ListIcon as={MailOutlined} color='gray.400' />
						</ListItem>
						<ListItem>
							<ListIcon as={PhoneOutlined} color='gray.400' />
						</ListItem>
						<ListItem>
							<ListIcon as={GithubOutlined} color='gray.400' />
						</ListItem>
					</List>
				</Flex>
				{/* Middle Area */}
				<Flex gap={20}>
					<Flex direction='column'>
						<List>
							{footLink.slice(0, 4).map((item) => {
								return (
									<ListItem
										sx={footerLinkStyle}
										key={item.id}
										fontSize={['12px', '14px', '18px']}>
										{item.link}
									</ListItem>
								);
							})}
						</List>
					</Flex>
					<Flex direction='column'>
						<List>
							{footLink.slice(4, 7).map((item) => {
								return (
									<ListItem
										sx={footerLinkStyle}
										key={item.id}
										fontSize={['12px', '14px', '18px']}>
										{item.link}
									</ListItem>
								);
							})}
						</List>
					</Flex>
				</Flex>
			</Flex>
			{/* Bottom Area */}
			<Flex justify='center'>
				<Heading as='h5' fontSize={['8px', '12px', '14px']}>
					Copyright 2023 • Thomas Caldwell{' '}
				</Heading>
			</Flex>
		</Flex>
	);
}

export default Footer;
