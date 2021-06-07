import Link from 'next/link';

const Navbar = ({ toggle, isOpen }) => {
	return (
		<header className='bg-white-main'>
			<nav className='spacing py-4 flex justify-between items-center'>
				{/* Logo */}
				<div>
					<Link href='/'>
						<a>
							<img src='/images/logo.svg' alt='Easybank' />
						</a>
					</Link>
				</div>

				{/* Hamburger / Menu Toggle */}
				<div className='lg:hidden cursor-pointer' onClick={toggle}>
					{isOpen ? (
						<img src='/images/icon-close.svg' alt='dropdown menu toggle icon' />
					) : (
						<img
							src='/images/icon-hamburger.svg'
							alt='dropdown menu toggle icon'
						/>
					)}
				</div>

				{/* Links / Item's List */}
				<ul className='hidden lg:flex lg:gap-x-10'>
					<li>
						<Link href='#'>
							<a className='navbar-link'>Home</a>
						</Link>
					</li>
					<li>
						<Link href='#'>
							<a className='navbar-link'>About</a>
						</Link>
					</li>
					<li>
						<Link href='#'>
							<a className='navbar-link'>Contact</a>
						</Link>
					</li>
					<li>
						<Link href='#'>
							<a className='navbar-link'>Blog</a>
						</Link>
					</li>
					<li>
						<Link href='#'>
							<a className='navbar-link'>Careers</a>
						</Link>
					</li>
				</ul>

				{/* CTA button */}
				<div className='hidden lg:block'>
					<Link href='#'>
						<a className='cta-button'>Request Invite</a>
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
