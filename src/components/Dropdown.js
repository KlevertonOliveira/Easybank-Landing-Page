import Link from 'next/link';

const Dropdown = ({ isOpen }) => {
	return (
		<div className='h-full'>
			{isOpen ? 
				(
					<div className='z-10 bg-gradient-to-tr from-dark-blue to-transparent h-full'>
						<ul className='mx-8 md:mx-40 py-6 bg-white-main grid items-center text-center gap-y-6 shadow-lg border-2 border-gray-200 h-full'>
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
					</div>
				) 
			: 			
			('')
		}
		</div>
	);
};

export default Dropdown;
