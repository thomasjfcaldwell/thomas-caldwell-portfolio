import './App.css';
import Main from './Main';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Heading } from '@chakra-ui/react';

function App() {
	return (
		<div className='App'>
			<Heading as='h1'>Top of Website</Heading>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
