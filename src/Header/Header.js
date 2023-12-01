import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';

function Header() {
	return (
		<div className='header'>
			<div>
				<h2>Header</h2>
				<Logo />
				<Navigation />
			</div>
		</div>
	);
}

export default Header;
