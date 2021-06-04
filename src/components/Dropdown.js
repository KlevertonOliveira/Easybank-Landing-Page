import Link from 'next/link';

const Dropdown = ({ isOpen }) => {
	return (
		<div className='absolute top-12 w-full z-10 bg-gradient-to-tr from-dark-blue to-transparent'>
			{isOpen ? (
				<ul className='mx-8 py-6 bg-white-main grid items-center text-center gap-y-6 shadow-lg border-2 border-gray-200' >
					<Link href='#'>
						<a className='dropdown-link'>Home</a>
					</Link>
					<Link href='#'>
						<a className='dropdown-link'>About</a>
					</Link>
					<Link href='#'>
						<a className='dropdown-link'>Contact</a>
					</Link>
					<Link href='#'>
						<a className='dropdown-link'>Blog</a>
					</Link>
					<Link href='#'>
						<a className='dropdown-link'>Careers</a>
					</Link>
				</ul>
			) : (
				''
			)}
		</div>
	);
};

export default Dropdown;
