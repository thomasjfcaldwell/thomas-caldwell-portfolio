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
		fontWeight: 'bold',
		fontSize: '12px',
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
		<Flex padding={2} direction={'column'} as='footer'>
			{/* Top Area */}
			<Flex direction={'column'}>
				<Heading as='h3' fontSize={'24px'} fontWeight={'bold'}>
					Thomas Caldwell
				</Heading>
				<List display='flex' padding={1}>
					<ListItem>
						<ListIcon as={LinkedinOutlined} rotate={180} />
					</ListItem>
					<ListItem>
						<ListIcon as={MailOutlined} />
					</ListItem>
					<ListItem>
						<ListIcon as={PhoneOutlined} />
					</ListItem>
					<ListItem>
						<ListIcon as={GithubOutlined} />
					</ListItem>
				</List>
			</Flex>
			{/* Middle Area */}
			<Flex gap={10}>
				<Flex direction='column'>
					<List>
						{footLink.slice(0, 4).map((item) => {
							return (
								<ListItem sx={footerLinkStyle} key={item.id}>
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
								<ListItem sx={footerLinkStyle} key={item.id}>
									{item.link}
								</ListItem>
							);
						})}
					</List>
				</Flex>
			</Flex>
			{/* Bottom Area */}
			<Flex>
				<Heading as='h5' fontSize={'smaller'}>
					Copyright 2023 • Thomas Caldwell{' '}
				</Heading>
			</Flex>
		</Flex>
	);
}

export default Footer;
