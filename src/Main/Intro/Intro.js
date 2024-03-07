import {
	Button,
	Flex,
	Image,
	Text,
	ButtonGroup,
	Grid,
	GridItem,
} from '@chakra-ui/react';
import thomasPhoto from '../../SVG/Asset 1.svg';

function Intro() {
	const sectionStyle = {
		flexDirection: 'column',
		margin: '0 auto',
		width: '100%',
		maxWidth: '1440px',
		minWidth: '300px',
	};

	const heroHeadingStyle = {
		alignSelf: 'stretch',
		alignItems: 'center',
	};

	const imageContainerStyle = {
		justifyContent: 'center',
		display: 'flex',
		height: '300px',
		alignSelf: 'stretch',
	};
	const contentContainerStyle = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: { base: 'center' },
		padding: 2,
	};

	return (
		<Flex as='section' className='intro' sx={sectionStyle}>
			<Grid
				templateColumns={{ base: '1fr', md: '1fr 2fr' }}
				paddingInline={{ base: 0, md: 10 }}
				gap={10}
				alignItems={'center'}>
				<GridItem className='hero-image' sx={imageContainerStyle}>
					<Image src={thomasPhoto} alt='Photo Of Thomas' />
				</GridItem>
				<GridItem gap={4} sx={contentContainerStyle}>
					<Flex className='hero-heading' sx={heroHeadingStyle}>
						<Text as={'h2'}>
							Hi, I am Thomas Caldwell, A Full-Stack Designer
						</Text>
					</Flex>
					<Flex className='hero-text'>
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
							Download Resume/CV
						</Button>
					</ButtonGroup>
				</GridItem>
			</Grid>
		</Flex>
	);
}

export default Intro;
