import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import thomasPhoto from '../../Images/portfolioPhoto.jpg';

function Intro() {
	return (
		<Flex
			as='section'
			className='intro'
			flexDirection={'column'}
			alignItems={'center'}
			backgroundColor={'pink'}>
			<Heading as='h2' fontSize={'x-large'} padding={5}>
				Hi, I am Thomas Caldwell, A Full-Stack Designer
			</Heading>
			<Flex width={'100%'} justifyContent={'center'}>
				<Image src={thomasPhoto} alt='Photo Of Thomas' />
			</Flex>
			<Text padding={5} fontSize={'large'}>
				I am a committed and proficient designer with expertise in coding. My
				capabilities extend to planning, designing, and developing modern,
				functional websites
			</Text>
			<Button marginBlock={'50px'} colorScheme='green'>
				Download Resume
			</Button>
		</Flex>
	);
}

export default Intro;
