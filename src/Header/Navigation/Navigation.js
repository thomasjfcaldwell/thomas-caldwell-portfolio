import React from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Link } from '@chakra-ui/react';
import { UnlockIcon } from '@chakra-ui/icons';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

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
			width={'100%'}
			direction={{ base: 'column', lg: 'row' }}
			alignItems={'center'}
			gap={10}>
			<Flex alignItems={'center'}>
				<Link href='https://chakra-ui.com' isExternal variant={'navLink'}>
					Projects <UnlockIcon ml='10px' mt='-5px' />
				</Link>
			</Flex>
			<Flex>
				<Link href='https://chakra-ui.com' isExternal variant={'navLink'}>
					Work Experience <UnlockIcon ml='10px' mt='-5px' />
				</Link>
			</Flex>
			<Flex>
				<Link href='https://chakra-ui.com' isExternal variant={'navLink'}>
					About Me <UnlockIcon ml='10px' mt='-5px' />
				</Link>
			</Flex>
			<Flex>
				<Link href='https://chakra-ui.com' isExternal variant={'navLink'}>
					Contact
					<UnlockIcon ml='10px' mt='-5px' />
				</Link>
			</Flex>
			<Flex>
				<ThemeToggle />
			</Flex>
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
