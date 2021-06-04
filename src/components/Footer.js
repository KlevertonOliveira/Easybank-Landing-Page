import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='bg-dark-blue'>
			<div className='py-12 spacing flex flex-col md:flex-row md:justify-between text-center'>

				{/* Main Grid */}
				<section className='grid md:grid-cols-3 md:gap-8 lg:gap-20 desktop:gap-32 place-items-center'>

					{/* Column 1 */}
					<div className='mb-10 md:mb-0 px-8 md:px-0'>

						{/* Logo */}
						<div className='bg-white-main p-1 mb-8 md:mb-12'>
							<Link href=''>
								<a className='footer-link'>
									<img src='/images/logo.svg' alt='Easybank' />
								</a>
							</Link>
						</div>

						{/* Social media */}
						<div className='grid grid-cols-5 gap-x-3'>
							<Link href='#'>
								<a className='footer-link'>
									<img
										src='/images/icon-facebook.svg'
										alt='Our Facebook Page'
									/>
								</a>
							</Link>
							<Link href='#'>
								<a className='footer-link'>
									<img
										src='/images/icon-youtube.svg'
										alt='Our Youtube Channel'
										className='footer-link'
									/>
								</a>
							</Link>
							<Link href='#'>
								<a className='footer-link'>
									<img
										src='/images/icon-twitter.svg'
										alt='Our Twitter Profile'
										className='footer-link'
									/>
								</a>
							</Link>
							<Link href='#'>
								<a className='footer-link'>
									<img
										src='/images/icon-pinterest.svg'
										alt='Our Pinterest Profile'
										className='footer-link'
									/>
								</a>
							</Link>
							<Link href='#'>
								<a className='footer-link'>
									<img
										src='/images/icon-instagram.svg'
										alt='Our Instagram Profile'
										className='footer-link'
									/>
								</a>
							</Link>
						</div>
					</div>

					{/* Column 2 */}
					<div className='text-light-grayish-blue mb-4 md:mb-0 md:text-left'>
						<ul className='grid gap-y-3'>
							<li>
								<Link href='#'>
									<a className='footer-link'>About Us</a>
								</Link>
							</li>
							<li>
								<Link href='#'>
									<a className='footer-link'>Contact</a>
								</Link>
							</li>
							<li>
								<Link href='#'>
									<a className='footer-link'>Blog</a>
								</Link>
							</li>
						</ul>
					</div>

					{/* Column 3 */}
					<div className='text-light-grayish-blue mb-10 md:mb-0'>
						<ul className='grid gap-y-3 md:text-left'>
							<li>
								<Link href='#'>
									<a className='footer-link'>Careers</a>
								</Link>
							</li>
							<li>
								<Link href='#'>
									<a className='footer-link'>Support</a>
								</Link>
							</li>
							<li>
								<Link href='#'>
									<a className='footer-link'>Privacy Policy</a>
								</Link>
							</li>
						</ul>
					</div>
				</section>

				{/* Copyright */}
				<section className='mt-2 md:mt-4 md:text-right'>
					<Link href='#'>
						<a className='cta-button'>Request Invite</a>
					</Link>
					<p className='text-sm text-grayish-blue mt-8 md:mt-12'>
						© Easybank. All Rights Reserved
					</p>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
