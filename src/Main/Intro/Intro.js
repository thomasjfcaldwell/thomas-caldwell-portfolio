import {
	Button,
	Flex,
	Heading,
	Image,
	Text,
	ButtonGroup,
} from '@chakra-ui/react';
import thomasPhoto from '../../Images/portfolioPhoto.jpg';

function Intro() {
	return (
		<Flex
			as='section'
			className='intro'
			flexDirection={'column'}
			alignItems={'center'}
			backgroundColor={'green'}
			gap={9}
			margin='2rem 0'>
			<Flex className='hero-heading'>
				<Heading as='h2' fontSize={'x-large'} fontWeight={'700'} p={1}>
					Hi, I am Thomas Caldwell, A Full-Stack Designer
				</Heading>
			</Flex>
			<Flex width={'100%'} justifyContent={'center'} className='hero-image'>
				<Image src={thomasPhoto} alt='Photo Of Thomas' />
			</Flex>
			<Flex className='hero-text' p={5}>
				<Text
					color={'var(--gray-500, #718096)'}
					fontFamily={'Poppins'}
					fontSize={'14px'}
					fontStyle={'normal'}
					fontWeight={'500'}
					lineHeight={'20px'}>
					I am a committed and proficient designer with expertise in coding. My
					capabilities extend to planning, designing, and developing modern,
					functional websites
				</Text>
			</Flex>
			<ButtonGroup
				className='hero-buttons'
				spacing={4}
				direction='row'
				align='center'>
				<Button colorScheme='green' size='lg'>
					Resume
				</Button>
				<Button colorScheme='purple' size='lg'>
					See Projects
				</Button>
			</ButtonGroup>
		</Flex>
	);
}

export default Intro;
