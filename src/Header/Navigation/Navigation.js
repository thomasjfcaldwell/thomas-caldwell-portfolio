import React from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Link } from '@chakra-ui/react';
import { UnlockIcon } from '@chakra-ui/icons';

export default function Navigation() {
	const [isLargeScreen, setIsLargeScreen] = useState(
		window.matchMedia('(min-width: 1024px)').matches
	);

	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.matchMedia('(min-width: 1024px)').matches);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return <Box>{isLargeScreen ? <MainNav /> : <HamburgerMenuToggle />}</Box>;
}

const MainNav = () => {
	return (
		<Flex
			bg={'green'}
			width={'100%'}
			direction={{ base: 'column', lg: 'row' }}
			gap={10}>
			<Box>
				<Link href='https://chakra-ui.com' isExternal>
					Projects <UnlockIcon />
				</Link>
			</Box>
			<Box>
				<Link href='https://chakra-ui.com' isExternal>
					Work Experience <UnlockIcon mx='2px' />
				</Link>
			</Box>
			<Box>
				<Link href='https://chakra-ui.com' isExternal>
					About Me <UnlockIcon mx='2px' />
				</Link>
			</Box>
			<Box>
				<Link href='https://chakra-ui.com' isExternal>
					Contact
					<UnlockIcon mx='2px' />
				</Link>
			</Box>
		</Flex>
	);
};

const HamburgerMenuToggle = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<div>
			<HamburgerIcon
				className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
				onClick={toggleMenu}
			/>

			{/* Your menu items or components can go here */}
			{isMenuOpen && (
				<Box
					position={'absolute'}
					top={'100px'}
					left={'0'}
					bg={'yellow'}
					width={'100%'}
					height={'800px'}>
					<MainNav />
				</Box>
			)}
		</div>
	);
};
