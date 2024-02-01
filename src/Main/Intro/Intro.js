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
			alignItems={'center'}>
			<Flex className='hero-heading'>
				<Heading as='h2' fontSize={{ base: '24px', md: '30px', lg: '40px' }}>
					Hi, I am Thomas Caldwell, A Full-Stack Designer
				</Heading>
			</Flex>
			<Flex direction={{ base: 'column', md: 'row' }}>
				<Flex
					width={{ base: '100%' }}
					justifyContent={'center'}
					borderRadius={2}
					className='hero-image'>
					<Image src={thomasPhoto} alt='Photo Of Thomas' />
				</Flex>
				<Flex direction={'column'}>
					<Flex className='hero-text'>
						<Text
							color={'var(--gray-500, #718096)'}
							fontSize={['small', 'medium']}
							fontStyle={'normal'}
							fontWeight={'500'}
							lineHeight={'25px'}>
							I am a committed and proficient designer with expertise in coding.
							My capabilities extend to planning, designing, and developing
							modern, functional websites
						</Text>
					</Flex>
					<ButtonGroup
						className='hero-buttons'
						spacing={4}
						direction='row'
						align='center'>
						<Button colorScheme='green' size='sm'>
							Resume
						</Button>
						<Button colorScheme='green' size='sm' variant='outlined'>
							See Projects
						</Button>
					</ButtonGroup>
				</Flex>
			</Flex>
		</Flex>
	);
}

export default Intro;
