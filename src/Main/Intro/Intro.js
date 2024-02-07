import {
	Button,
	Flex,
	Heading,
	Image,
	Text,
	ButtonGroup,
	Grid,
	GridItem,
} from '@chakra-ui/react';
import thomasPhoto from '../../Images/portfolioPhoto.jpg';

function Intro() {
	return (
		<Flex
			as='section'
			className='intro'
			flexDirection={'column'}
			alignItems={'center'}>
			<Flex className='hero-heading' margin={'1em'}>
				<Heading as='h2'>
					Hi, I am Thomas Caldwell, A Full-Stack Designer
				</Heading>
			</Flex>
			<Grid
				templateColumns={{ base: '1fr', md: '1fr 2fr' }}
				paddingInline={{ base: 0, md: 10 }}
				gap={10}>
				<GridItem
					justifyContent={'center'}
					borderRadius={2}
					className='hero-image'>
					<Image
						src={thomasPhoto}
						alt='Photo Of Thomas'
						borderRadius={10}
						width={'75%'}
					/>
				</GridItem>
				<GridItem direction={'column'}>
					<Flex className='hero-text' padding={{ base: 0, md: 10 }}>
						<Text as={'p'}>
							I am a committed and proficient designer with expertise in coding.
							My capabilities extend to planning, designing, and developing
							modern, functional websites
						</Text>
					</Flex>
					<ButtonGroup
						className='hero-buttons'
						direction='row'
						justifyContent={'center'}>
						<Button colorScheme='green' size='sm'>
							Resume
						</Button>
						<Button variant={{ base: 'base', sm: 'sm', md: 'md' }}>
							See Projects
						</Button>
					</ButtonGroup>
				</GridItem>
			</Grid>
		</Flex>
	);
}

export default Intro;
